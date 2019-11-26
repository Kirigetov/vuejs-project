<template>
  <div>
    <user-list :users="users">
      <template v-slot:table-head>
        <tr>
          <th scope="col">LastName</th>
          <th scope="col">Phone</th>
        </tr>
      </template>
      <template v-slot:table-body="{ user }">
          <td scope="col">{{ user.lastName }}</td>
          <td scope="col">{{ user.phone }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  components: {
    UserList
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
