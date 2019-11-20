<template>
  <div>
    <ul class="pagination">
      <router-link class="page-item" tag="li" to="/">
        <a class="page-link">Previous</a>
      </router-link>

      <router-link v-for="page in pages" class="page-item" tag="li" :to="'page/' + page" :key="page">
        <a class="page-link">{{ page }}</a>
      </router-link>

      <router-link class="page-item" tag="li" to="/">
        <a class="page-link">Next</a>
      </router-link>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Number,
      required: true
    }
  }
}
</script>