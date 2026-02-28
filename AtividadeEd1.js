
const poderDasCartas = [8, 15, 4, 22, 10, 3, 18];

const criaturasInvocadas = [
  "Goblin", 
  "Esqueleto", 
  "Lobo Mágico", 
  "Esqueleto", 
  "Dragão Bebê", 
  "Esqueleto"
];

function Avaliarcarta(poder) {
    if(poder >= 10) {
        return "Carta Forte";
    }else {
        return "Carta Fraca";
    }
}

for(const poder of poderDasCartas) {
    const resultado = Avaliarcarta(poder);
    console.log(`Poder da Carta: ${poder} - ${resultado}`);
}
total = 0;
function contarcriaturas() {
    for(const criatura of criaturasInvocadas) {
        if(criatura === "Esqueleto") {
            total++;
        }
    }
return total;
console.log(contarcriaturas(criaturasInvocadas, "Esqueleto"));
}