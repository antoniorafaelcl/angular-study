import {DaoInterface} from './DaoInterface'
import tb_concessionaria from './Concessionaria'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('logica updade')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('logica delete')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('logica select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [any] {
        console.log('logica getAll')
        return [new Concessionaria('', [])]
    }
}