function renderizarPaginaInterna(pagina) {
    fetch(pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error("Sem Resposta da Rede");
            }
            return response.text()
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error("Erro na operação:", error)
            document.getElementById('content').innerHTML = '<p>Erro ao carregar a página.</p>'
        });
}

// function renderizarPaginaExterna (url) {
//     fetch (url) 
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Sem Resposta da Rede");
//             }
//             return response.text()
//         })
//         .then(html => {
//             document.getElementById('content').innerHTML = html;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             document.getElementById('content').innerHTML = '<p style="color: white;">Erro ao Carregar Página Externa </p>';
//         });
// }

page ('/', () => renderizarPaginaInterna("index.html"))
page ('/portifolio', () => renderizarPaginaInterna("portifolio.html"))
page ('/aboutme', () => renderizarPaginaInterna(''))

page()