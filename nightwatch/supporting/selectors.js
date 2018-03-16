// selectors.js contains all the selectors needed for testing 
module.exports = {
    oddsAndEvens: {
        input: 'input[name="evenOddInput"]',
        splitButton: 'button[name="evenOddButton"]',
        evenResults: 'span[name="evenResults"]',
        oddResults: 'span[name="oddResults"]',
    },
    filterObject: {
        input: 'input[name="objectFilterInput"]',
        filterButton: 'button[name="objectFilterButton"]',
        filterResults: 'span[name="objectFilterResults"]',
    },
    filterString: {
        input: '#nameFilterInput',
        filterButton: '#nameFilterButton',
        filterResults: 'span[name="nameFilterResults"]',
    },
    palindrome: {
        input: 'input[name="palindromeInput"]',
        palindromeButton: 'button[name="palindromeButton"]',
        palindromeResults: 'span[name="palindromeResults"]',
    },
    sum: {
        input1: 'input[name="sumInput1"]',
        input2: 'input[name="sumInput2"]',
        sumButton: 'button[name="sumButton"]',
        sumResults: 'span[name="sumResults"]',
    },

    
}