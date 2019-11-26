<template>
  <table class="table">
    <thead>
      <slot name="table-head">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Balance</th>
          <th scope="col">Status</th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Company</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Registered</th>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <slot name="table-body" :user='user'>
          <td>
            <router-link :to="'/edit/' + user.id">#{{ user.id }}</router-link>
          </td>
          <td>{{ user.balance }}</td>
          <td>{{ user.accessLevel }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.registered }}</td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersListTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
