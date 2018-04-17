let router = require('express').Router()
let service = require('./service')

// GET /membership-packages
// Returns:
// - Type: Array of JSON Object
// - JSON Object Attributes [NOTE: All attributes are of type STRING]:
// ---- id
// ---- membership_duration [FORMAT: YYYY-MM-DD]
// ---- membership_fee
router.get('/', async (req, res) => {
  res.send(await service.get())
})

// GET /membership-packages/:id
// Returns:
// - Type: JSON Object
// - JSON Object Attributes [NOTE: All attributes are of type STRING]:
// ---- id
// ---- membership_duration [FORMAT: YYYY-MM-DD]
// ---- membership_fee
router.get('/:id',  async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /membership-packages
// Required Data:
// - STRING membership_duration (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING membership_fee
// Returns:
// - Type: JSON Object
// - JSON Object Attributes [NOTE: All attributes are of type STRING]:
// ---- id
// ---- membership_duration [FORMAT: YYYY-MM-DD]
// ---- membership_fee
router.post('/', async (req, res) => {
  res.send(await service.add(req.body.membership_duration, req.body.membership_fee))
})

// PUT /membership-packages
// Required Data:
// - STRING membership_duration (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING membership_fee
// Returns:
// - Type: JSON Object
// - JSON Object Attributes [NOTE: All attributes are of type STRING]:
// ---- id
// ---- membership_duration [FORMAT: YYYY-MM-DD]
// ---- membership_fee
router.put('/:id', async (req, res) => {
  res.send(await service.update(req.params.id, req.body.membership_duration, req.body.membership_fee))
})

// DELETE /membership-packages/:id
router.delete('/:id', async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /membership-packages
// Required Data:
// - [STRING] id_range
router.delete('/', async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router