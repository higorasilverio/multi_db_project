const assert = require('assert')
const Postgres = require('../db/strategies/postgres')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: "Gavião Negro",
    poder: "Flexas"
}
const MOCK_HEROI_ATUALIZAR = {
    nome: "Batman",
    poder: "Dinheiro"
}

describe('Postgres Strategy', function() {
    
    this.timeout(Infinity)

    this.beforeAll(async function() {
        await context.connect()
        await context.delete()
        await context.create(MOCK_HEROI_ATUALIZAR)
    })

    it('PostgresSQl Connection', async function() {
        const result = await context.isConnected()
        assert.strictEqual(result, true)
    })

    it('Register', async function() {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.id
        assert.deepStrictEqual(result, MOCK_HEROI_CADASTRAR)
    })

    it('List', async function() {
        const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
        // same use as above -> const postionZero = result[0]
        delete result.id
        assert.deepStrictEqual(result, MOCK_HEROI_CADASTRAR)
    })

    it('Update', async function() {
        const [itemToUpdate] = await context.read({ nome: MOCK_HEROI_ATUALIZAR.nome })
        const newItem = { 
            ...MOCK_HEROI_ATUALIZAR,
            nome: "Mulher Maravilha"
        }
        const [result] = await context.update(itemToUpdate.id, newItem)
        const [updatedItem] = await context.read({id: itemToUpdate.id})
        assert.deepStrictEqual(result, 1)
        assert.deepStrictEqual(updatedItem.nome, newItem.nome)
    })

    it('Delete', async function(){
        const [itemToDelete] = await context.read({})
        const result = await context.delete(itemToDelete.id)
        assert.deepStrictEqual(result, 1)
    })

})