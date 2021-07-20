//npm install sequelize, pg-hstore, and pg
const Sequelize = require('sequelize')

async function main() {
    await Herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    })

    const result = await Herois.findAll({
        raw: true
    })
    console.log('result', result)
}

main()