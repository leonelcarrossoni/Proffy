document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campo duplicar? 
    // Node é utilizado para se referir a tags HTML
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos para limpar
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    // Colocar na página. Em que lugar da página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

TESTE