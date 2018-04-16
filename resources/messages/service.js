let db = require('../../db/index.js')
let Messages = db.Messages

module.exports = {
  get: () => {
    return Messages.findAll()
  },
  getOne: (id) => {
    return Messages.findById(id)
  },
  add: (content) => {
    return Messages.create({ content })
  },
  deleteOne: (id) => {
    return Messages.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Messages.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return Messages.update({ last_name, first_name, type }, { where: { id } })
  },
}