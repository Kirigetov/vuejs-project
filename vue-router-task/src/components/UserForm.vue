<template>
  <div>
    <h2>Edit User's Profile</h2>
    <form>
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
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <pre>{{localUser}}</pre>
  </div>
</template>

<script>
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
