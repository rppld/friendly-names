const words = require('friendly-words')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })

function generate(delimiter = '-') {
  const { predicates, objects } = words
  const pCount = predicates.length
  const oCount = objects.length
  const pair = [
    predicates[Math.floor(Math.random() * pCount)],
    objects[Math.floor(Math.random() * oCount)],
  ]
  return pair.join(delimiter)
}

module.exports = cors((req, res) => {
  const { delimiter } = req.query
  res.end(generate(delimiter))
})
