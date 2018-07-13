// functions.js contains the function used to test 2.5-Assessment
/**
 * evensAndOddsChecker tests the Evens and Odds functionality of taking a string of numbers and sorting them into odd and even outputs
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} selectors an object containing the selectors required to run the test
 * @param {object} data an object containing the data for input and expected outputs
 */
let evensAndOddsChecker = (browser, selectors, data) => {
    browser
        .waitForElementPresent(selectors.input, 1000)
        .setValue(selectors.input, data.testNumbers)
        .verify.value(selectors.input, data.testNumbers)
        .click(selectors.splitButton)
        .expect.element(selectors.evenResults).text.to.contain('2', '4')
    browser
        .expect.element(selectors.oddResults).text.to.contain(data.oddsCheck)
}

/**
 * filterObjectChecker checks that the Filter Object functionality of filtering objects by their properties works properly
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} selectors an object containing the selectors required to run the test
 * @param {object} data an object containing the data for input and expected outputs
 */
let filterObjectChecker = (browser, selectors, data) => {
    browser
        .waitForElementPresent(selectors.input, 1000)
        .setValue(selectors.input, data.testFilter)
        .verify.value(selectors.input, data.testFilter)
        .click(selectors.filterButton)
        .expect.element(selectors.filterResults).text.to.equal(data.filterCheck)
}

/**
 * filterStringChecker checks that the Filter String functionality of  filtering strings by an input works properly
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} selectorsan object containing the selectors required to run the test
 * @param {object} data an object containing the data for input and expected outputs
 */
let filterStringChecker = (browser, selectors, data) => {
    browser
        .waitForElementPresent(selectors.input, 1000)
        .setValue(selectors.input, data.testFilter)
        .verify.value(selectors.input, data.testFilter)
        .click(selectors.filterButton)
        .expect.element(selectors.filterResults).text.to.equal(data.filterCheck)
}

/**
 * palindromeChecker tests to see if an inputted string is a palindrome or not
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} selectors an object containing the selectors required to run the test
 * @param {object} data an object containing the data for input and expected outputs
 */
let palindromeChecker = (browser, selectors, data) => {
    browser
        .waitForElementPresent(selectors.input, 1000)
        .setValue(selectors.input, data.testPalindrome)
        .verify.value(selectors.input, data.testPalindrome)
        .click(selectors.palindromeButton)
        .expect.element(selectors.palindromeResults).text.to.equal(data.palindromeCheck)
}

/**
 * sumChecker checks to see if two inputted numbers give a correct sum
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {object} selectors an object containing the selectors required to run the test
 * @param {object} data an object containing the data for input and expected outputs
 */
let sumChecker = (browser, selectors, data) => {
    browser
        .waitForElementPresent(selectors.input1, 1000)
        .setValue(selectors.input1, data.testAdd1)
        .setValue(selectors.input2, data.testAdd2)
        .verify.value(selectors.input1, data.testAdd1)
        .verify.value(selectors.input2, data.testAdd2)
        .click(selectors.sumButton)
        .expect.element(selectors.sumResults).text.to.equal(data.sumCheck)
}

module.exports = {
    evensAndOddsChecker: evensAndOddsChecker,
    filterObjectChecker: filterObjectChecker,
    filterStringChecker: filterStringChecker,
    palindromeChecker: palindromeChecker,
    sumChecker: sumChecker
}