import { Sequelize, DataTypes } from 'sequelize'

import { Player } from '../src/models/player'

import { createPlayer } from './factories/players'

class PlayerMock {
  public createObjectByConstructor(opts: Player) {
    new Player(opts)
  }
}

jest.mock('../src/models/player')

beforeEach(async () => {
  jest.resetAllMocks()
})

describe('Test Players', () => {
  it('should return the exact given properties for the model', () => {
    const player: any = createPlayer(true)
    new PlayerMock().createObjectByConstructor(player)
    expect(Player).toBeCalledWith(expect.objectContaining(player))

    expect(typeof player.uid).toBe('string')
    expect(typeof player.number).toBe('number')
    expect(typeof player.name).toBe('string')
    expect(player.createdAt instanceof Date).toBe(true)
    expect(player.updatedAt instanceof Date).toBe(true)

    const playerSnakeCase: any = createPlayer(false)
    expect(playerSnakeCase.created_at instanceof Date).toBe(true)
    expect(playerSnakeCase.updated_at instanceof Date).toBe(true)
  })
})
