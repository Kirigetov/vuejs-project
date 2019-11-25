<template>
  <div>
      <div v-if="!user">Загрузка...</div>
      <user-form v-else v-model="user">
        <button class="btn btn-primary" type="button" @click="addUser">Add new user</button>
      </user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import Axios from 'axios'

export default {
  name: 'AddUserPage',
  components: {
    UserForm
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    addUser() {
      Axios.post(`http://localhost:3004/users/`, this.user).then(response => {
        console.log(response)
      })
    }
  }
}
</script>
