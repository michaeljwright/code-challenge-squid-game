import { Sequelize, DataTypes } from 'sequelize'

import { Guard } from '../src/models/guard'

import { createGuard } from './factories/guards'

class GuardMock {
  public createObjectByConstructor(opts: Guard) {
    new Guard(opts)
  }
}

jest.mock('../src/models/guard')

beforeEach(async () => {
  jest.resetAllMocks()
})

describe('Test Guards', () => {
  it('should return the exact given properties for the model', () => {
    const guard: any = createGuard(true)
    new GuardMock().createObjectByConstructor(guard)
    expect(Guard).toBeCalledWith(expect.objectContaining(guard))

    expect(typeof guard.uid).toBe('string')
    expect(typeof guard.name).toBe('string')
    expect(typeof guard.type).toBe('string')
    expect(guard.createdAt instanceof Date).toBe(true)
    expect(guard.updatedAt instanceof Date).toBe(true)

    const guardSnakeCase: any = createGuard(false)
    expect(guardSnakeCase.created_at instanceof Date).toBe(true)
    expect(guardSnakeCase.updated_at instanceof Date).toBe(true)
  })
})
