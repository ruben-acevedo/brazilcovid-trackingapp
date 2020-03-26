const estado = document.querySelector("#estado");
const casos = document.querySelector("#casos");
const mortes = document.querySelector("#mortes");
const suspeitas = document.querySelector("#suspeitas");
const ultimaatt = document.querySelector("#ultimaatt");
const form = document.querySelector("form");
const dropDown = document.querySelector("#estados");
const info = document.querySelector(".info");
const porcentagem = document.querySelector("#porcentagem");

dropDown.addEventListener("click", e => {
  e.preventDefault();
  fetch(`/location?location=${dropDown.value}`)
    .then(res => res.json())
    .then(json => {
      estado.textContent = json.state;
      casos.textContent = `Casos confirmados: ${json.cases}`;
      mortes.textContent = `Mortes: ${json.deaths}`;
      suspeitas.textContent = `Casos suspeitos: ${json.suspects}`;
      ultimaatt.textContent = `Última atualização: ${new Date(
        json.datetime
      ).toLocaleString()} `;
      info.style.display = "block";
    });
});
