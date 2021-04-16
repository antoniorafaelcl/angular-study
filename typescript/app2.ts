   
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'


  /*---  criar os carros  ---*/ 
  let carroA = new Carro('Dodge Journey', 4)
  let carroB = new Carro('Etios', 4)
  let carroC = new Carro('Cerato', 4)  

  /*--- montar a lista de carros da concessionaria ---*/
  let listaDeCarros: Carro[] = [carroA, carroB, carroC]

  let concessionaria = new Concessionaria('Av.Paulista', listaDeCarros)


  /*--- exibir a lista de carros ---*/
  //console.log(concessionaria.mostrarListaDeCarros())

  /*--- comprar o carro ---*/

  let cliente = new Pessoa('Joao', 'Etios')
 // console.log(cliente.dizerCarroPreferido())

  concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
       if (carro['modelo'] == cliente.dizerCarroPreferido()) {

            // comprar o carro
            cliente.comprarCarro(carro)

       }
  })

  console.log(cliente.dizerCarroQueTem())



  