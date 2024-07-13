function qtd(vitoria, derrota){
    let saldoRanked = vitoria - derrota;
    let elo = ""

    if(vitoria <10){
        elo  = "Ferro"
    }else if(vitoria >=11 && vitoria <=20){
        elo = "Bronze"
    }else if(vitoria >=21 && vitoria <=50){
        elo = "Prata"
    }else if(vitoria >=51 && vitoria <=80){
        elo = "Ouro"
    }else if(vitoria >=81 && vitoria <=90){
        elo = "Diamente"
    }else if(vitoria >=91 && vitoria <=100){
        elo = "Lendario"
    }else{
        elo = "Immortal"
    }

    return{saldoRanked, elo}
}

const resultado = qtd(120, 2);
console.log(`O Herói tem um saldo de ${resultado.saldoRanked} está no nível de ${resultado.elo}`);
