const words = require('friendly-words')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })

function generate(count = 1, delimiter = '-') {
  const { predicates, objects } = words
  const pCount = predicates.length
  const oCount = objects.length
  const output = []

  for (let i = 0; i < count; i++) {
    const pair = [
      predicates[Math.floor(Math.random() * pCount)],
      objects[Math.floor(Math.random() * oCount)],
    ]
    output.push(pair.join(delimiter))
  }

  return output
}

module.exports = cors((req, res) => {
  const { count, delimiter } = req.query
  res.json(generate(count, delimiter))
})
