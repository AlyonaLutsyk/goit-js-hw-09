const formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

function updateFormData(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();
    formData[fieldName] = fieldValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email;
        formData.message = parsedData.message;
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
}

form.addEventListener('input', updateFormData);
document.addEventListener('DOMContentLoaded', loadFormData);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);

        localStorage.removeItem("feedback-form-state");
        formData.email = '';
        formData.message = '';
        emailInput.value = '';
        messageTextarea.value = '';
    }
});