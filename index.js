// let messages = [];

function getDogs(number) {
    fetch('https://dog.ceo/api/breeds/image/random/'+ number)
    .then(response => response.json())
    .then(responseJson => 
        displayDogs(responseJson))
        .catch(error => alert('Warning! Dog API call failed. Try again later.'));
}

function templateDogHtml(message){
    console.log(message);
    return `<img src="${message}" class="dog-image" />`
}

function displayDogs(responseJson) {
    /* Log the JSON object from the response */
    $('.dog-pics').empty();
    console.log(responseJson);
    /* Add each image to the DOM */
    messages = responseJson.message;
    console.log(messages);
    loopDogs(messages);
}

function loopDogs(messages) {
    for (let i = 0; i < messages.length; i++) {
        $('.dog-pics').append(templateDogHtml(messages[i]));
    };
    $('.dog-pics').removeClass('hidden');
}

function formEvent() {
    $('form').on('submit', function(event){
        event.preventDefault();
        let number = $('input').val();
        console.log(number);
        getDogs(number);
    });
}

$(function start() {
    console.log('Done');
    formEvent();
})