const MEDIA_MINIMA = 7;

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;
let notaRecuperacao = null;
let situacao;

if (media >= MEDIA_MINIMA) {
    situacao = "APROVADO";
} else if (media >= 5) {
    notaRecuperacao = Number(prompt("Digite a nota da recuperação:"));

    if (notaRecuperacao < 5) {
        situacao = "REPROVADO";
    } else {
        situacao = "APROVADO";
    }
} else {
    situacao = "REPROVADO";
}

console.log("===== SITUAÇÃO ACADÊMICA =====");
console.log("Nome do aluno:", nome);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Média:", media);

if (notaRecuperacao !== null) {
    console.log("Nota de Recuperação:", notaRecuperacao);
}

console.log("Situação do Aluno:", situacao);
