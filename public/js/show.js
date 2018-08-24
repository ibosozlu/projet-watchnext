$(function () { // DOM ready
    // Vérification du format de la série

    var tvdetail = "https://api.themoviedb.org/3/tv/" + id  +"?api_key=6f077ac27b8512d9188198b9d2e07cad&language=fr-FR";
    // Récupération des données de l'API
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": tvdetail,
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    // Requête permettant de récuperer le casting
    var tvcast = "https://api.themoviedb.org/3/tv/" + id +"/credits?api_key=6f077ac27b8512d9188198b9d2e07cad&language=en-US";

    // Récupération des données de l'API
    var settingscast = {
        "async": true,
        "crossDomain": true,
        "url": tvcast,
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    var similar = "https://api.themoviedb.org/3/tv/" +  id  +"/similar?api_key=6f077ac27b8512d9188198b9d2e07cad"

    // Récupération des données de l'API
    var settingssimilar = {
        "async": true,
        "crossDomain": true,
        "url": similar,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }
    // Méthode AJAX pour la requête de la serie

    $.ajax(settings).done(function (response) {

            console.log(response);

            let description = '';
            let titre = '';
            let poster = '';
            let showRunner = '';
            let note = '';

            if (response.results != '') {

                if (response.name != '' && response.first_air_date != '') {
                    titre = '<h2>' + response.name + ' ' + response.first_air_date + '</h2>';
                }
                if (response.created_by != '') {
                    showRunner = '<p><b>' + ("Créateur : " + '</b><br>' + response.created_by[0].name + '</p>');
                }
                if (response.number_of_seasons != 0) {
                    description += '<p><b>' + response.number_of_seasons + " Saisons" + ' </b></p>';
                }
                if (response.episode_run_time[0] != '') {
                    description += '<p><b>' + "Format: " + '</b><br>' + (response.episode_run_time[0]) + " Minutes" + ' </p>'
                }
                if (response.genres[0] != 0) {
                    description += '<p><b>' + "Genres: " + '</b><br>' + (response.genres[0].name) + ' </p>'
                }
                if (response.vote_average != 0) {
                    description += '<p><b>' + "Note: " + '</b><br>' + (response.vote_average) + "/10 " + ' </p>'
                }
                if (response.overview != 0) {
                    description += '<p><b>' + "Synopsis: " + '</b><br>' + (response.overview) + ' </p>'
                }

                if (response.poster_path != null) {
                    poster += '<br><img src="https://image.tmdb.org/t/p/w400' + response.poster_path + '" style="width: 100%">';
                }
            }
            console.log(titre);
            console.log(showRunner);
            $('.poster').html('').prepend(
                poster
            );
            $('.titre').html('').prepend(
                titre
            );
            $('.showRunner').html('').prepend(
                showRunner
            );
            $('.description').html('').prepend(
                description
            );

        }
    );

    // Méthode AJAX pour la requête du casting
    $.ajax(settingscast).done(function (response1) {

        console.log(response1);
        var cast1 = '';
        var photo1 = '';
        var cast2 = '';
        var photo2 = '';
        var cast3 = '';
        var photo3 = '';
        var cast4 = '';
        var photo4 = '';
        var cast5 = '';
        var photo5 = '';

        if (response1.results != '') {

            cast1 += '<p><b>' + response1.cast[0].name + '</b></p>';
            cast1 += '<p>' + response1.cast[0].character + '</p>';
            photo1 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[0].profile_path + '">';


            cast2 += '<p><b>' + response1.cast[1].name + '</b></p>';
            cast2 += '<p>' + response1.cast[1].character + '</p>';
            photo2 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[1].profile_path + '">';

            cast3 += '<p><b>' + response1.cast[2].name + '</b></p>';
            cast3 += '<p>' + response1.cast[2].character + '</p>';
            photo3 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[2].profile_path + '">';

            cast4 += '<p><b>' + response1.cast[3].name + '</b></p>';
            cast4 += '<p>' + response1.cast[3].character + '</p>';
            photo4 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[3].profile_path + '">';

            cast5 += '<p><b>' + response1.cast[4].name + '</b></p>';
            cast5 += '<p>' + response1.cast[4].character + '</p>';
            photo5 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[4].profile_path + '">';

        }

        $('.photo1').html('').prepend(
            photo1
        );
        $('#acteur1').html('').prepend(
            cast1
        );
        $('.photo2').html('').prepend(
            photo2
        );
        $('#acteur2').html('').prepend(
            cast2
        );
        $('.photo3').html('').prepend(
            photo3
        );
        $('#acteur3').html('').prepend(
            cast3
        );
        $('.photo4').html('').prepend(
            photo4
        );
        $('#acteur4').html('').prepend(
            cast4
        );
        $('.photo5').html('').prepend(
            photo5
        );
        $('#acteur5').html('').prepend(
            cast5
        );


    });

    $.ajax(settingssimilar).done(function (response2) {
            console.log(response2);


            // Remplir la variable content avant de l'inclure dans la div AJAX
            var recommandationPoster1 = '';
            var recommandationPoster2 = '';
            var recommandationPoster3 = '';
            var recommandationTexte1 = '';
            var recommandationTexte2 = '';
            var recommandationTexte3 = '';

            if (response2.results != '') {
                if (response2.results[0].poster_path != null) {
                    recommandationPoster1 += '<a href="http://127.0.0.1:8000/show/' + response2.results[0].id + '" >' +
                        ' <img src="https://image.tmdb.org/t/p/w300' + response2.results[0].poster_path + '">';
                }
                if (response2.results[1].poster_path != null) {
                    recommandationPoster2 += '<a href="http://127.0.0.1:8000/show/' + response2.results[1].id + '" >' +
                        ' <img src="https://image.tmdb.org/t/p/w300' + response2.results[1].poster_path + '">';
                }
                if (response2.results[2].poster_path != null) {
                    recommandationPoster3 += '<a href="http://127.0.0.1:8000/show/' + response2.results[2].id + '" >' +
                        ' <img src="https://image.tmdb.org/t/p/w300' + response2.results[2].poster_path + '">';
                }


                if (((response2.results[0].name) != 'undefined') || ((response2.results[0].title) != 'undefined')) {
                    recommandationTexte1 += '<a href="http://127.0.0.1:8000/show/' + response2.results[0].id + '"><b>' + response2.results[0].name + '</b></a>';
                }
                if (((response2.results[1].name) != 'undefined') || ((response2.results[1].title) != 'undefined')) {
                    recommandationTexte2 += '<a href="http://127.0.0.1:8000/show/' + response2.results[1].id + '"><b>' + response2.results[1].name + '</b></a>';
                }
                if (((response2.results[2].name) != 'undefined') || ((response2.results[2].title) != 'undefined')) {
                    recommandationTexte3 += '<a href="http://127.0.0.1:8000/show/' + response2.results[2].id + '"><b>' + response2.results[2].name + '</b></a>';
                }

            }

            $('.recommandationPoster1').html('').prepend(
                recommandationPoster1
            );
            $('.recommandationPoster2').html('').prepend(
                recommandationPoster2
            );
            $('.recommandationPoster3').html('').prepend(
                recommandationPoster3
            );
            $('.recommandationTexte1').html('').prepend(
                recommandationTexte1
            );
            $('.recommandationTexte2').html('').prepend(
                recommandationTexte2
            );
            $('.recommandationTexte3').html('').prepend(
                recommandationTexte3
            );

        }
    );

})

