// Carrossel de imagens
const carouselImages = document.querySelector(".carousel-images");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

nextBtn.addEventListener("click", () => {
  index = (index + 1) % carouselImages.children.length;
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener("click", () => {
  index =
    (index - 1 + carouselImages.children.length) %
    carouselImages.children.length;
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
});

// Array com os presentes e caminhos das imagens
const presentesLista = [
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406269.995802BR5901N6001C62070503***630479AA",
    qrcode: "./Presentes/qrcode/airfryer.png",
    valor: 269.99,
    nome: "Air Fryer",
    imagem: "./Presentes/air fryer.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406549.995802BR5901N6001C62070503***6304C69B",
    qrcode: "./Presentes/qrcode/aparelho_jantar.png",
    valor: 549.99,
    nome: "Aparelho de Jantar",
    imagem: "./Presentes/aparelho de jantar pratos.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406772.995802BR5901N6001C62070503***6304E57B",
    qrcode: "./Presentes/qrcode/armario_coz.png",
    valor: 772.99,
    nome: "Armário de Cozinha",
    imagem: "./Presentes/armario cozinha.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406193.995802BR5901N6001C62070503***63043619",
    qrcode: "./Presentes/qrcode/armario_escr.png",
    valor: 193.99,
    nome: "Armário de Escritório",
    imagem: "./Presentes/armario de escritorio.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406170.995802BR5901N6001C62070503***630432E9",
    qrcode: "./Presentes/qrcode/aspiradorpo.png",
    valor: 170.99,
    nome: "Aspirador de Pó",
    imagem: "./Presentes/aspirador de pó.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406446.415802BR5901N6001C62070503***63044049",
    qrcode: "./Presentes/qrcode/aspirador_robo.png",
    valor: 446.41,
    nome: "Aspirador Robô",
    imagem: "./Presentes/aspirador robo wap.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406117.995802BR5901N6001C62070503***6304E0C5",
    qrcode: "./Presentes/qrcode/batedeira.png",
    valor: 117.99,
    nome: "Batedeira",
    imagem: "./Presentes/batedeira.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406531.995802BR5901N6001C62070503***63041197",
    qrcode: "./Presentes/qrcode/bebedouro.png",
    valor: 531.99,
    nome: "Bebedouro",
    imagem: "./Presentes/bebedouro.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654071234.995802BR5901N6001C62070503***63044B14",
    qrcode: "./Presentes/qrcode/cama_box.png",
    valor: 1234.99,
    nome: "Cama Box",
    imagem: "./Presentes/cama box.jpg",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540569.665802BR5901N6001C62070503***6304A9E1",
    qrcode: "./Presentes/qrcode/cesto_roupa_suja.png",
    valor: 69.66,
    nome: "Cesto de Roupa",
    imagem: "./Presentes/cesto roupa suja.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406299.005802BR5901N6001C62070503***6304EDC8",
    qrcode: "./Presentes/qrcode/chuveiro.png",
    valor: 299.0,
    nome: "Chuveiro",
    imagem: "./Presentes/chuveiro.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406129.995802BR5901N6001C62070503***6304D052",
    qrcode: "./Presentes/qrcode/cobertor_casal.png",
    valor: 129.99,
    nome: "Cobertor Casal",
    imagem: "./Presentes/cobertor casal.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540573.385802BR5901N6001C62070503***6304F028",
    qrcode: "./Presentes/qrcode/conj_copo.png",
    valor: 73.38,
    nome: "Conjunto de Copos",
    imagem: "./Presentes/conjunto copo.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406338.995802BR5901N6001C62070503***63046691",
    qrcode: "./Presentes/qrcode/depurador.png",
    valor: 338.99,
    nome: "Depurador e Exaustor",
    imagem: "./Presentes/depurador e exaustur.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540559.995802BR5901N6001C62070503***630419B0",
    qrcode: "./Presentes/qrcode/espelho.png",
    valor: 59.99,
    nome: "Espelho Decorativo",
    imagem: "./Presentes/espelho decorativo.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406101.995802BR5901N6001C62070503***63048B1B",
    qrcode: "./Presentes/qrcode/espremedor.png",
    valor: 101.99,
    nome: "Espremedor de Frutas",
    imagem: "./Presentes/espremedor de frutas.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406248.995802BR5901N6001C62070503***63044C1D",
    qrcode: "./Presentes/qrcode/ferro_vapor.png",
    valor: 278.99,
    nome: "Ferro a Vapor",
    imagem: "./Presentes/ferro a vapor.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406104.415802BR5901N6001C62070503***63043E23",
    qrcode: "./Presentes/qrcode/ferro_passar.png",
    valor: 104.41,
    nome: "Ferro de Passar",
    imagem: "./Presentes/ferro de passar.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654071234.995802BR5901N6001C62070503***63044B14",
    qrcode: "./Presentes/qrcode/fogao.png",
    valor: 1234.99,
    nome: "Fogão",
    imagem: "./Presentes/fogao.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654071551.995802BR5901N6001C62070503***6304BAE1",
    qrcode: "./Presentes/qrcode/guarda_roupa.png",
    valor: 1551.99,
    nome: "Guarda Roupa",
    imagem: "./Presentes/guarda roupa.avif",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654072255.995802BR5901N6001C62070503***6304E62B",
    qrcode: "./Presentes/qrcode/geladeira.png",
    valor: 2255.99,
    nome: "Geladeira",
    imagem: "./Presentes/geladeira.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540551.065802BR5901N6001C62070503***6304C742",
    qrcode: "./Presentes/qrcode/jogo_americano.png",
    valor: 51.06,
    nome: "Jogo Americano",
    imagem: "./Presentes/jogo americano.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540573.465802BR5901N6001C62070503***63044C98",
    qrcode: "./Presentes/qrcode/canecas.png",
    valor: 73.46,
    nome: "Jogo de Canecas",
    imagem: "./Presentes/jogo de caneca.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540573.065802BR5901N6001C62070503***63045BAA",
    qrcode: "./Presentes/qrcode/jogo_frig.png",
    valor: 73.06,
    nome: "Jogo de Frigideiras",
    imagem: "./Presentes/jogo de frigideira.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540594.995802BR5901N6001C62070503***63040496",
    qrcode: "./Presentes/qrcode/liquidificador.png",
    valor: 94.99,
    nome: "Liquidificador",
    imagem: "./Presentes/liquidificador.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654071836.995802BR5901N6001C62070503***6304AF76",
    qrcode: "./Presentes/qrcode/maquina_lavar.png",
    valor: 1836.99,
    nome: "Máquina de Lavar",
    imagem: "./Presentes/maquina de lavar.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406892.995802BR5901N6001C62070503***630477D8",
    qrcode: "./Presentes/qrcode/mesa_jantar.png",
    valor: 892.99,
    nome: "Mesa de Jantar",
    imagem: "./Presentes/mesa de jantar.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654071259.995802BR5901N6001C62070503***63045E99",
    qrcode: "./Presentes/qrcode/sofa.png",
    valor: 1259.99,
    nome: "Sofá",
    imagem: "./Presentes/sofa.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406170.995802BR5901N6001C62070503***630432E9",
    qrcode: "./Presentes/qrcode/ventilador.png",
    valor: 170.99,
    nome: "Ventilador",
    imagem: "./Presentes/ventilador.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406560.995802BR5901N6001C62070503***6304FAE7",
    qrcode: "./Presentes/qrcode/panelas.png",
    valor: 560.99,
    nome: "Jogo de Panelas",
    imagem: "./Presentes/jogo de panelas.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406114.775802BR5901N6001C62070503***63045692",
    qrcode: "./Presentes/qrcode/tabua_passar.png",
    valor: 144.77,
    nome: "Mesa Passadeira",
    imagem: "./Presentes/tabua passar.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406102.005802BR5901N6001C62070503***630432C8",
    qrcode: "./Presentes/qrcode/kit_potes.png",
    valor: 102.0,
    nome: "Kit 15 Potes",
    imagem: "./Presentes/pote com tampas.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406204.165802BR5901N6001C62070503***630436C2",
    qrcode: "./Presentes/qrcode/mesa_centro.png",
    valor: 204.16,
    nome: "Mesa De Centro",
    imagem: "./Presentes/mesa de centro.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540560.675802BR5901N6001C62070503***63049E59",
    qrcode: "./Presentes/qrcode/kit02_travesseiros.png",
    valor: 60.67,
    nome: "Kit 02 Travesseiros",
    imagem: "./Presentes/kit travesseiro.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540575.915802BR5901N6001C62070503***6304247E",
    qrcode: "./Presentes/qrcode/medidor_inox.png",
    valor: 75.91,
    nome: "Medidor Inox 8 Peças",
    imagem: "./Presentes/medidores inox.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540563.195802BR5901N6001C62070503***63048BB6",
    qrcode: "./Presentes/qrcode/vent_teto.png",
    valor: 63.19,
    nome: "Ventilador Luminária De Teto",
    imagem: "./Presentes/ventilador com luminaria de teto.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406165.725802BR5901N6001C62070503***6304C31F",
    qrcode: "./Presentes/qrcode/jogo_toalha.png",
    valor: 165.72,
    nome: "Jogo de Toalhas Gigante",
    imagem: "./Presentes/jogo de toalhas.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540578.905802BR5901N6001C62070503***63049F33",
    qrcode: "./Presentes/qrcode/toalha_mesa_q.png",
    valor: 78.9,
    nome: "Toalha De Mesa Quadrada",
    imagem: "./Presentes/toalha de mesa quadrada.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406247.675802BR5901N6001C62070503***6304F2A8",
    qrcode: "./Presentes/qrcode/kit_edredon.png",
    valor: 246.67,
    nome: "Kit Edredom Casal Queen",
    imagem: "./Presentes/kit ederdon queen.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406302.995802BR5901N6001C62070503***6304DAF3",
    qrcode: "./Presentes/qrcode/edredon-2.png",
    valor: 302.99,
    nome: "Kit Edredom",
    imagem: "./Presentes/kit edredon.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406134.965802BR5901N6001C62070503***63046F99",
    qrcode: "./Presentes/qrcode/jogo_lencol.png",
    valor: 134.96,
    nome: "Jogo De Lençol Casal",
    imagem: "./Presentes/jogo de lencol.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406143.865802BR5901N6001C62070503***63041928",
    qrcode: "./Presentes/qrcode/kit_acessorios_banho.png",
    valor: 143.86,
    nome: "Kit Acessórios Para Banheiro",
    imagem: "./Presentes/kit banho acessorios.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540537.195802BR5901N6001C62070503***63048B06",
    qrcode: "./Presentes/qrcode/tapete_passadeira.png",
    valor: 37.19,
    nome: "Tapete passadeira",
    imagem: "./Presentes/tapete passadeira.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540525.585802BR5901N6001C62070503***63042259",
    qrcode: "./Presentes/qrcode/toalha_quadrada_mesa.png",
    valor: 25.58,
    nome: "Toalha De Mesa Quadrada",
    imagem: "./Presentes/toalha mesa quadrada jantar.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406370.505802BR5901N6001C62070503***6304403C",
    qrcode: "./Presentes/qrcode/poltrona_dec.png",
    valor: 370.5,
    nome: "Poltronas Decorativas",
    imagem: "./Presentes/kit poltrona decorativa.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406106.605802BR5901N6001C62070503***6304A296",
    qrcode: "./Presentes/qrcode/toalha_banho_jogo.png",
    valor: 106.6,
    nome: "Jogo de Toalhas de Banho",
    imagem: "./Presentes/jogo toalha de banho.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540574.315802BR5901N6001C62070503***630466B6",
    qrcode: "./Presentes/qrcode/kit_almofada.png",
    valor: 74.31,
    nome: "Almofadas Decorativas",
    imagem: "./Presentes/kit almofada.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406169.995802BR5901N6001C62070503***63047556",
    qrcode: "./Presentes/qrcode/mesas_cabeceira.png",
    valor: 169.99,
    nome: "Mesas de Cabeceira",
    imagem: "./Presentes/kit cabeceira.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406112.995802BR5901N6001C62070503***63040B05",
    qrcode: "./Presentes/qrcode/temperos.png",
    valor: 112.99,
    nome: "Organizador De Tempero",
    imagem: "./Presentes/organizador de tempero.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406158.995802BR5901N6001C62070503***630469A0",
    qrcode: "./Presentes/qrcode/kit_copo.png",
    valor: 158.99,
    nome: "Kit Copos 360 ML",
    imagem: "./Presentes/kit copo.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano520400005303986540571.995802BR5901N6001C62070503***630442F9",
    qrcode: "./Presentes/qrcode/jogo_talher.png",
    valor: 71.99,
    nome: "Jogo de Talheres",
    imagem: "./Presentes/jogo de talheres.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406899.995802BR5901N6001C62070503***6304D74C",
    qrcode: "./Presentes/qrcode/tvled.png",
    valor: 899.99,
    nome: "TV LED 32",
    imagem: "./Presentes/tv led.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406139.995802BR5901N6001C62070503***6304F913",
    qrcode: "./Presentes/qrcode/jogo_potes.png",
    valor: 139.99,
    nome: "Jogo de Potes de Vidro",
    imagem: "./Presentes/jogo potes vidro.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano52040000530398654072260.995802BR5901N6001C62070503***63047628",
    qrcode: "./Presentes/qrcode/tv50.png",
    valor: 2260.99,
    nome: "TV LED 50",
    imagem: "./Presentes/tv 50.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406223.995802BR5901N6001C62070503***63041B0F",
    qrcode: "./Presentes/qrcode/tapete_sala.png",
    valor: 223.99,
    nome: "Tapete Sala",
    imagem: "./Presentes/tapete sala.webp",
  },
  {
    copiacola:
      "00020126640014br.gov.bcb.pix0111562861818730227Casamento Rafaeli e Adriano5204000053039865406399.995802BR5901N6001C62070503***6304090F",
    qrcode: "./Presentes/qrcode/rack.png",
    valor: 399.99,
    nome: "Rack com Painel de TV",
    imagem: "./Presentes/rack com painel.webp",
  },
];

// Lista de presentes com paginação
const presentes = presentesLista.map((presente, i) => ({
  nome: presente.nome,
  imagem: presente.imagem,
  qrcode: presente.qrcode,
  copiacola: presente.copiacola,
  valor: presente.valor,
}));

const giftsPerPage = 8;
let currentPage = 1;
const totalPages = Math.ceil(presentes.length / giftsPerPage);

function renderGifts() {
  const start = (currentPage - 1) * giftsPerPage;
  const end = start + giftsPerPage;
  const list = document.getElementById("gift-list");
  list.innerHTML = "";
  presentes.slice(start, end).forEach((p) => {
    const div = document.createElement("div");
    div.className = "gift";
    const formattedValue = p.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    div.innerHTML = `<img src="${p.imagem}" alt="${p.nome}"><p>${p.nome} <br> <b>${formattedValue}</b></p>`;
    list.appendChild(div);
  });
  document.getElementById(
    "pageIndicator"
  ).textContent = `Página ${currentPage} de ${totalPages}`;
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;
}

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) currentPage--;
  renderGifts();
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < totalPages) currentPage++;
  renderGifts();
});

