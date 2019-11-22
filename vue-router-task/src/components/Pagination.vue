<template>
  <div>
    <ul class="pagination">
      <li class="page-item active" @click="backTo">
        <a class="page-link">Previous</a>
      </li>

      <li 
        v-for="page in pages" 
        class="page-item" 
        :class="{ active: currentPage === page }"
        :key="page"
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
  methods: {
    backTo(){
      if(this.currentPage !== 1) {
        this.$emit('move', --this.currentPage)
      }
    },
    forwardTo(){
      if(this.currentPage < this.pages) {
        this.$emit('move', ++this.currentPage)
      }
    }
  }
}
</script>