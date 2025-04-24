// Carrossel de imagens
const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % carouselImages.children.length;
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + carouselImages.children.length) % carouselImages.children.length;
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
});

// Array com os presentes e caminhos das imagens
const presentesLista = [
    { valor: 150.50, nome: "Air Fryer", imagem: "./Presentes/air fryer.webp" },
    { valor: 150.50, nome: "Aparelho de Jantar", imagem: "./Presentes/aparelho de jantar pratos.webp" },
    { valor: 150.50, nome: "Armário de Cozinha", imagem: "./Presentes/armario cozinha.webp" },
    { valor: 150.50, nome: "Armário de Escritório", imagem: "./Presentes/armario de escritorio.webp" },
    { valor: 150.50, nome: "Aspirador de Pó", imagem: "./Presentes/aspirador de pó.webp" },
    { valor: 150.50, nome: "Aspirador Robô", imagem: "./Presentes/aspirador robo wap.webp" },
    { valor: 150.50, nome: "Batedeira", imagem: "./Presentes/batedeira.webp" },
    { valor: 150.50, nome: "Bebedouro", imagem: "./Presentes/bebedouro.webp" },
    { valor: 150.50, nome: "Cama Box", imagem: "./Presentes/cama box.jpg" },
    { valor: 150.50, nome: "Cesto de Roupa Suja", imagem: "./Presentes/cesto roupa suja.webp" },
    { valor: 150.50, nome: "Chuveiro", imagem: "./Presentes/chuveiro.webp" },
    { valor: 150.50, nome: "Cobertor Casal", imagem: "./Presentes/cobertor casal.webp" },
    { valor: 150.50, nome: "Conjunto de Copos", imagem: "./Presentes/conjunto copo.webp" },
    { valor: 150.50, nome: "Depurador e Exaustor", imagem: "./Presentes/depurador e exaustur.webp" },
    { valor: 150.50, nome: "Espelho Decorativo", imagem: "./Presentes/espelho decorativo.webp" },
    { valor: 150.50, nome: "Espremedor de Frutas", imagem: "./Presentes/espremedor de frutas.webp" },
    { valor: 150.50, nome: "Ferro a Vapor", imagem: "./Presentes/ferro a vapor.webp" },
    { valor: 150.50, nome: "Ferro de Passar", imagem: "./Presentes/ferro de passar.webp" },
    { valor: 150.50, nome: "Fogão", imagem: "./Presentes/fogao.webp" },
    { valor: 150.50, nome: "Guarda Roupa", imagem: "./Presentes/guarda roupa.avif" },
    { valor: 150.50, nome: "Geladeira", imagem: "./Presentes/geladeira.webp" },
    { valor: 150.50, nome: "Jogo Americano", imagem: "./Presentes/jogo americano.webp" },
    { valor: 150.50, nome: "Jogo de Canecas", imagem: "./Presentes/jogo de caneca.webp" },
    { valor: 150.50, nome: "Jogo de Frigideiras", imagem: "./Presentes/jogo de frigideira.webp" },
    { valor: 150.50, nome: "Liquidificador", imagem: "./Presentes/liquidificador.webp" },
    { valor: 150.50, nome: "Máquina de Lavar", imagem: "./Presentes/maquina de lavar.webp" },
    { valor: 150.50, nome: "Mesa de Jantar", imagem: "./Presentes/mesa de jantar.webp" },
    { valor: 150.50, nome: "Sofá", imagem: "./Presentes/sofa.webp" },
    { valor: 150.50, nome: "Ventilador", imagem: "./Presentes/ventilador.webp" },
    { valor: 150.50, nome: "Jogo de Panelas", imagem: "./Presentes/jogo de panelas.webp" }
];

// Lista de presentes com paginação
const presentes = presentesLista.map((presente, i) => ({
  nome: presente.nome,
  imagem: presente.imagem,
  valor: presente.valor,
}));

const giftsPerPage = 8;
let currentPage = 1;
const totalPages = Math.ceil(presentes.length / giftsPerPage);

function renderGifts() {
  const start = (currentPage - 1) * giftsPerPage;
  const end = start + giftsPerPage;
  const list = document.getElementById('gift-list');
  list.innerHTML = '';
  presentes.slice(start, end).forEach(p => {
    const div = document.createElement('div');
    div.className = 'gift';
    const formattedValue = p.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    div.innerHTML = `<img src="${p.imagem}" alt="${p.nome}"><p>${p.nome} <br> <b>${formattedValue}</b></p>`;
    list.appendChild(div);
  });
  document.getElementById('pageIndicator').textContent = `Página ${currentPage} de ${totalPages}`;
  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage === totalPages;
}

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) currentPage--;
  renderGifts();
});

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage < totalPages) currentPage++;
  renderGifts();
});

renderGifts();

// Confirmação de presença
function enviarFormulario(event) {
  event.preventDefault();
  const nome = event.target.nome.value;
  alert(`Obrigado, ${nome}! Sua presença foi confirmada.`);
  event.target.reset();
}

// Abrir modal do presente
function openGiftModal(presente) {
    document.getElementById('giftImage').src = presente.imagem;
    document.getElementById('giftName').textContent = presente.nome;
    document.getElementById('giftModal').style.display = 'flex';
}

// Fechar modal do presente
function closeGiftModal() {
    document.getElementById('giftModal').style.display = 'none';
}

// Adicionar evento de clique nos presentes
document.getElementById('gift-list').addEventListener('click', (event) => {
    const giftElement = event.target.closest('.gift');
    if (giftElement) {
        const index = Array.from(document.querySelectorAll('.gift')).indexOf(giftElement);
        const presente = presentes[(currentPage - 1) * giftsPerPage + index];
        openGiftModal(presente);
    }
});

// Efeito suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (target) {
    target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    });
  }
  });
});