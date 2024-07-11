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
    expect('   ').toBe('   ')
})

it('string surrounded by spaces', () => {
    expect(' test ').toBe("tset")
    expect ('   t ').toBe("t")
})