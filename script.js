
let materias = JSON.parse(localStorage.getItem("materias")) || [];

const formulario = document.getElementById("formMateria");
const campoMateria = document.getElementById("nomeMateria");
const listaMaterias = document.getElementById("listaMaterias");

// Mostrar matérias salvas na tela
function atualizarLista() {
    listaMaterias.innerHTML = "";

    materias.forEach(function(nome) {
        const item = document.createElement("li");
        item.textContent = nome;
        listaMaterias.appendChild(item);
    });
}

// Cadastrar nova matéria
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = campoMateria.value.trim();

    if (nome === "") {
        alert("Digite o nome da matéria!");
        return;
    }

    materias.push(nome);

    localStorage.setItem("materias", JSON.stringify(materias));

    atualizarLista();

    campoMateria.value = "";
});

// Carregar matérias ao abrir a página
atualizarLista();
