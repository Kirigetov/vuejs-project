<template>
  <div>
    <div v-if="!user">Загрузка...</div>
    <user-form v-else v-model="user">
      <template v-slot:action="{ user }">
        <button type="button" class="btn btn-success" @click="saveUser">Save</button>
        <button class="btn btn-primary" type="button" @click="deleteUser">delete</button>
      </template>
    </user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'EditUserPage',
  components: {
    UserForm
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  created() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios.get(`http://localhost:3004/users/${this.id}`).then(response => {
        this.user = response.data
      })
    },
    saveUser() {
      axios.patch(`http://localhost:3004/users/${this.id}`, this.user).then(() => {
        this.$router.push('/users')
      })
    },
    deleteUser() {
      axios.delete(`http://localhost:3004/users/${this.id}`).then(() => this.$router.push('/users'))
    }
  }
}
</script>
