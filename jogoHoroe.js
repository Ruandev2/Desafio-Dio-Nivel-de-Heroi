//Nome do Heroi
let heroiJogo = "Ruan";
//Sistema de Pontuação
let pontoXp = 1.001;
//Estrutura de Decisao
switch(pontoXp){
    case 1.000:
        console.log(`${pontoXp} Heroi tem Nivel "Ferro"`);
        break;
    case 1.001 || 2.000:
        console.log(`${pontoXp} Heroi tem Nivel "Bronse"`);
        break;
    case 2.001 || 5.000:
        console.log(`${pontoXp} Heroi tem Nivel "Prata"`);
        break;
    case 6.001 || 7.000:
        console.log(`${pontoXp} Heroi tem Nivel "Ouro"`);
        break;
    case 7.001 || 8.000:
        console.log(`${pontoXp} Heroi tem Nivel "Platina"`);
        break;
    case 8.001 || 9.000:
        console.log(`${pontoXp} Heroi tem Nivel "Ascendente"`);
        break;
    case 9.001 || 10.000:
        console.log(`${pontoXp} Heroi tem Nivel "Imortal"`);
        break;
    case 10.001:
        console.log(`${pontoXp} Heroi tem Nivel "Radiante"`);
        break; 
    case 0:
        default:
            console.log("Pontuação negativa Não foi Dessa Vez!!!")     
    
}
//Menssagem de Final ao Usuario
console.log( `"O Herói de nome **${heroiJogo}** está no nível de **${pontoXp}**"`)