renderGifts();

// Confirmação de presença
function enviarFormulario(event) {
  event.preventDefault();
  const nome = event.target.nome.value;
  const mensagem = event.target.mensagem.value;

  const encryptedServiceID = "c2VydmljZV8xbDZ5b3dk";
  const encryptedTemplateID = "dGVtcGxhdGVfczIzMTFqYg==";

  const serviceID = atob(encryptedServiceID);
  const templateID = atob(encryptedTemplateID);
  const userID = "bRK01lmgN0f3gOtzq";

  const templateParams = {
    to_name: nome,
    message: mensagem,
  };

  document.getElementById("confirmationModal").style.display = "flex";

  // emailjs.send(serviceID, templateID, {
  //   title: "Confirmação de presença - " + templateParams.to_name,
  //   name: templateParams.to_name,
  //   message: templateParams.message,
  // }, userID).then(() => {
  //   document.getElementById("confirmationModal").style.display = "flex";
  // }).catch((error) => {
  //   console.error("Erro ao enviar o e-mail:", error);
  // });
}

function closeConfirmationModal() {
  document.getElementById("confirmationModal").style.display = "none";
  document.getElementById("confirmationForm").reset();
}

// Abrir modal do presente
function openGiftModal(presente) {
  document.getElementById("giftImage").src = presente.imagem;
  document.getElementById("giftQRCode").src = presente.qrcode;
  document.getElementById("giftName").textContent = presente.nome;
  document.getElementById("giftValue").textContent =
    presente.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  document.getElementById("giftModal").style.display = "flex";
  document.getElementById("giftPixKey").textContent = presente.copiacola;
}

function copyCodeToClipboard() {
  const codeToCopy = `${document.getElementById("giftPixKey").textContent}`;
  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      console.log("Código copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o código: ", err);
    });
}

// Fechar modal do presente
function closeGiftModal() {
  document.getElementById("giftModal").style.display = "none";
}

// Adicionar evento de clique nos presentes
document.getElementById("gift-list").addEventListener("click", (event) => {
  const giftElement = event.target.closest(".gift");
  if (giftElement) {
    const index = Array.from(document.querySelectorAll(".gift")).indexOf(
      giftElement
    );
    const presente = presentes[(currentPage - 1) * giftsPerPage + index];
    openGiftModal(presente);
  }
});

// Efeito suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
