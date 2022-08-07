
import throttle from 'lodash.throttle';

const refs = {
   form: document.querySelector('.feedback-form'),
   email: document.querySelector('.feedback-form input'),
   message: document.querySelector(".feedback-form  textarea"),
};
   refs.form.addEventListener("input", throttle(onTextareaInput, 500));
   refs.form.addEventListener("submit", onFormSubmit);
  
   const STORAGE_KEY = "feedback-form-state";                           /* cтрока ключа для хранилища*/
   const textareaInput = {};

function onTextareaInput(event) {
    textareaInput[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textareaInput));
 };
                                                                     
    function onFormSubmit(event) {
    event.preventDefault();                                             /* предотвращаем перезагрузке страниці*/
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();                                      /* Удаляем текст после отправки формы*/
    localStorage.removeItem(STORAGE_KEY);                               /* Удаляем текс в локал сторидже*/  
 };
   populateTextarea();                                                    /* будет вызываться при загрузке страницы*/

function populateTextarea() {
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); /* получаем значерние из локалсторидж*/
  if (savedMessage) {
    refs.email.value = savedMessage.email;
    refs.message.value = savedMessage.message;
  }
};
