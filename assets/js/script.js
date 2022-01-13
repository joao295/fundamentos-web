let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let voto = document.querySelector('#voto')
let nomeOk = false
let emailOk = false

function validaNome() {
   let txtNome = document.querySelector('#txtNome')
   if (nome.value.length < 3) {
      txtNome.innerHTML = "Nome Invalido"
      txtNome.style.color = 'red'
   } else {

      txtNome.innerHTML = "Nome Valido"
      txtNome.style.color = 'green'
      nomeOk = true
   }
}
function validarEmail() {
   let txtEmail = document.querySelector('#txtEmail')
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'

   } else {
      txtEmail.innerHTML = "E-mail Valido"
      txtEmail.style.color = 'green'
      emailOk = true

   }
}




function validaVoto() {
   let txtAssunto = document.querySelector('#txtVoto')

   if (assunto.value.length >= 100) {
      txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
   } else {
      txtAssunto.style.display = 'none'
      assuntoOk = true
   }
}

function enviar() {
   if (nomeOk == true && emailOk == true) {
      alert('Formulário enviado com sucesso!')
   } else {
      alert('Preencha o formulário corretamente antes de enviar...')
   }
}