const inputs = document.querySelectorAll('input')

const patterns = {
    telephone: /^\d{11}$/
}

function validate(field, regex)
{
    if (regex.test(field.value)) {
        field.className = 'valid'
    } else {
        fieldName = 'invalid'
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})
