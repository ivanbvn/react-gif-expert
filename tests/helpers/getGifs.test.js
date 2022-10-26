import { string } from "prop-types"
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => {
    test('debe de retornar un array de gifs', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBeGreaterThan(0)
        // const {id,title,url} = gifs[0]
        // expect(id).toEqual(expect.any(String))
        // expect(title).toEqual(expect.any(String))
        // expect(url).toEqual(expect.any(String))
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})