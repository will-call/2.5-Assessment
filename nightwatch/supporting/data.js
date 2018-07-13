//data.js contains all of the inputs and expected outputs for use in the tests

module.exports = {

    oddsAndEvens: {
        testNumbers: '1, 2, 3, 4',
        evensCheck : ('2', '4'),
        oddsCheck: 'Odds: [1,3]'
    },

    filterObject: {
        testFilter: 'title',
        filterCheck: 'Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]'
    },

    filterString: {
        testFilter: 'Ma',
        filterCheck: 'Filtered Names: [ "Mark", "Maddy" ]'
    },

    palindrome: {
        testPalindrome: 'hannah',
        palindromeCheck: 'Palindrome: true'
    },

    sum: {
        testAdd1: '30',
        testAdd2: '3',
        sumCheck: 'Sum: 33'
    },

    
}