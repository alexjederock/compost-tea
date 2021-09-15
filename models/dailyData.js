export default (connection, Sequelize) => {
  return connection.define('dailydata', {
    dailyDataId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    eventName: { type: Sequelize.STRING },
    amountGiven: { type: Sequelize.DECIMAL },
    amountTaken: { type: Sequelize.DECIMAL },
    strainName: { type: Sequelize.STRING },
    plantWeight: { type: Sequelize.DECIMAL },
    coTwoLevel: { type: Sequelize.DECIMAL },
    lightLevel: { type: Sequelize.DECIMAL },
    humidity: { type: Sequelize.DECIMAL },
    temperature: { type: Sequelize.DECIMAL },
  }, { paranoid: true })
}

