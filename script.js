

// Catálogo de produtos e serviços futurísticos
const items = [
  // Produtos Tech
  { id: 1, nome: "Neural Phone X1", descricao: "Smartphone com IA integrada e interface neural", categoria: "CyberTech", tipo: "produto", preco: 2999, estoque: 5, imagem: "📱" },
  { id: 2, nome: "HoloBook Pro", descricao: "Laptop holográfico com processamento quântico", categoria: "CyberTech", tipo: "produto", preco: 8500, estoque: 3, imagem: "💻" },
  { id: 3, nome: "Tênis Anti-Gravidade", descricao: "Tênis com tecnologia de levitação magnética", categoria: "ModaCyber", tipo: "produto", preco: 1250, estoque: 10, imagem: "👟" },
  { id: 4, nome: "Ampliador Cerebral Digital", descricao: "Implante para aumento da capacidade cerebral", categoria: "BioTech", tipo: "produto", preco: 5000, estoque: 2, imagem: "🧠" },
  { id: 5, nome: "Cafeteira Quântica", descricao: "Máquina de café que altera o sabor no nível molecular", categoria: "CasaInteligente", tipo: "produto", preco: 3800, estoque: 6, imagem: "☕" },
  { id: 6, nome: "Bike Voadora", descricao: "Bicicleta voadora com propulsão iônica", categoria: "Transporte", tipo: "produto", preco: 15000, estoque: 1, imagem: "🚲" },
  { id: 7, nome: "Nano Perfume", descricao: "Fragrância que se adapta ao seu DNA", categoria: "BelezaBio", tipo: "produto", preco: 899, estoque: 12, imagem: "🧴" },
  { id: 8, nome: "Fones de Conexão Mental", descricao: "Fones que reproduzem música diretamente no cérebro", categoria: "CyberTech", tipo: "produto", preco: 2200, estoque: 7, imagem: "🎧" },
  { id: 9, nome: "Traje de VR Gaming", descricao: "Traje completo para imersão total em jogos", categoria: "Gaming", tipo: "produto", preco: 4500, estoque: 4, imagem: "🎮" },
  { id: 10, nome: "Relógio Holográfico", descricao: "Relógio que projeta hologramas interativos", categoria: "CyberTech", tipo: "produto", preco: 1800, estoque: 8, imagem: "⌚" },
  
  // Serviços Futurísticos
  { id: 11, nome: "Manicure Cyber", descricao: "Unhas com nanotecnologia e LED integrado", categoria: "BelezaBio", tipo: "servico", preco: 300, imagem: "💅" },
  { id: 12, nome: "Meditação VR", descricao: "Meditação em realidade virtual com neuroplasticidade", categoria: "MenteTech", tipo: "servico", preco: 250, imagem: "🧘" },
  { id: 13, nome: "Cuidado de Pets Robô", descricao: "Cuidado de pets por robôs com IA avançada", categoria: "ServiçosRobô", tipo: "servico", preco: 180, imagem: "🤖" },
  { id: 14, nome: "Festa Holográfica", descricao: "Festa com decoração holográfica interativa", categoria: "Eventos", tipo: "servico", preco: 2500, imagem: "🎉" },
  { id: 15, nome: "Captura de Foto 3D", descricao: "Fotos em 3D com captura de memórias neurais", categoria: "Memória", tipo: "servico", preco: 800, imagem: "📸" },
  { id: 16, nome: "Bio-Massagem", descricao: "Massagem com nanotecnologia de recuperação celular", categoria: "SaúdeBio", tipo: "servico", preco: 450, imagem: "💆" },
  { id: 17, nome: "Design Capilar Neural", descricao: "Corte de cabelo programado por IA neural", categoria: "BelezaBio", tipo: "servico", preco: 350, imagem: "✂️" },
  { id: 18, nome: "Entrega por Drone", descricao: "Comida preparada por robôs e entregue por drone", categoria: "FoodTech", tipo: "servico", preco: 120, imagem: "🚁" },
  { id: 19, nome: "Scan de Segurança Cyber", descricao: "Varredura de segurança em implantes cybernéticos", categoria: "CyberSec", tipo: "servico", preco: 500, imagem: "🛡️" },
  { id: 20, nome: "Upload de Memória", descricao: "Upload de memórias para backup digital", categoria: "Memória", tipo: "servico", preco: 1200, imagem: "🧠" }
];

// Carrinho de compras
let cart = [];

const container = document.getElementById("itemsContainer");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Preencher filtros dinamicamente
const categoriasUnicas = [...new Set(items.map(s => s.categoria))];
categoriasUnicas.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categoryFilter.appendChild(option);
});

// Função para adicionar ao carrinho
function addToCart(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;
  
  if (item.tipo === "produto" && item.estoque <= 0) {
    alert("⚠️ ITEM TEMPORARIAMENTE FORA DE ESTOQUE NESTA DIMENSÃO!");
    return;
  }
  
  const cartItem = cart.find(c => c.id === itemId);
  if (cartItem) {
    if (item.tipo === "produto") {
      if (cartItem.quantidade >= item.estoque) {
        alert("🚫 LIMITE QUÂNTICO MÁXIMO ATINGIDO!");
        return;
      }
      cartItem.quantidade++;
    } else {
      alert("⚡ SERVIÇO JÁ ADICIONADO NO SEU CARRINHO CYBER!");
      return;
    }
  } else {
    cart.push({
      ...item,
      quantidade: 1
    });
  }
  
  updateCartDisplay();
  showCartMessage();
}

