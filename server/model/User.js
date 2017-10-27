const {knex, Base} = require('../config/database');

class User extends Base {

    static async findOne(username) {
        return await this.query().where({username: username}).limit(1).first();
    }
}

module.exports.User = User;




