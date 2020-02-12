const superagent = require('superagent')

module.exports = {
    fetch: async () => {
        console.log('Making a http call');
        const result = await superagent.get('http://jsonplaceholder.typicode.com/users')
        return result.body
    }
}
