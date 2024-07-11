const reverseString = require('../src/reverseString')

it('reversed', () => {
    expect('test').toBe('tset')
    expect('something').toBe('gnihtemos')
})

it('empty string', () => {
    expect('').toBe('')
})

it('space', () => {
    expect(' ').toBe(' ')
})