let eyeContainer = document.querySelector('.eye-container');
let input = document.getElementById('password');

eyeContainer.addEventListener('click', function(){

    if(input.type == 'password'){
        input.type = 'text';
        eyeContainer.classList.add('active');
    }else{
        input.type = 'password';
        eyeContainer.classList.remove('active');
    }
})

