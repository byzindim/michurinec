//form


// const validateBtn = document.querySelector('.footer__questions__form__btn')
// const question = document.querySelector('.footer__questions__form__ask')

// const numberPhone  = document.querySelector('.footer__questions__form__phone')
// const fields = document.querySelectorAll('.field')


// let removeErorr = function(){
//     let errors = form.querySelectorAll('.error')
//     for(let i = 0; i<errors.length;i++){
//         errors[i].remove()
//     }
// }

// let checkFieldsPresence = function(){
//     for(let i =0 ; i<fields.length; i++){
//         if(!fields[i].value){
//            let error = document.createElement('p')
//            error.classList='error'
//            error.style.color='red'
//            error.style.fontSize='8px'
//            error.style.textAlign='center'
//            error.style.padding ='0px 10px 0px 10px'
//            error.innerHTML='Заполните поле'
//            form[i].parentElement.insertBefore(error, fields[i])
//         }
//     }
// }
// const inputValidation = (e) => {
 
//     // get value form event
//      const value = e.target.value

//     // validate value
//     const validatedValue = value.replace(/[^0-9]/g, '');

//     return validatedValue;


// }
const form = document.querySelector('.footer__questions__form')
const question = document.querySelector('.footer__questions__form__ask')
const numberPhone  = document.querySelector('.footer__questions__form__phone')
const btn = document.querySelector(".footer__questions__form__btn")


form.addEventListener('submit' , async function(e){
    e.preventDefault()
  const message = document.querySelector(".footer__questions__form__ask").value
  const phone_number = document.querySelector(".footer__questions__form__phone").value
  const email = document.querySelector(".footer__questions__form__email").value
 
  if(message !== "" && email !== ""){
     btn.setAttribute("disabled", false)
     btn.removeAttribute('disabled')
     let response = await fetch('sendmail.php', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({message: message, phone_number: phone_number, email:email})
    });
    let result = await response.json();
    console.log(result.data)
    if(result.data.status === "ACTIVE"){
  
      btn.classList.add('_sucsecc-btn')
      btn.textContent='Отправлено'
      
      setTimeout(()=>{apdate()},10000)
    }
  }
  function apdate (){
    form.reset()
    btn.classList.remove('_sucsecc-btn')
    btn.textContent="Спросить"
  }   

})

