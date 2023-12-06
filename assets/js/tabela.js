function createGame(time1, hora, time2) {
    return `
    <li>
        <<img src="assets/img/icon-${time1}.png" alt="bandeira do ${time1}"/>
        <strong>${hora}</strong>
        <<img src="assets/img/icon-${time2}.png" alt="bandeira do ${time2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(data, dia, jogos) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${data} <span>${dia}</span></h2>
        <ul>
            ${jogos}
        </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
createCard("06/12", "Quarta-Feira", createGame("santos", "21:30", "bahia"))