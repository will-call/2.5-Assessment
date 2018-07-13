const data = require('../supporting/data')

main = {}

module.exports = {
    beforeEach : browser => {
        main = browser.page.main()
        main.navigate()
    },

    after : browser => {
        browser.end()
    },

    'Odds and Evens Test' : browser => main.evensAndOddsChecker(data.oddsAndEvens),

    'Filter Object Test' : browser => main.filterObjectChecker(data.filterObject),

    'Filter String Test' : browser => main.filterStringChecker(data.filterString),

    'Palindrome Test' : browser => main.palindromeChecker(data.palindrome),

    'Sum Test' : browser => main.sumChecker(data.sum),

}