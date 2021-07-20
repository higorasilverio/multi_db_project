const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log("Item created at MongoDB")
    }
}

module.exports = MongoDB