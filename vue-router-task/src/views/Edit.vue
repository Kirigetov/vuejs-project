<template>
  <div>
    <div v-if="!user">Загрузка...</div>
    <user-form v-else v-model="user"></user-form>
    <!-- <user-form v-else :user="user" @change="user = $event"></user-form> -->
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import Axios from 'axios'

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
  created() {
    this.loadUser()
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    loadUser() {
      Axios.get(`http://localhost:3004/users/${this.id}`).then(response => {
        this.user = response.data
      })
    }
  }
}
</script>
