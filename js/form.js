import { validateNome, validateEmail, validateAssunto, validateMensagem } from "./validations.js"

const showLabelOnInputFocus = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener("focus", (e) => {
            const associatedLabel = e.target.labels[0]
            input.style.paddingTop = "0.25rem"
            associatedLabel.style.display = "block"
            associatedLabel.style.paddingTop = "0.55rem"
            associatedLabel.style.color = "var(--azul-100)"

        })
    })
}

const hideLabelOnEmptyInputs = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener("blur", (e) => {
            const associatedLabel = e.target.labels[0]
            if (input.value) {
                associatedLabel.style.color = "var(--preto-50)"
                return
            }
            associatedLabel.style.display = "none"
            input.style.paddingTop = "0.44rem"
        })
    })
}

// handle all input's labels visibility,colors and alignment according to the input content
const handleInputsLabels = () => {
    const inputs = document.querySelectorAll(".contato__formInput")
    showLabelOnInputFocus(inputs)
    hideLabelOnEmptyInputs(inputs)
}

const handleInputsValidations = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener("blur", (e) => {
            e.target.value = e.target.value.trim()
            const inputName = e.target.name
            const validators = {
                nome: validateNome,
                email: validateEmail,
                assunto: validateAssunto,
                mensagem: validateMensagem
            }
            validators[inputName](input)
        })

        input.addEventListener("invalid", e => {
            e.preventDefault()
            const invalidInput = e.target
            const errorSpan = invalidInput.parentElement.parentElement.querySelector(".contato__formError")
            errorSpan.textContent = ""
            errorSpan.textContent = "Campo inválido!"
        })
    })
}

const handleFormSubmit = (form) => {
    form.addEventListener("submit", e => {
        e.preventDefault()
        const inputs = document.querySelectorAll(".contato__formInput")
        const validators = {
            nome: validateNome,
            email: validateEmail,
            assunto: validateAssunto,
            mensagem: validateMensagem
        }
        const validInputs = Array.from(inputs).map(input => {
            const inputName = input.name
            return validators[inputName](input)
        })

        if (validInputs.includes(false)) {
            window.alert("Formulário invalido! Algum campo não foi preenchido corretamente, verifique os campos e tente novamente.")
            return
        }
        window.alert("Formulario enviado!")
    })
}

const form = document.querySelector("#contato__form")
const inputs = document.querySelectorAll(".contato__formInput")
handleInputsLabels()
handleInputsValidations(inputs)
handleFormSubmit(form)