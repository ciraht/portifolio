document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato'); 
    const sucessoMensagem = document.getElementById('sucesso-mensagem');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            sucessoMensagem.style.display = 'block';

            form.reset();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle'); 

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', function() {
        // Alterna entre os modos
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled'); 
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled'); 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Sou Tharic, um estudante de Desenvolvimento de Sistemas no SENAI. Aqui você encontra um pouco do meu trabalho e minhas habilidades.";
    let index = 0;
    
    function typeText() {
        if (index < textToType.length) {
            typedTextElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 35); 
        }
    }

    typeText();
});
