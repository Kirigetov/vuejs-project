<template>
  <div class="form-group">
    <input
      type="text"
      name="users-search"
      class="form-control"
      :value="search"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  model: {
    prop: 'search',
    event: 'input'
  },
  props: {
    search: {
      type: String
    },
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localUsers: []
    }
  },
  watch: {
    search: function() {
      if (this.search.length > 0) {
        this.localUsers = this.users.filter(user => {
          console.log(user.lastName)
          if (user.lastName && user.lastName.toLowerCase().match(this.search)) {
            return user
          }
        })
      } else {
        this.localUsers = []
      }

      this.$emit('searchUpdate', this.localUsers)
    }
  }
}
</script>
