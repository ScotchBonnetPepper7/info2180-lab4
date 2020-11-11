window.onload = function () {

    /*The Button*/
    document.getElementsByClassName("btn").item(0).addEventListener('click', function (button) {
        button.preventDefault();

        /* Sending a http request to the server*/
        var url = "http://localhost:8080/superheroes.php";
        var request = new XMLHttpRequest();


        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                alert(request.responseText);

            }

        };

        request.open("GET", url, true);
        request.send();

    });
}


