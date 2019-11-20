<template>
  <div>
    <div v-if="!user">Загрузка...</div>
    <user-form v-else v-model="user"></user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import Axios from 'axios'
import _ from 'lodash'

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
  watch: {
    user: function(newVal, oldVal) {
      if (!_.isEqual(newVal, oldVal)) this.saveUser()
    }
  },
  created() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      Axios.get(`http://localhost:3004/users/${this.id}`).then(response => {
        this.user = response.data
      })
    },
    saveUser() {
      Axios.put(`http://localhost:3004/users/${this.id}`, this.user).then(response => {
        console.log(response)
      })
    }
  }
}
</script>
