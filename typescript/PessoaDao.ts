import {DaoInterface} from './DaoInterface'
import tb_concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('logica updade')
        return true
    }

    remover(id: number): Pessoa {
        console.log('logica delete')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('logica select')
        return new Pessoa('', '')
    }
    selecionarTodos(): [Pessoa] {
        console.log('logica getAll')
        return [new Pessoa('', '')]
    }
}