var objection = require('objection');
var Model = objection.Model;
var Knex = require('knex');

var knex = Knex({
    client: 'pg',
    connection: {
        user: 'marossmrek',
        password: '12345',
        database: 'diplom'
    }
});

Model.knex(knex);

class Base extends Model {

    static get tableName() {
        return this.name.toLowerCase();
    }

    static async findById(id) {
        return await this.query().where({id: id}).limit(1).first();
    }
};

module.export = knex;
module.exports.Base = Base;




