$("#connexion").click(function () {

    $.ajax({
        url: 'http://127.0.0.1:8000/connexion', // La ressource ciblée
        type: 'POST', // Le type de la requête HTTP
        dataType: 'html' // Le type de données à recevoir, ici, du HTML.
    });

});
