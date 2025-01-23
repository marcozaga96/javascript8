const numeri = [];
const tombolone = document.getElementById("tombolone");
for (let index = 1; index <= 76; index++) {
  tombolone.innerHTML += `<div id="${index}" class='cell'>${index}</div>`;
}

const colora = () => {
  let estratto;
  let trovato = false;
  for (let index = 0; index < 76; index++) {
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
    document.getElementById(estratto).classList.add("colora");
    console.log(numeri);
  } else alert("tutti i numeri sono stati estratti");
};
