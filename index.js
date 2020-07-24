function getDogs(number) {
    fetch('https://dog.ceo/api/breeds/image/random/'+ number)
    .then(response => response.json())
    .then(responseJson => 
        displayDogs(responseJson))
    .catch(error => alert('Warning! Dog API call failed. Try again later.'));
}

function templateDogHtml(number){
    return `<img src="message[${number}]" name="dog-image-${number}" alt="dog pic ${number} class="dog-image">`
}

function displayDogs() {
    /* Log the JSON object from the response */
    console.log(responseJson);
    /* Add each image to the DOM */
    let message = responseJson.message;
    for (let i = 0; i < message.length; i++) {
        $('.dog-pics').append(templateDogHtml(i));
    };
    $('dog-pics').removeClass('hidden');
}

function formEvent() {
    $('form').on('submit', function(event){
        event.preventDefault();
        let number = $('input');
        console.log(number);
        getDogs(number);
    });
}

$(function start() {
    console.log('Done');
    formEvent();
})