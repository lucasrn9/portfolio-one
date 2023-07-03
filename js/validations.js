export const validateLength = (text, min, max, errorMin, errorMax, errorElement) => {
    if (text.length < min) {
        errorElement.textContent = errorMin
        return false
    }
    if (text.length > max) {
        errorElement.textContent = errorMax
        return false
    }
    return true
}

export const validateNome = (inputNome) => {
    const nome = inputNome.value
    const errorSpan = inputNome.parentElement.parentElement.querySelector(".contato__formError")
    errorSpan.textContent = ""
    if (!validateLength(nome, 2, 50, "Nome muito curto!", "Nome muito longo!", errorSpan)) {
        return false
    }
    const onlyAlphabeticalCharacters = /^[a-zA-ZÀ-ÿ]+(?:\s[a-zA-ZÀ-ÿ]+)*$/
    if (!onlyAlphabeticalCharacters.test(nome)) {
        errorSpan.textContent = "Nome inválido!"
        return false
    }
    return true
}

export const validateEmail = (inputEmail) => {
    const email = inputEmail.value
    const errorSpan = inputEmail.parentElement.parentElement.querySelector(".contato__formError")
    errorSpan.textContent = ""
    if (!validateLength(email, 2, 50, "Email muito curto!", "Email muito longo!", errorSpan)) {
        return false
    }
    const validEmailRFC2822 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if (!validEmailRFC2822.test(email)) {
        errorSpan.textContent = "Email inválido!"
        return false
    }
    return true
}

export const validateAssunto = (inputAssunto) => {
    const assunto = inputAssunto.value
    const errorSpan = inputAssunto.parentElement.parentElement.querySelector(".contato__formError")
    errorSpan.textContent = ""
    if (!validateLength(assunto, 2, 50, "Assunto muito curto!", "Assunto muito longo!", errorSpan)) {
        return false
    }
    return true
}

export const validateMensagem = (inputMensagem) => {
    const mensagem = inputMensagem.value
    const errorSpan = inputMensagem.parentElement.parentElement.querySelector(".contato__formError")
    errorSpan.textContent = ""
    if (!validateLength(mensagem, 2, 300, "Mensagem muito curta!", "Mensagem muito longa!", errorSpan)) {
        return false
    }
    return true
}