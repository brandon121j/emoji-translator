const button = document.querySelector('#submit-button');

function onClick() {

    // Gets value of radio buttons 
    const radio = document.querySelector('input[type=radio]:checked');

    // Gets input element
    const translator = document.querySelector('#translator-input');

    // Gets the value of the input element
    const tValue = translator.value;

    // Querys the results at the bottom
    const results = document.querySelector('#results');

    if (radio.value === 'encode') {
        results.innerHTML = encode(tValue);
    }

    else if (radio.value === 'translate') {
        results.innerHTML = translate(tValue)
    }

    else if (radio.value === 'madlib') {
        results.innerHTML = madlib(tValue)
    }

    else if (radio.value === 'search') {

        // Clears any displayed results data
        results.innerHTML = '';

        // Searches for matching characters
        const searching = search(tValue);

        // Creates p tag
        // const elemented = document.createElement("p");

        for (let search of searching) {
            const elemented = document.createElement("p");
            elemented.innerText = search.symbol;
            document.querySelector("#results").appendChild(elemented);
        }

        // Places in results area
        // document.querySelector("#results").appendChild(elemented);

    }

    else if (radio.value === 'random') {
        randomNumber = 0;

        function numerology() {
            randomNumber = Math.floor(Math.random() * 4);
            console.log(randomNumber);
        }

        numerology();

        if (randomNumber === 0) {
            results.innerHTML = encode(tValue);
        }

        if (randomNumber === 1) {
            results.innerHTML = translate(tValue);
        }

        if (randomNumber === 2) {
            results.innerHTML = madlib(tValue);
        }

        if (randomNumber === 3) {
            results.innerHTML = '';
            const searching = search(tValue);
            for (let search of searching) {
                const elemented = document.createElement("p");
                elemented.innerText = search.symbol;
                document.querySelector("#results").appendChild(elemented);
            }
        }
    }

    console.log(radio.value);
}

// const enter = function(event) {

//     let pressedKey = event.keyCode || event.which;
//     if (pressedKey === 13) {
//         alert("Test: You pressed the Enter key!!");
//         event.preventDefault();
//     }

// }

document.body.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
    // Simulate clicking on the submit button.
    onClick();
    }
});

button.addEventListener('click', onClick);