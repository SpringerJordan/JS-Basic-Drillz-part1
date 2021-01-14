class StrangerStrings {

    getHelloWorld() {
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment) {
        return firstSegment + secondSegment;
    }

    getPrefix(input) {
        return input.substring(0, 3);
    }

    getSuffix(input) {
        return input.substring(0, 3);

    }

    getMiddleCharacter(input) {

        return input.substr(Math.ceil(input.length / 2 - 1), input.length % 2 === 0 ? 2 : 1);


    }

    getFirstWord(input) {
        var totalWords = input;

        var firstWord = totalWords.replace(/ .*/, '');

        return firstWord;
    }

    getSecondWord(input) {
        var sentence = input;
        var exploded = sentence.split(' ');

        // the array starts at 0, so use "- 1" of the word
        var word = 1;
        return(exploded[ 1 ]);







    }


    reverse(input) {
        return input.split('').reverse().join('');
    }







}

module.exports = StrangerStrings;