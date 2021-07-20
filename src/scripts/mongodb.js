/* 
********** DOCKER COMMANDS **********

docker ps

docker exec -it 5881332a5c57 mongo -u higorsilverio -p goodluck9123 --authenticationDatabase herois

show dbs

use herois

show collections
*/

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1979-01-01'
})

db.herois.find()
db.herois.find().pretty()

for(let i = 0; i <= 10000; i++) {
    db.herois.insert({
        nome: `Flash Clone ${i}`,
        poder: 'Velocidade',
        dataNascimento: '2021-07-20'
    })
}

db.herois.count()

db.herois.findOne()

db.herois.find().limit(5).sort({ nome: -1 })

db.herois.find({}, { poder: 1, _id: 0 }).limit(5).sort({ nome: -1 })

// create 
db.herois.insert({
    nome: 'Batman',
    poder: 'Dinheiro',
    dataNascimento: '1986-01-01'
})

// read
db.herois.find()

// update
db.herois.update({ _id: ObjectId("60f71135feca84405daeeea7") }, 
    { nome: 'Mulher Maravilha', poder: 'Lanço da Verdade', dataNascimento: '1549-01-01'})
// find updated register
// db.herois.find({ _id: ObjectId("60f71135feca84405daeeea7")} ).pretty()
db.herois.update({ _id: ObjectId("60f71135feca84405daeeea9") }, 
    { $set: {nome: 'Lanterna Verde', poder: 'Anel do Poder'} })

// delete
db.herois.remove({}) // delete all -> where clause with any parameters
db.herois.remove({ nome: 'Mulher Maravilha'}) // delete specific register