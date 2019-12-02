<template>
  <div>
    <ValidationObserver ref="validationObserver">
      <div v-if="!user">Загрузка...</div>
      <user-form v-else v-model="user">
        <template v-slot:action="{ user }">
          <button type="button" class="btn btn-danger" @click="deleteUser">delete</button>
          <button type="button" class="btn btn-success" @click="saveUser">Save</button>
        </template>
      </user-form>
    </ValidationObserver>
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
    async saveUser() {
      const isValid = await this.$refs.validationObserver.validate();
      
      if(!isValid) {
        alert("Заполните все поля!")
        return
      }

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

<style>
.btn {
  margin-right: 20px;
}
</style>
