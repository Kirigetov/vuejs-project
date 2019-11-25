<template>
  <div>
    <ul class="pagination">
      <li class="page-item active" @click="backTo">
        <a class="page-link">Previous</a>
      </li>

      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
        @click="$emit('move', page)"
      >
        <a class="page-link">{{ page }}</a>
      </li>

      <li class="page-item active" @click="forwardTo">
        <a class="page-link">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  model: {
    event: 'move',
    prop: 'currentPage'
  },
  data() {
    return {
      localCurrentPage: null
    }
  },
  props: {
    pages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  created() {
    this.localCurrentPage = this.currentPage
  },
  methods: {
    backTo() {
      if (this.currentPage !== 1) {
        this.$emit('move', --this.localCurrentPage)
      }
    },
    forwardTo() {
      if (this.currentPage < this.pages) {
        this.$emit('move', ++this.localCurrentPage)
      }
    }
  }
}
</script>
