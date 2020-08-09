// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener("click", cloneField)
// Executar uma ação
function cloneField() {
  // Pega o campo para duplicação
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // Pega os campos
  const fields = newFieldContainer.querySelectorAll('input')
  // para cada campo, limpar
  fields.forEach((field) => {
    // pega o field do momento e limpa ele
    field.value = ""
  })

  // Duplica o campo na página
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
