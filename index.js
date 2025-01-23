const numeri = [];
const tombolone = document.getElementById("tombolone");
const cartelle = document.getElementById("cartelle");
const singleCartella = [];
for (let index = 1; index <= 76; index++) {
  tombolone.innerHTML += `<div id="tombolone-${index}" class='cell'>${index}</div>`;
}
for (let index = 1; index <= 24; index++) {
  let numero = Math.floor(Math.random() * 76) + 1;
  if (!singleCartella.includes(numero)) {
    singleCartella.push(numero);
    cartelle.innerHTML += `<div id="cartella-${numero}" class='cell'>${numero}</div>`;
  }
}

const colora = () => {
  let estratto;
  let trovato = false;
  for (let index = 1; index < 76; index++) {
    estratto = Math.floor(Math.random() * 76) + 1;
    if (!numeri.includes(estratto)) {
      trovato = true;
      break;
    }
  }
  if (trovato) {
    numeri.push(estratto);
    document.getElementById("casuale").innerHTML =
      "Numero estratto " + estratto;
    document.getElementById(`tombolone-${estratto}`).classList.add("colora");
    if (singleCartella.includes(estratto)) {
      document.getElementById(`cartella-${estratto}`).classList.add("colora");
    }
  } else {
    alert("Tutti i numeri sono stati estratti");
  }
};
