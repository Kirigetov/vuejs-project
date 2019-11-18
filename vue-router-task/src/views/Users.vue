<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length">Загрузка...</div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    }
  },
  created: function() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users/')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
