import { DataTypes, ModelAttributes } from 'sequelize'

import { BaseAttributes, BaseModel, baseModelAttributes } from './base'

export interface PlayerAttributes extends BaseAttributes {
  number: number
  name: string
}

export class Player extends BaseModel implements PlayerAttributes {
  public number: number
  public name: string
}

export const playerModelAttributes: ModelAttributes<
  Player,
  PlayerAttributes
> = {
  ...baseModelAttributes,
  number: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.TEXT
  }
}
