const servicos = {
    "Papelaria personalizada": "Criamos itens únicos e personalizados para deixar seu evento ainda mais especial!",
    "Caderno Devocional": "Cadernos lindos para organizar sua vida espiritual com muito amor e propósito.",
    "Papelaria criativa": "Designs diferentes, criativos e apaixonantes para quem ama papelaria!",
    "Etiquetas & Adesivos": "Ideal para personalizar lembrancinhas, potes, embalagens e muito mais.",
    "Topo de bolo": "Toppers simples e em 3D para deixar seus bolos incríveis!",
    "Sublimação": "Canecas, camisetas, almofadas e muito mais com a sua cara!",
    "Agenda": "Organização com estilo! Agendas personalizadas e funcionais.",
    "DTF": "Impressão em alta definição para aplicação em tecidos diversos.",
    "Planner": "Planejamento do seu jeitinho, com layout criativo e funcional.",
    "Mimos": "Presentes criativos e delicados feitos com amor.",
    "Bobbie Goods": "Produtos exclusivos e criativos para o dia a dia.",
    "Lembrancinhas": "Personalizadas com carinho para todas as ocasiões.",
    "Caderno": "Cadernos com capas únicas e lindas para estudo ou presente.",
    "Presentes": "Ideias criativas para surpreender quem você ama.",
    "Caneca": "Canecas personalizadas para todos os gostos!",
    "Garrafa": "Garrafas estilosas e personalizadas para o dia a dia.",
    "Tags": "Detalhes que fazem diferença em qualquer presente!",
    "Ecobag": "Sustentável, linda e personalizada.",
    "Kits": "Conjuntos perfeitos para presentear com charme."
};

const lista = document.querySelectorAll("#lista-servicos li");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

lista.forEach(item => {
    item.addEventListener("click", () => {
        const nome = item.dataset.servico;
        modalTitle.textContent = nome;
        modalDescription.textContent = servicos[nome] || "Descrição em breve!";
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
