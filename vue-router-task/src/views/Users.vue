<template>
  <div>
    <h2>Список пользователей</h2>

    <div>Пользователей в базе - {{ userTotal }}</div>

    <div class="form-group">
      <input v-model="usersPerPage" type="number" class="form-control" />

      <div>Выбрано элементов на страницу - {{ usersPerPage }}</div>
    </div>

    <div class="form-group">
      <div>Поиск пользователей по фамилии:</div>

      <input-search
        v-model="searchReq"
        :users="users"
        @searchUpdate="showSearchResult"
      ></input-search>

      <span v-if="invalidSearch">Совпадений не найдено :(</span>
    </div>

    <div v-if="!users.length">Загрузка...</div>
    <user-list v-else :users="usersListForPage" @delete="deleteUser" />

    <div class="form-block">
      <strong>Выбрана страница {{ currentPage }}</strong>
    </div>
    <pagination v-model="currentPage" :pages="pages"></pagination>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'
import Pagination from '@/components/Pagination.vue'
import InputSearch from '@/components/InputSearch.vue'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList,
    pagination: Pagination,
    'input-search': InputSearch
  },
  data: function() {
    return {
      users: [],
      usersPerPage: 5,
      usersListForPage: [],
      pages: 1,
      currentPage: 1,
      searchReq: '',
      invalidSearch: false
    }
  },
  computed: {
    userTotal: function() {
      return this.users.length
    }
  },
  watch: {
    usersPerPage: 'usersToShow',
    currentPage: 'usersToShow'
  },
  created: function() {
    this.loadUsers()
  },
  methods: {
    usersToShow() {
      let firstItemIndex = this.currentPage * this.usersPerPage - this.usersPerPage
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
    },
    showSearchResult(searchresult) {
      if (searchresult.length > 0) {
        this.usersListForPage = searchresult
        this.invalidSearch = false
      } else {
        this.invalidSearch = true
        this.usersToShow()
      }
    }
  }
}
</script>
