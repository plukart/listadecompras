let frutas = [];
let lacteos = [];
let verduras = [];
let carnes = [];
let bebidas = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

setTimeout(function() {
    
alert("¡Bienvenido al supermercado!");
let agregarMas = "sí";  
while(agregarMas != "no"){
    agregarMas = prompt("¿Que deseas añadir algo al carrito? Responde 'sí' o 'no'.");
    while (agregarMas != "si" && agregarMas != "no") {  
	alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas añadir algo al carrito? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  
        break;
    }
	
    comida = prompt("¿Qué necesitas para este mes?");
    categoria = prompt("¿En qué categoria encaja esta comida: 'frutas', 'lacteos', 'dulces' 'carnes', 'bebidas', 'verduras' o 'congelados' ?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'lacteos'){
        lacteos.push(comida);
    } else if (categoria === 'dulces'){
        dulces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else if (categoria === 'verduras'){
        verduras.push(comida);
    } else if (categoria === 'carnes'){
        carnes.push(comida);
    } else if (categoria === 'bebidas'){
        bebidas.push(comida);
    } else {
    
        alert("Esa categoria no está predefinida.")
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Verduras: ${verduras}\n  Carnes: ${carnes}\n  Bebidas: ${bebidas}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
}, 5000);