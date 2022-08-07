
const refs = {
    form: document.queryselector(".feedback-form"),
    textarea: document.querySelector(".feedback-form  textarea")
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", onTextareaInput);

function onFormSubmit(event) {

}

function onTextareaInput(event) {
    const value = event.currentTarget.Value;
    сonsole.log(value);
}