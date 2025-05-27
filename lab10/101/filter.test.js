function filterByTerm(inputArr, searchTerm) {
    // copying array of literal objects
    let op = JSON.parse(JSON.stringify(inputArr))
    op.map((val, index) => op[index].url = val.url.toLowerCase())
    return inputArr.filter(function (arrayElement, index) {
        return op[index].url.match(searchTerm.toLowerCase())
    })
}

function filterByTerm2(inputArr, searchTerm) {
    // copying array of literal objects
    let op = JSON.parse(JSON.stringify(inputArr))
    op.map((val, index) => op[index].planeta = val.planeta.toLowerCase())
    return inputArr.filter(function (arrayElement, index) {
        return op[index].planeta.match(searchTerm.toLowerCase())
    })
}

describe("Funkcja filtrująca", () => {
    test("filtrowanie na podstawie wyszukiwanego terminu (link)", () => {
        const input = [
            { id: 1, planeta: "Merkury", url: "https://pl.wikipedia.org/wiki/Merkury" },
            { id: 2, planeta: "Wenus", url: "https://pl.wikipedia.org/wiki/Wenus" },
            { id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/Ziemia" }
        ]
        const output = [{ id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/Ziemia" }]
        expect(filterByTerm(input, "Ziemia")).toEqual(output)
    })
    test("filtrowanie na podstawie wyszukiwanego terminu (planeta)", () => {
        const input = [
            { id: 1, planeta: "Merkury", url: "https://pl.wikipedia.org/wiki/Merkury" },
            { id: 2, planeta: "Wenus", url: "https://pl.wikipedia.org/wiki/Wenus" },
            { id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/emia" }
        ]
        const output = [{ id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/emia" }]
        expect(filterByTerm2(input, "Ziemia")).toEqual(output)
    })
})