class Pessoa {
    constructor(nome, idade, emprego) {
        this.nome = nome, 
        this.idade = idade, 
        this.emprego = emprego; 
    }

    dizOi = () => {
        console.log(`Oi ${this.nome}, você tem ${this.idade} anos e sua pprofissão é: ${this.emprego}`)
    }

}

class Humano extends Pessoa {
    constructor(nome, idade, emprego, cidade) {
        super(nome, idade, emprego), 
        this.cidade = cidade
    }
}

const erik = new Pessoa('Erik', 21, "Estágiario")
erik.dizOi()
const erik2 = new Humano('Erik', 21, "Estágiario", "Canada")
erik2.dizOi()