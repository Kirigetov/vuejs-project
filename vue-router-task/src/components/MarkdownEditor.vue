<template>
  <div>
    <textarea
      id="exampleTextarea"
      class="form-control"
      placeholder="About"
      :value="value"
      @input="$emit('input', $event.target.value)"
      ref="markdown"
    >
    </textarea>
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.min.css'
import 'medium-editor/dist/css/themes/bootstrap.min.css'

export default {
  name: 'markdown',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.initMarkdown();
    this.editor.subscribe('editableInput', (event, editable) => {
        this.$emit('input', editable.innerHTML)
    })
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
    }
  },
  methods: {
    initMarkdown() {
      this.editor = new MediumEditor(this.$refs.markdown)
    }
  }
}
</script>
