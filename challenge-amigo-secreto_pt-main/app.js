document.addEventListener("DOMContentLoaded", function () {

    let amigos = [];

    const inputNome = document.getElementById("amigo");
    const btnAdicionar = document.querySelector(".button-add");
    const listaNomes = document.getElementById("listaAmigos");
    const btnSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");

    function adicionarAmigo() {
        const nome = inputNome.value.trim(); 
        
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        amigos.push(nome);

        atualizarLista();

        inputNome.value = "";
        inputNome.focus();
    }

    function atualizarLista() {
        listaNomes.innerHTML = "";

        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];

        resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>!</li>`;
    }

    btnAdicionar.addEventListener("click", adicionarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
});
