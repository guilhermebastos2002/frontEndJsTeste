const titulo = document.getElementById("titulo-modal");
const modal = document.getElementById("modal");
const cards = document.querySelectorAll(".quadrado");
const botoes = document.getElementById("botoes-modal");

const opcoes = {
    hamburguer: [
        {
            nome: "Clássico",
            img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
        },
        {
            nome: "Cheddar",
            img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
        },
        {
            nome: "Bacon",
            img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
        }
    ],

    milkshake: [
        {
            nome: "Chocolate",
            img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
        },
        {
            nome: "Morango",
            img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
        },
        {
            nome: "Baunilha",
            img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
        }
    ]
};

cards.forEach(card => {
    card.addEventListener("click", () => {
        const item = card.dataset.item;

        modal.classList.add("ativo");

        titulo.innerText = 
            item === "hamburguer"
                ? "Escolha o sabor do Hambúrguer"
                : "Escolha o sabor do Milkshake";

        botoes.innerHTML = "";

        opcoes[item].forEach(opcao => {
            const btn = document.createElement("button");

            btn.innerHTML = `
                <img src="${opcao.img}">
                <p>${opcao.nome}</p>
                `;

                botoes.appendChild(btn);
        });
    });
});