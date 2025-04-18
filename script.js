function renderCategoria(categoria, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    const items = precios[categoria];
  
    for (let nombre in items) {
      const precio = items[nombre];
  
      const li = document.createElement("li");
  
      const nombreSpan = document.createElement("span");
      nombreSpan.className = "item-name";
      nombreSpan.textContent = nombre;
  
      const precioSpan = document.createElement("span");
      precioSpan.className = "item-price";
      precioSpan.textContent = `$${precio.toFixed(3)}`;
  
      li.appendChild(nombreSpan);
      li.appendChild(precioSpan);
      contenedor.appendChild(li);
    }
  }
  
  renderCategoria("entradas", "menu-entradas");
  renderCategoria("principales", "menu-principales");
  renderCategoria("postres", "menu-postres");
  renderCategoria("bebidas", "menu-bebidas");