let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /membership-packages
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /membership-packages/:id
router.get('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /membership-packages
// Required Data:
// - STRING membership_duration (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING membership_fee
router.post('/', auth.ensureAdmin, async (req, res, next) => {
  res.send(await service.add(req.body.membership_duration, req.body.membership_fee))
})

// PUT /membership-packages
// Required Data:
// - STRING membership_duration (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING membership_fee
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.update(req.params.id, req.body.membership_duration, req.body.membership_fee))
})

// DELETE /membership-packages/:id
router.delete('/:id', auth.ensureAdmin, async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /membership-packages
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router