const selectors = require('../supporting/selectors')
const functions = require('../supporting/functions')
const data = require('../supporting/data')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },

    after : browser => {
        browser.end()
    },

    'Odds and Evens Test' : browser => functions.evensAndOddsChecker(browser, selectors.oddsAndEvens, data.oddsAndEvens),

    'Filter Object Test' : browser => functions.filterObjectChecker(browser, selectors.filterObject, data.filterObject),

    'Filter String Test' : browser => functions.filterStringChecker(browser, selectors.filterString, data.filterString),

    'Palindrome Test' : browser => functions.palindromeChecker(browser, selectors.palindrome, data.palindrome),

    'Sum Test' : browser => functions.sumChecker(browser, selectors.sum, data.sum),

}