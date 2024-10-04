

function saldo(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado
}

function rank(vitoria) {
    if (vitoria <= 10 ){
        return 'Ferro'
    } else if (vitoria > 10, vitoria <= 20){
        return 'Bronze'
    } else if (vitoria > 20, vitoria <= 50){
        return 'Prata'
    } else if (vitoria > 50, vitoria <= 80){
        return 'Ouro'
    } else if (vitoria > 80, vitoria <= 90){
        return 'Diamante'
    } else if (vitoria > 90, vitoria <= 100){
        return 'Lendário'
    } else {
        return 'Imortal'
    }
} 

const a = saldo(1543, 1500)

console.log(`O Herói tem de saldo ${a}, e está no nível ${rank(a)}`)
