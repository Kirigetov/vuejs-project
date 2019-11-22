<template>
  <div>
    <h2>Список пользователей</h2>

    <div>Пользователей в базе - {{ userTotal }}</div>

    <div class="form-group">
      <input type="number" class="form-control" v-model="usersPerPage" />

      <div>Выбрано элементов на страницу - {{ usersPerPage }}</div>
    </div>

    <div v-if="!users.length">Загрузка...</div>
    <user-list v-else :users="usersListForPage" @delete="deleteUser" />


    <div class="form-block"><strong>Выбрана страница {{currentPage}}</strong></div>
    <pagination v-model="currentPage" :pages="pages"></pagination>

  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList,
    'pagination': Pagination
  },
  data: function() {
    return {
      users: [],
      usersPerPage: 5,
      usersListForPage: [],
      pages: 1,
      currentPage: 1
    }
  },
  computed: {
    userTotal: function() {
      return this.users.length
    }
  },
  created: function() {
    this.loadUsers()
  },
  methods: {
    usersToShow() {
      let firstItemIndex = (this.currentPage * this.usersPerPage) - this.usersPerPage
      let lastItemIndex = this.currentPage * this.usersPerPage

      this.usersListForPage = this.users.slice(firstItemIndex, lastItemIndex)
      this.pages = Math.ceil(this.userTotal / this.usersPerPage)
    },
    loadUsers() {
      axios
        .get('http://localhost:3004/users/')
        .then(response => {
          this.users = response.data
          this.usersToShow()
        })
        .catch(error => {
          console.error(error)
        })
    },
    deleteUser(id) {
      axios.delete(`http://localhost:3004/users/${id}`).then(() => this.loadUsers())
    }
  },
  watch: {
    usersPerPage: 'usersToShow',
    currentPage: 'usersToShow'
  }
}
</script>
