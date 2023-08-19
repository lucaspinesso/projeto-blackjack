/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// VERSÃO 01 BLACKJACK//

console.log("Boas vindas ao jogo de BlackJack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   //Compra das duas cartas//
   const usuario = [comprarCarta(), comprarCarta()]
   const computador = [comprarCarta(), comprarCarta()]

   //Verificar a Pontuação//
   const pontuacaoUsuario = Number(usuario[0].valor) + Number(usuario[1].valor)
   const pontuacaoComputador = Number(computador[0].valor) + Number(computador[1].valor)
   
   //Revelando as cartas e o valor//
   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - ${pontuacaoComputador}`)
   
   //Revelando o resultado//
   const resultadoUsuario = Number(21 - pontuacaoUsuario)
   const resultadoComputador = Number(21 - pontuacaoComputador)

   if(pontuacaoUsuario < 22 && pontuacaoComputador < 22){
            
      if(resultadoUsuario < resultadoComputador){
         console.log("O usuário ganhou!")
      }else if(resultadoUsuario > resultadoComputador){
         console.log("O computador ganhou!")
      }else{
         console.log("Empate!")
      }

   }else{
      if(resultadoUsuario > resultadoComputador){
         console.log("O usuário ganhou!")
      }else if(resultadoUsuario < resultadoComputador){
         console.log("O computador ganhou!")
      }else{
         console.log("Empate!")
      }
   }

}else{
   console.log("O jogo acabou")
}