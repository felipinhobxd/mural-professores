// Espera o documento HTML ser totalmente carregado
document.addEventListener("DOMContentLoaded", function() {

    // ===============================================
    // CÓDIGO ANTIGO - PARA ABRIR O MODAL DA FOTO
    // ===============================================
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.querySelector(".close-button");

    // Seleciona TODAS as imagens com a classe 'professor-photo'
    const professorPhotos = document.querySelectorAll(".card .professor-photo");

    // Adiciona um evento de clique para CADA foto
    professorPhotos.forEach(photo => {
        photo.addEventListener("click", function() {
            // 'this' se refere à imagem que foi clicada
            const imageUrl = this.src; 
            
            // Mostra o modal (troca de 'none' para 'flex')
            modal.style.display = "flex"; 
            
            // Coloca a imagem clicada dentro do modal
            modalImage.src = imageUrl;
        });
    });

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Adiciona evento de clique no botão de fechar (X)
    closeButton.addEventListener("click", closeModal);

    // Adiciona evento de clique no fundo escuro (fora da imagem)
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // ===============================================
    // === NOVO CÓDIGO - PARA EXPANDIR O TEXTO ===
    // ===============================================

    // Seleciona todas as caixas de citação (os textos)
    const quoteBoxes = document.querySelectorAll(".professor-info blockquote");

    // Adiciona um evento de clique para CADA citação
    quoteBoxes.forEach(quote => {
        quote.addEventListener("click", function() {
            // 'this' se refere ao <blockquote> que foi clicado
            // Adiciona ou remove a classe 'expanded'
            this.classList.toggle("expanded");
        });
    });

});