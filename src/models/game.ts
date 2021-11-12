import { DataTypes, ModelAttributes } from 'sequelize'

import { BaseAttributes, BaseModel, baseModelAttributes } from './base'

export interface GameAttributes extends BaseAttributes {
  name: string
}

export class Game extends BaseModel implements GameAttributes {
  public name: string
}

export const gameModelAttributes: ModelAttributes<
  Game,
  GameAttributes
> = {
  ...baseModelAttributes,
  name: {
    type: DataTypes.TEXT
  }
}
