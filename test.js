const getOdd () {
    let result = [...Array(50).keys()].map(key => key+1)
    return result.filter(x => x% 2 === 0)
}