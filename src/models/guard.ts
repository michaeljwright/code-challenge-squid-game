import { DataTypes, ModelAttributes } from 'sequelize'

import { BaseAttributes, BaseModel, baseModelAttributes } from './base'

export interface GuardAttributes extends BaseAttributes {
  name: string
  type: 'Square' | 'Circle' | 'Triangle'
}

export class Guard extends BaseModel implements GuardAttributes {
  public name: string
  public type: GuardAttributes['type']
}

export const guardModelAttributes: ModelAttributes<
  Guard,
  GuardAttributes
> = {
  ...baseModelAttributes,
  name: {
    type: DataTypes.TEXT
  },
  type: {
    type: DataTypes.TEXT
  }
}
