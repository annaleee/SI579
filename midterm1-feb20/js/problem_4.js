const messageInput = document.querySelector('#message-input');
const messageStatus = document.querySelector('#message-feedback')

const MAX_CHARS = 50;

// Write your code here
var is_valid = true;
messageInput.addEventListener('input',()=>{
    if(messageInput.value.length > MAX_CHARS){
        var difference = messageInput.value.length - MAX_CHARS;
        messageStatus.textContent = `${difference} character${pluralize(difference)} too long`;
        if(is_valid){
            messageInput.classList.replace('is-valid','is-invalid');
            messageStatus.classList.replace('valid-feedback',"invalid-feedback");
            is_valid = false;
        }
        
    }else if(messageInput.value.length <= MAX_CHARS){
        var difference = MAX_CHARS - messageInput.value.length;
        messageStatus.textContent = `${difference} character${pluralize(difference)} left`;
        if(!is_valid){
            messageInput.classList.replace('is-invalid','is-valid');
            messageStatus.classList.replace('invalid-feedback',"valid-feedback");
            is_valid = true;
        }
    }
})