const users = require('./users')

module.exports = async (req, res) => {
    const data = await users.fetch()
    if (data.length > 0) {
        res.send(data[0].name)
    } else {
        res.sendStatus(404)
    }
}
