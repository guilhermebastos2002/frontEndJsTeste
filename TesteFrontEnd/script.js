const titulo = document.getElementById("titulo-modal");
const modal = document.getElementById("modal");
const cards = document.querySelectorAll(".quadrado");
const botoes = document.getElementById("botoes-modal");

const opcoes = {
    hamburguer: [
        {nome: "Clássico", img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"},
        {nome: "Cheddar", img: "https://s2.glbimg.com/J37rcGJSqqOBHXy7PtN1JGOCgww=/620x455/e.glbimg.com/og/ed/f/original/2020/09/03/bacon_burger_-_01.jpg"},
        {nome: "Bacon", img: "https://ogimg.infoglobo.com.br/in/23479747-134-388/FT1086A/652/Burgers.ComeggFoto-Rodrigo-Azevedo.jpg"}
    ],

    milkshake: [
        {nome: "Chocolate", img: "https://tse1.mm.bing.net/th/id/OIP.QVc7GEuEIhDqFJjYIWDozwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"},
        {nome: "Morango", img: "https://thumbs.dreamstime.com/b/milkshake-de-morango-com-xarope-decorado-fruta-batida-ideal-para-restaurantes-e-bares-181116838.jpg"},
        {nome: "Baunilha", img: "https://nummyrecipes.com/wp-content/uploads/2025/10/Carvel-Milkshake-Recipe.jpg"}
    ],

    pizza: [
        {nome: "Calabresa", img: "https://tse4.mm.bing.net/th/id/OIP.sAG0u23PoLrDbAgZQKDFiAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"},
        {nome: "4 Queijos", img: "https://th.bing.com/th/id/R.ae1d2da323f28df46158a5c3a92b7c61?rik=BbLXNbOyHbGigA&pid=ImgRaw&r=0"},
        {nome: "Mussarela", img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-mussarela-1.jpg"}
    ],

    hotdog: [
        {nome: "Com Ketchup", img: "https://thumbs.dreamstime.com/b/hot-dog-ketchup-26546642.jpg"},
        {nome: "Com Mostarda", img: "https://thumbs.dreamstime.com/b/hotdog-com-mostarda-19604388.jpg"},
        {nome: "Ketchup e Mostarda", img: "https://thumbs.dreamstime.com/b/hotdog-com-mostarda-e-ketchup-com-alface-no-fundo-na-mesa-de-madeira-76197316.jpg"}
    ]
};

cards.forEach(card => {
    card.addEventListener("click", () => {
        const item = card.dataset.item;

        if (!item || !opcoes[item]) return;

        modal.classList.add("ativo");

        const nomeFormatado = item.charAt(0).toUpperCase() + item.slice(1);
        titulo.innerText = `Escolha o sabor do(a) ${nomeFormatado}`;

        botoes.innerHTML = "";

        opcoes[item].forEach(opcao => {
            const btn = document.createElement("button");
            btn.innerHTML = `
                <img src="${opcao.img}">
                <p>${opcao.nome}</p>
            `;

            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                alert(`Você escolheu: ${opcao.nome}`);
            });

            botoes.appendChild(btn);
        });
    });
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("ativo");
    }
});