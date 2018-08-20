
$(function () { // DOM ready
    // interception de l'évènement submit du formulaire

    // Déclaration des variables
    var long = 'long';
    var court = 'court';
    var truemeta = '';
    var trueawards = '';
    var test = '';

    // Ecouteur d'événement click
    $('#valider').click(function (event) {
        // Empêche la redirection
        event.preventDefault();

        // Vérification du formulaire
        if ($('#form').find('input[name="firstname"]').val() != '' && $('#form').find('input[name="lastname"]').val() != '') {

            // Récupération des données du formulaire
            var values = {};
            $.each($('#form').serializeArray(), function (i, field) {
                values[field.name] = field.value;
            });

            // Vérification du format de la série
            if (values.duree == long) {
                var api = "http://www.omdbapi.com/?apikey=b903184c&" + "t=" + values.titre + "&y=" + values.date + "&plot=" + "full";
            } else if (values.duree = court) {
                var api = "http://www.omdbapi.com/?apikey=b903184c&" + "t=" + values.titre + "&y=" + values.date;
            }

            // Récupération des données de l'API
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": api,
                "method": "GET",
                "headers": {},
                "data": "{}"
            }

            // Méthode AJAX

            $.ajax(settings).done(function (response) {
                console.log(response);

                $.get(
                    // fichier appelé
                    '../watch-next/recommandation.php',
                    // données envoyées = données du formulaire
                    $(this).serialize(),
                    // fonction qui traite la réponse de categorie-ajax.php
                    function () {

                        // Vérification de la présence d'une note
                        if (response.Metascore != "N/A") {
                            truemeta = ('<div class="alert alert-success">' + ("La note est de " + response.Metascore + "/100 ") + ' </div>');
                        } else {
                            truemeta = '';
                        }

                        // Vérification de la présence d'une récompense
                        if (response.Awards != "N/A") {
                            trueawards = ('<div class="alert alert-success">' + ("Les récompenses : " + response.Awards) + ' </div>');
                        } else {
                            trueawards = '';
                        }

                        // Vérification si la recherche est une série
                        if (response.Type == 'series') {
                            test = 'ok';
                        } else {
                            test = '';
                        }

                        // Si la recherche est bien une série afficher les résultats dans la div AJAX
                        if (test == 'ok') {
                            $('.ajax').html('').prepend(
                                '<div class="alert alert-success"> <img src=" ' + (response.Poster) + ' ">   </div>',
                                '<div class="alert alert-success">' + ("Le titre est : " + response.Title) + ' </div>',
                                '<div class="alert alert-success">' + ("L'année de production est : " + response.Year) + ' </div>',
                                '<div class="alert alert-success">' + ("La durée est : " + response.Runtime) + ' </div>',
                                '<div class="alert alert-success">' + ("Les acteurs sont : " + response.Actors) + ' </div>',
                                '<div class="alert alert-success">' + (response.Plot) + ' </div>',
                                '<div class="alert alert-success">' + ("Les genres sont : " + response.Genre) + ' </div>',
                                truemeta,
                                trueawards,
                            );
                            $('#form')[0].reset();
                        } else {
                            // Afficher un message d'erreur avec le nom de la recherche
                            $('.ajax').html('').prepend(
                                '<div class="alert alert-danger"> Il n\'y a pas de résultat pour la série : ' + values.titre + ' </div>'
                            )
                        }

                    }

                );
            });
        };
    });


});












