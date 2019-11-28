<template>
  <div>
    <input type="text" id="inputdate" ref="inputdate" :value="date" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'datepicker',
  model: {
      prop: 'date'
  },
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.initDatepicker()
  },
  methods: {
    initDatepicker() {
      flatpickr('#inputdate', {
      })
    }
  }
}
</script>
