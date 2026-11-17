const materias = [];

const formulario = document.getElementById("formMateria");
const campoMateria = document.getElementById("nomeMateria");
const listaMaterias = document.getElementById("listaMaterias");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = campoMateria.value.trim();

    if (nome === "") {
        alert("Digite o nome da matéria!");
        return;
    }

    materias.push(nome);

    const item = document.createElement("li");
    item.textContent = nome;

    listaMaterias.appendChild(item);

    campoMateria.value = "";
});
