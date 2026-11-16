
// Lista de matérias
let materias = [];

// Elementos do HTML
const formulario = document.getElementById("formMateria");
const campoMateria = document.getElementById("nomeMateria");
const listaMaterias = document.getElementById("listaMaterias");

// Função para cadastrar matéria
function cadastrarMateria(nome) {

    if (nome.trim() === "") {
        alert("Digite o nome da matéria!");
        return;
    }

    materias.push(nome);

    atualizarLista();

    campoMateria.value = "";
}

// Mostrar as matérias na tela
function atualizarLista() {

    listaMaterias.innerHTML = "";

    materias.forEach(function(materia) {

        const item = document.createElement("li");

        item.textContent = materia;

        listaMaterias.appendChild(item);

    });

}

// Evento do formulário
formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    cadastrarMateria(campoMateria.value);

});
