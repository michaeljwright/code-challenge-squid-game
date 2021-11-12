import { Sequelize, DataTypes } from 'sequelize'

import { Game } from '../src/models/game'

import { createGame } from './factories/games'

class GameMock {
  public createObjectByConstructor(opts: Game) {
    new Game(opts)
  }
}

jest.mock('../src/models/game')

beforeEach(async () => {
  jest.resetAllMocks()
})

describe('Test Games', () => {
  it('should return the exact given properties for the model', () => {
    const game: any = createGame(true)
    new GameMock().createObjectByConstructor(game)
    expect(Game).toBeCalledWith(expect.objectContaining(game))

    expect(typeof game.uid).toBe('string')
    expect(typeof game.name).toBe('string')
    expect(game.createdAt instanceof Date).toBe(true)
    expect(game.updatedAt instanceof Date).toBe(true)

    const gameSnakeCase: any = createGame(false)
    expect(gameSnakeCase.created_at instanceof Date).toBe(true)
    expect(gameSnakeCase.updated_at instanceof Date).toBe(true)
  })
})
