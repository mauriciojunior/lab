(function( win, doc ) {
  'use strict'
  
  var $form = doc.querySelector('[data-js="form"]')
  var $inputName = doc.querySelector('[data-js="name"]')
  var $inputEmail = doc.querySelector('[data-js="email"]')
  var $button = doc.querySelector('[data-js="button"]')

  $button.addEventListener('click', sendMessage, false)

  function sendMessage(event) {
    localStorage.setItem('name', $inputName.value)
    localStorage.setItem('email', $inputEmail.value)
    
    console.log(localStorage)

    console.log('Name', localStorage.getItem('name'))
    console.log('Email', localStorage.getItem('email'))
    clearInputs();
  }
  function clearInputs() {
    $inputName.value = ''
    $inputEmail.value = ''
  }
})(window, document)
