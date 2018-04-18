let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /sales-transactions
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /sales-transactions/:id
router.get('/:id', auth.ensureAdmin,  async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /sales-transactions
// Required Data:
// - STRING content
router.post('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.body.content))
})

// PUT /sales-transactions
// Required Data:
// - STRING last_name
// - STRING first_name
// - STRING type
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.update(req.params.id, req.body.last_name, req.body.first_name, req.body.type))
})


// DELETE /sales-transactions/:id
router.delete('/:id', auth.ensureAdmin, async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /sales-transactions
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router