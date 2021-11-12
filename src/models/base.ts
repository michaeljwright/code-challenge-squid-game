import { DataTypes, Model, ModelAttributes, UUIDV4 } from 'sequelize'

export interface BaseAttributes {
  id: number
  uid: string
}

export class BaseModel extends Model implements BaseAttributes {
  public id: number
  public uid!: string
}

export const baseModelAttributes: ModelAttributes<BaseModel, BaseAttributes> = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uid: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true
  }
}
