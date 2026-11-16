
// Lista que vai armazenar as matérias cadastradas
let materias = [];

// Função para cadastrar uma matéria
function cadastrarMateria(nome) {

    // Verifica se o nome foi preenchido
    if (nome.trim() === "") {
        alert("Digite o nome da matéria!");
        return;
    }

    // Adiciona a matéria à lista
    materias.push(nome);

    // Mostra as matérias no console
    console.log(materias);

    alert("Matéria cadastrada com sucesso!");
}

