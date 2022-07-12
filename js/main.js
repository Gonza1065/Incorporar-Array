class Prendas {
  constructor (item, nombre, precio) {
    this.item = item;
    this.nombre = nombre;
    this.precio = precio;
  }
}
let prendas = [
    prendaRemera = new Prendas (1, 'Remera', 5000),
    prendaPantalon = new Prendas (2, 'Pantalon', 4000),
    prendaCampera = new Prendas (3, 'Campera', 20000),
    prendaZapatilla = new Prendas (4, 'Zapatilla', 30000)
];
function precioFinal(prenda1, prenda2, prenda3, prenda4) {
  let ingresarPrenda = prompt(
  "Ingresar el nombre de su prenda (Remera, pantalon, campera, zapatillas) para saber el valor de la misma"
);
  if (ingresarPrenda == 'Remera') {
    console.log("El valor de la remera es de $5000");
  }
  else if (ingresarPrenda == 'Pantalon') {
    console.log("El valor del pantalon es de $4000");
  }
  else if (ingresarPrenda == 'Campera') {
    console.log("El valor de la campera es de $20000");
  }
  else {
    console.log("El valor de las zapatillas es de $30000")
  }
}
precioFinal();





// function precioFinal() {
//   let myArray = [
//     { prenda1: "Remera", precio: 5000 },
//     { prenda2: "Pantalon", precio: 4000 },
//     { prenda3: "Campera", precio: 20000 },
//     { prenda4: "Zapatillas", precio: 30000 },
//   ];
//   let opcion = prompt("Ingresar prenda");
//   switch (opcion) {
//     case prenda1:
//       console.log("Su remera vale $5000");
//       break;
//     case prenda2:
//       console.log("Su pantalon vale $4000");
//       break;
//   }
// }

// precioFinal();

// function precioFinal() {
//     let prendas = [
      
//     ]
//     let ingresarPrenda = parseInt(prompt("Ingresar la prenda"));
//   if (ingresarPrenda == null) {
//     alert("No has introducido una prenda");
//   } else {
//     switch (ingresarPrenda) {
//       case 0:
//         console.log("El valor de su remera es de $4000");
//         break;
//       case 1:
//         console.log("El valor de su pantalon es de $5000");
//         break;
//       case 2:
//         console.log("El valor de su campera es de $20000");
//         break;
//       default:
//         alert("Nada");
//         break;
//     }
//   }
// }
// precioFinal();
// mostrarMensaje1();


