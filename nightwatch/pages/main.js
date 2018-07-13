var evenOddsChecker = {
    evensAndOddsChecker(data) {
        this
            .waitForElementPresent('@inputOddsAndEvens', 1000)
            .setValue('@inputOddsAndEvens', data.testNumbers)
            .verify.value('@inputOddsAndEvens', data.testNumbers)
            .click('@splitButton')
            .expect.element('@evenResults').text.to.contain('2', '4')
        this
            .expect.element('@oddResults').text.to.contain(data.oddsCheck)
    }
}

var filterObjectChecker = {
    filterObjectChecker(data) {
        this
            .waitForElementPresent('@inputFilterObject', 1000)
            .setValue('@inputFilterObject', data.testFilter)
            .verify.value('@inputFilterObject', data.testFilter)
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.equal(data.filterCheck)
    }
}

var filterStringChecker = {
    filterStringChecker(data) {
        this
            .waitForElementPresent('@inputFilterString', 1000)
            .setValue('@inputFilterString', data.testFilter)
            .verify.value('@inputFilterString', data.testFilter)
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.equal(data.filterCheck)
    }
}

var palindromeChecker = {
    palindromeChecker(data) {
        this
            .waitForElementPresent('@inputPalindrome', 1000)
            .setValue('@inputPalindrome', data.testPalindrome)
            .verify.value('@inputPalindrome', data.testPalindrome)
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.equal(data.palindromeCheck)
    }
}

var sumChecker = {
    sumChecker(data) {
        this
            .waitForElementPresent('@inputSum1', 1000)
            .setValue('@inputSum1', data.testAdd1)
            .setValue('@inputSum2', data.testAdd2)
            .verify.value('@inputSum1', data.testAdd1)
            .verify.value('@inputSum2', data.testAdd2)
            .click('@sumButton')
            .expect.element('@sumResults').text.to.equal(data.sumCheck)
    }
}

module.exports = {
    url: 'http://localhost:3000',
    commands: [evenOddsChecker, filterObjectChecker, filterStringChecker, palindromeChecker, sumChecker],
    elements: {
        inputOddsAndEvens: 'input[name="evenOddInput"]',
        splitButton: 'button[name="evenOddButton"]',
        evenResults: 'span[name="evenResults"]',
        oddResults: 'span[name="oddResults"]',
        inputFilterObject: 'input[name="objectFilterInput"]',
        filterObjectButton: 'button[name="objectFilterButton"]',
        filterObjectResults: 'span[name="objectFilterResults"]',
        inputFilterString: '#nameFilterInput',
        filterStringButton: '#nameFilterButton',
        filterStringResults: 'span[name="nameFilterResults"]',
        inputPalindrome: 'input[name="palindromeInput"]',
        palindromeButton: 'button[name="palindromeButton"]',
        palindromeResults: 'span[name="palindromeResults"]',
        inputSum1: 'input[name="sumInput1"]',
        inputSum2: 'input[name="sumInput2"]',
        sumButton: 'button[name="sumButton"]',
        sumResults: 'span[name="sumResults"]',
    }
}