// Função para remover do carrinho
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartDisplay();
}

// Função para alterar quantidade
function changeQuantity(itemId, change) {
  const cartItem = cart.find(c => c.id === itemId);
  if (!cartItem) return;
  
  cartItem.quantidade += change;
  
  if (cartItem.quantidade <= 0) {
    removeFromCart(itemId);
  } else {
    const originalItem = items.find(i => i.id === itemId);
    if (originalItem.tipo === "produto" && cartItem.quantidade > originalItem.estoque) {
      cartItem.quantidade = originalItem.estoque;
    }
  }
  
  updateCartDisplay();
}

// Atualizar display do carrinho
function updateCartDisplay() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantidade, 0);
  
  cartItems.innerHTML = "";
  let total = 0;
  
  cart.forEach(item => {
    total += item.preco * item.quantidade;
    
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-emoji">${item.imagem}</span>
        <div>
          <div class="cart-item-name">${item.nome}</div>
          <div class="cart-item-price">R$${item.preco.toFixed(2)}</div>
        </div>
      </div>
      <div class="cart-item-controls">
        ${item.tipo === "produto" ? `
          <button onclick="changeQuantity(${item.id}, -1)" class="qty-btn">-</button>
          <span class="quantity">${item.quantidade}</span>
          <button onclick="changeQuantity(${item.id}, 1)" class="qty-btn">+</button>
        ` : `<span class="service-badge">Serviço</span>`}
        <button onclick="removeFromCart(${item.id})" class="remove-btn">🗑️</button>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });
  
  cartTotal.textContent = `TOTAL CRÉDITOS: R$${total.toFixed(2)}`;
}

// Toggle carrinho
function toggleCart() {
  cartSidebar.classList.toggle("open");
}

// Finalizar compra
function checkout() {
  if (cart.length === 0) {
    alert("🤖 SEU CARRINHO CYBER ESTÁ VAZIO! ADQUIRA ALGUNS ITENS PRIMEIRO!");
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  const itemsList = cart.map(item => `${item.nome} (${item.quantidade}x)`).join(", ");
  
  alert(`🚀 TRANSAÇÃO COMPLETA!\n\n🛒 ITENS ADQUIRIDOS: ${itemsList}\n💰 TOTAL CRÉDITOS: R$${total.toFixed(2)}\n\n✨ Obrigada por escolher o CyberMarket 2077!\n🔮 Seus itens serão entregues por teletransporte quântico em 0.3 segundos!`);
  
  // Atualizar estoque para produtos
  cart.forEach(cartItem => {
    if (cartItem.tipo === "produto") {
      const item = items.find(i => i.id === cartItem.id);
      if (item) {
        item.estoque -= cartItem.quantidade;
      }
    }
  });
  
  // Limpar carrinho
  cart = [];
  updateCartDisplay();
  toggleCart();
  renderItems();
}

// Mostrar mensagem de adição ao carrinho
function showCartMessage() {
  const message = document.createElement("div");
  message.className = "cart-message";
  message.textContent = "⚡ ITEM ADQUIRIDO!";
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.remove();
  }, 2000);
}

// Função para renderizar itens
function renderItems() {
  const filtroCat = categoryFilter.value.toLowerCase();
  const filtroTipo = typeFilter.value.toLowerCase();
  const busca = searchInput.value.toLowerCase();

  container.innerHTML = "";

  const filtrados = items.filter(item => {
    const matchesCat = filtroCat === "" || item.categoria.toLowerCase() === filtroCat;
    const matchesTipo = filtroTipo === "" || item.tipo.toLowerCase() === filtroTipo;
    const matchesBusca = item.nome.toLowerCase().includes(busca);
    return matchesCat && matchesTipo && matchesBusca;
  });

  filtrados.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    
    const isOutOfStock = item.tipo === "produto" && item.estoque <= 0;
    
    card.innerHTML = `
      <div class="item-emoji">${item.imagem}</div>
      <h2>${item.nome}</h2>
      <p class="item-description">${item.descricao}</p>
      <p class="item-category">🌐 ${item.categoria}</p>
      ${item.tipo === "produto" ? `<p class="item-stock">🔋 UNIDADES DISPONÍVEIS: ${item.estoque}</p>` : ""}
      <p class="item-price">R$${item.preco.toFixed(2)}</p>
      <p class="item-type">${item.tipo === "produto" ? "🚀 ITEM TECH" : "⚡ SERVIÇO CYBER"}</p>
      <button 
        onclick="addToCart(${item.id})" 
        class="add-to-cart-btn ${isOutOfStock ? 'out-of-stock' : ''}"
        ${isOutOfStock ? 'disabled' : ''}
      >
        ${isOutOfStock ? "🚫 DIMENSÃO BLOQUEADA" : "⚡ ADQUIRIR AGORA"}
      </button>
    `;
    container.appendChild(card);
  });

  if (filtrados.length === 0) {
    container.innerHTML = "<p class='no-items'>🔍 NENHUM ITEM ENCONTRADO NESTE REINO DIGITAL...</p>";
  }
}

// Event listeners
categoryFilter.addEventListener("change", renderItems);
typeFilter.addEventListener("change", renderItems);
searchInput.addEventListener("input", renderItems);

// Fechar carrinho clicando fora
document.addEventListener("click", (e) => {
  if (!cartSidebar.contains(e.target) && !e.target.closest(".cart-icon")) {
    cartSidebar.classList.remove("open");
  }
});

// Renderização inicial
renderItems();

