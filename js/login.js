function validarConta() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos.'); 
        return false   
    }
    else if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return false
    }


    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    window.location.href = "../index.html";
    
    alert('Login realizado com sucesso')
    



}


