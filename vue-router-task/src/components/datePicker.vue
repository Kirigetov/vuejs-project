<template>
  <div class="datepicker-group" ref="datepicker">
    <input type="text" :value="value" class="form-control datepicker-input" data-input />
    <button type="button" class="datepicker-button btn btn-primary" title="toggle" data-toggle>
      Choose date
    </button>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'datepicker',
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      fp: null
    }
  },
  mounted() {
    this.initDatepicker()
  },
  watch: {
    value: 'updateDatepicker'
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  methods: {
    initDatepicker() {
      this.fp = flatpickr(this.$refs.datepicker, {
        wrap: true,
        onChange: (_, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>

<style>
.datepicker-group {
  display: flex;
  align-items: center;
}

.datepicker-input {
  width: 200px;
  display: inline-block;
}

.datepicker-button {
  display: inline-block;
  margin-left: 10px;
}
</style>
