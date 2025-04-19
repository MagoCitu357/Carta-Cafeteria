const numText = 3
// Entrada
document.getElementById("precio-panAjo").textContent = `$${precios.Pan_con_ajo.toFixed(numText)}`;
document.getElementById("precio-sopa").textContent = `$${precios.Sopa_del_día.toFixed(numText)}`;
document.getElementById("precio-ensalada").textContent = `$${precios.Ensalada_mixta.toFixed(numText)}`;
// Principales:
document.getElementById("precio-hamburguesa").textContent = `$${precios.hamburguesa.toFixed(numText)}`;
document.getElementById("precio-pizza").textContent = `$${precios.pizza.toFixed(numText)}`;
document.getElementById("precio-pollo").textContent = `$${precios.Pollo_plancha.toFixed(numText)}`;
document.getElementById("precio-tacos").textContent = `$${precios.tacos.toFixed(numText)}`;
document.getElementById("precio-pasta").textContent = `$${precios.Pasta_carbonara.toFixed(numText)}`;
// Postres:
document.getElementById("precio-helado").textContent = `$${precios.Helado.toFixed(numText)}`;
document.getElementById("precio-tartaQueso").textContent = `$${precios.Tarta_de_queso.toFixed(numText)}`;
document.getElementById("precio-flan").textContent = `$${precios.Flan_casero.toFixed(numText)}`;
// Bebidas:
document.getElementById("precio-agua").textContent = `$${precios.Agua.toFixed(numText)}`;
document.getElementById("precio-zumo").textContent = `$${precios.Zumo_natural.toFixed(numText)}`;
document.getElementById("precio-refresco").textContent = `$${precios.Refresco.toFixed(numText)}`;
document.getElementById("precio-cafe").textContent = `$${precios.Café.toFixed(numText)}`;