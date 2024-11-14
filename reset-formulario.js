document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const formElement = document.querySelector("#fale-conosco-bf30587e28ddeed0e9c3 form");

        if (formElement) {
            formElement.addEventListener("submit", function() {
                setTimeout(function() {
                    formElement.reset();
                }, 500); // Aguarda meio segundo para o envio
            });
        }
    }, 1000); // Aguarda um segundo para o carregamento completo do formulário
});
