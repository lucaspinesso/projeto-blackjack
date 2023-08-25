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

//Blackjack versão 2.0//
if(confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?")){
   //Compras das primeiras cartas//
   let usuario = [comprarCarta(), comprarCarta()]
   let computador = [comprarCarta(), comprarCarta()]

   let k = 0
   let pontuacaoUsuario = 0
   let pontuacaoComputador = 0
   
   function calculandoPontosUsuário(){
      pontuacaoUsuario = 0
   
      for(k = 0; k < usuario.length; k++){
         pontuacaoUsuario = pontuacaoUsuario + usuario[k].valor
      }
   }

   function calculandoPontosComputador(){
      pontuacaoComputador = 0
   
      for(k = 0; k < computador.length; k++){
         pontuacaoComputador = pontuacaoComputador + computador[k].valor
      }
   }

   //Verificar se são dois 'A'
   let i = 0

   while(i < 1){
   
     if(((usuario[0].valor === 11) && (usuario[1].valor === 11)) || ((computador[0].valor === 11) && (computador[1].valor === 11))){
      usuario.shift()
      computador.shift()

      usuario.push()
      computador.push()
      
      usuario = [comprarCarta(), comprarCarta()]
      computador = [comprarCarta(), comprarCarta()]
     }else{
      i = 2
     }
   }
 
   //O Jogo//
   let cartasUsuario = ""
   let cartasComputador = ""

   function maoDoUsuario(){
      cartasUsuario = usuario[0].texto

      for(k = 1; k < usuario.length; k++){
         cartasUsuario = cartasUsuario + " " + usuario[k].texto
      }
   }

   function maoDoComputador(){
      cartasComputador = computador[0].texto

      for(k = 1; k < computador.length; k++){
         cartasComputador = cartasComputador + " " + computador[k].texto
      }
   }

   let j = 0
   i = 0

   while(i < 1){
      maoDoUsuario()

      if(confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${computador[0].texto}\nDeseja comprar mais uma carta?`)){
         usuario.push(comprarCarta())
         calculandoPontosUsuário()

         if(pontuacaoUsuario > 21){
            j = 0

            while(j < 1){
               calculandoPontosUsuário()
               calculandoPontosComputador()
            
               if((pontuacaoComputador + 11) < 22){
                  computador.push(comprarCarta())
               }else{
                  i = 2
                  j = 2
               }
            }
         }
      }else{
         j = 0

         while(j < 1){
            calculandoPontosUsuário()
            calculandoPontosComputador()
            
            if(pontuacaoComputador < pontuacaoUsuario){
               computador.push(comprarCarta())
            }else{
               i = 2
               j = 2
            }
         }
      }
   }

   //Calculando o Resultado//
   maoDoUsuario()
   maoDoComputador()
   calculandoPontosUsuário()
   calculandoPontosComputador()
   const resultadoUsuario = Math.abs(21 - pontuacaoUsuario)
   const resultadoComputador = Math.abs(21 - pontuacaoComputador)

   //Revelando o Vencedor//
   if(pontuacaoUsuario > 21 && pontuacaoComputador < 22){
      alert(`Usuário - cartas: ${cartasUsuario} - ${pontuacaoUsuario}\nComputador - cartas: ${cartasComputador} - ${pontuacaoComputador}\nO computador ganhou!`)

   }else if(pontuacaoUsuario < 22 && pontuacaoComputador > 21){
      alert(`Usuário - cartas: ${cartasUsuario} - ${pontuacaoUsuario}\nComputador - cartas: ${cartasComputador} - ${pontuacaoComputador}\nO usuário ganhou!`)
   
   }else{

      if(resultadoUsuario < resultadoComputador){
         alert(`Usuário - cartas: ${cartasUsuario} - ${pontuacaoUsuario}\nComputador - cartas: ${cartasComputador} - ${pontuacaoComputador}\nO usuário ganhou!`)

      }else if(resultadoUsuario > resultadoComputador){
         alert(`Usuário - cartas: ${cartasUsuario} - ${pontuacaoUsuario}\nComputador - cartas: ${cartasComputador} - ${pontuacaoComputador}\nO computador ganhou!`)

      }else{
         alert(`Usuário - cartas: ${cartasUsuario} - ${pontuacaoUsuario}\nComputador - cartas: ${cartasComputador} - ${pontuacaoComputador}\nEmpate!`)
      }
   }
}else{
   alert("O jogo acabou")
}