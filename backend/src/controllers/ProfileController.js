const connection = require('../database/connectiion');

module.exports = {
    async index(request,response) {
        const ong_id = request.headers.authorization;
        console.log(request.header)

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

            return response.json(incidents);

    }
}