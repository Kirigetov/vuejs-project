<template>
  <div>
    <h2>Edit User's Profile</h2>
    <form ref="userForm">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail1"
          v-model="localUser.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputfirstname">FirstName</label>
        <input
          id="exampleInputfirstname"
          v-model="localUser.firstName"
          class="form-control"
          placeholder="FirstName"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputLastName">LastName</label>
        <input
          id="exampleInputLastName"
          v-model="localUser.lastName"
          class="form-control"
          placeholder="LastName"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPhone">Phone</label>
        <input
          id="exampleInputPhone"
          v-model="localUser.phone"
          class="form-control"
          placeholder="Phone"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputCompany">Company</label>
        <input
          id="exampleInputCompany"
          v-model="localUser.company"
          class="form-control"
          placeholder="Company"
        />
      </div>
    </form>

    <slot>
      <ul class="pagination">
        <li class="page-item" @click="prevUser">
          <a class="page-link">Previous User</a>
        </li>
        <li class="page-item" @click="nextUser">
          <a class="page-link">Next User</a>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'ultrachange'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localUser: null
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('ultrachange', Object.assign({}, this.localUser))
    },
    loadUser(id) {
      axios
        .get('http://localhost:3004/users/' + id)
        .then(response => {
          this.localUser = response.data
          this.$router.push('/edit/' + id)
        })
        .catch(error => {
          console.error(error)
        })
    },
    prevUser() {
      if (this.$route.params.id != '1') {
        let prevId = +this.$route.params.id - 1
        this.loadUser(prevId)
      }
    },
    nextUser() {
      let nextId = +this.$route.params.id + 1
      this.loadUser(nextId)
    }
  },
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  }
}
</script>
