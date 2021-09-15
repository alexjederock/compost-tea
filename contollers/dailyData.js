import models from '../models'

export const getAllData = async (request, response) => {
  const daily = await models.dailyData.findAll({ include: [{ model: models.dailyData }], })

  return response.send(daily)
}



