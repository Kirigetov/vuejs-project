export default function(form) {
  // Setup our serialized data
  let serialized = {}

  console.log(form)

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i++) {
    let field = form.elements[i]

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === 'file' ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue

    // If a multi-select, get all selections
    if (field.type === 'select-multiple') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue
        serialized[field.name] = field.options[n].value
      }
    }

    // Convert field data to a query string
    else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
        serialized[field.name] = field.value
    }
  }

  return serialized
}
