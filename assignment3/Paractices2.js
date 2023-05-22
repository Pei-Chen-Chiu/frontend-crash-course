const url = "https://www.boredapi.com/api/activity";
$('#activity button').on('click', function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            $('#activity p').text(data.activity);

        })
        .catch(error => {
            console.error('Error: ', error)
        })

});


$('#Predict button').on('click', function () {
    const name = $('#Predict input').val();
    const url1 = `https://api.agify.io/?name=${name}`;

    $.ajax({
        url: url1,
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#Predict p').text(`Predicted age for ${response.name}: ${response.age}`);
        },
        error: function (xhr, status, error) {
            console.error('Error: ', error);
        }
    });
});