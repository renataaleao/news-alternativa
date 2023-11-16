document.addEventListener('DOMContentLoaded', (event) => {
var el = document.querySelector('.menu-mobile-icon');
        el.addEventListener('click', () => {
            var menuItens = document.querySelector('.menu-itens');
            if (menuItens.classList.contains('show')) {
                menuItens.classList.add('hide');
                menuItens.classList.remove('show');
            } else {
                menuItens.classList.add('show');
                menuItens.classList.remove('hide');
            }

        });

        // Encontre o botão Newsletter pelo seu seletor de classe
        var btnNewsletter = document.querySelector('.btn-menu');

        // Encontre o modal pelo seu ID
        var modal = document.getElementById('modal');

        // Encontre o elemento de fechar modal pelo seu seletor de classe
        var closeBtn = document.querySelector('.close-modal');

        // Quando o botão Newsletter é clicado, mostre o modal
        btnNewsletter.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        // Quando o botão de fechar modal é clicado, oculte o modal
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // Quando o usuário clica fora do modal, oculte o modal
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });



// Função para formatar a data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

})

/**  Função para consumir a API do Google News Brasil
async function fetchNews() {
    try {
        const apiKey = '4abeb6c88de142c3a4d4f558a68f71ec'; 
        const apiUrl = `https://newsapi.org/v2/everything?q=PCD&language=pt&apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Verifica se a resposta foi bem-sucedida
        if (data.status === 'ok') {
            // Obtém os artigos da resposta da API
            const articles = data.articles;

            // Seleciona os cards de notícias usando as classes específicas
            const destaqueCard = document.querySelector('.noticia-destaque');
            const outraNoticia1 = document.querySelector('.outra-noticia-1-single .card');

            // Substitui as informações nos cards de notícias correspondentes
            // Notícia em destaque
            destaqueCard.querySelector('.card-header img').src = articles[0].urlToImage;
            destaqueCard.querySelector('.card-content h3').textContent = articles[0].title;
            destaqueCard.querySelector('.card-content h4.news-source').textContent = formatDate(articles[0].publishedAt);
            destaqueCard.querySelector('.card-content p').textContent = articles[0].description;
            
            // Outras notícias destaque
            outraNoticia1.querySelector('.card-header img').src = articles[1].urlToImage;
            outraNoticia1.querySelector('.card-content h3').textContent = articles[1].title;
            outraNoticia1.querySelector('.card-content h4.news-source').textContent = formatDate(articles[1].publishedAt);
            outraNoticia1.querySelector('.card-content p').textContent = articles[1].description;  

        } else {
            console.error('Erro ao recuperar as notícias');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

Chama a função para consumir a API e substituir as informações nos cards de notícias
fetchNews();
}*/
