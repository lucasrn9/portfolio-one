const inputs = document.querySelectorAll(".contato__formInput")

inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
        const associatedLabel = e.target.labels[0]
        input.style.paddingTop = "0.25rem"
        associatedLabel.style.display = "block"
        associatedLabel.style.paddingTop = "0.55rem"
        associatedLabel.style.color = "var(--azul-100)"

    })
})

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