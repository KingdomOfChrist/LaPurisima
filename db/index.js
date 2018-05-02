const DB_CONFIG = require('./config')

const Admins = require('./models/admins')
// const Members = require('./models/members')
// const MembershipPackages = require('./models/membership-packages')
// const Messages = require('./models/messages')
// const Persons = require('./models/persons')
// const SalesTransactions = require('./models/sales-transactions')
const Logs = require('./models/logs')
// const Visits = require('./models/visits')
// const WalkInClients = require('./models/walk-in-clients')

/* == DECLARE relationships == */
// Members.belongsTo(Persons, { foreignKey: { allowNull: false } })
// Members.belongsTo(MembershipPackages, { foreignKey: { allowNull: false } })
// SalesTransactions.belongsTo(Persons, { foreignKey: { allowNull: false } })
// Logs.belongsTo(Persons, { foreignKey: { allowNull: false } })
// Visits.belongsTo(Persons, { foreignKey: { allowNull: false } })
// WalkInClients.belongsTo(Persons, { foreignKey: { allowNull: false } })
// Messages.belongsTo(Members, { as: 'sender', foreignKey: { name: 'senderId', allowNull: false } })
// Messages.belongsTo(Members, { as: 'receiver', foreignKey: { name: 'receiverId', allowNull: false } })

/* == CREATE tables == */
createAllTables = async () => {
  await Admins.sync()
  // await Persons.sync()
  // await MembershipPackages.sync()
  // await Members.sync()
  // await Messages.sync()
  // await SalesTransactions.sync()
  await Logs.sync()
  // await Visits.sync()
  // await WalkInClients.sync()
}

createAllTables()

module.exports = {
  Sequelize: DB_CONFIG.Sequelize,
  sequelize: DB_CONFIG.sequelize,
  Admins,
  // Members,
  // MembershipPackages,
  // Messages,
  // Persons,
  // SalesTransactions,
  // Logs,
  // Visits,
  // WalkInClients,
}