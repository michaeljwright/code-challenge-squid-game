import { createGame, createGames } from './factories/games'
import { camelToSnakeCase } from './factories/utils'

describe('Test Factories', () => {
  it('should return the exact given properties within object', () => {
    const result = createGames(3, true)
    expect(result[0]).toMatchObject(result[0])
  })

  it('utils:camelToSnakeCase should return the converted properties within object to Snake Case', () => {
    const result = createGame(true)
    const snakeCase = camelToSnakeCase(result)
    expect(snakeCase).toEqual(snakeCase)
  })
})
