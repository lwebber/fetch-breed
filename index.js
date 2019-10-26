'use strict';

function watchForms() {

    $('#breed').submit(event => {
        event.preventDefault();
        let breed = $('input[type="text"]').val();
        console.log(breed);
        getDogBreedImage(breed);
    });

    function getDogBreedImage(breed) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(responseJson =>
                displayResult(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
    }

    function displayResult(responseJson) {
        let txt = `<img src="${responseJson.message}" class="results-img">`;

        $('.results-images').html(txt);

        //display the results section
        $('.results').removeClass('hidden');
    }

}

$(watchForms);