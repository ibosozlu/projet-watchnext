$(function () { // DOM ready
    // Vérification du format de la série
    var tvdetail = "https://api.themoviedb.org/3/tv/" + id + "?api_key=6f077ac27b8512d9188198b9d2e07cad&language=fr-FR";
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
    var tvcast = "https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=6f077ac27b8512d9188198b9d2e07cad&language=en-US";
    // Récupération des données de l'API
    var settingscast = {
        "async": true,
        "crossDomain": true,
        "url": tvcast,
        "method": "GET",
        "headers": {},
        "data": "{}"
    };
    var similar = "https://api.themoviedb.org/3/tv/" + id + "/similar?api_key=6f077ac27b8512d9188198b9d2e07cad"
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
            let genre = '';
            var bar = new ProgressBar.Circle(note, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1800,
                text: {
                    autoStyleContainer: false
                },
                from: {color: '#aaa', width: 1},
                to: {color: '#fecc00', width: 4},
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);
                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + '/100');
                    }
                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '1.5rem';
            bar.animate((response.vote_average / 10));  // Number from 0.0 to 1.0 */
            if (response.results != '') {
                if (response.name != '' && response.first_air_date != '') {
                    titre = '<h2>' + response.name + ' (' + (response.first_air_date.substr(0, 4)) + ')</h2>';
                }
                if (response.created_by != '') {
                    showRunner += '<p><b>Créateur : </b>';
                    jQuery.each(response.created_by, function (index) {
                        showRunner += '<br> ' + response.created_by[index].name
                    });

                }
                if (response.networks != '') {
                    showRunner += '<b> <br><br>' + ("Network : " + '</b>' + response.networks[0].name + '</p>');
                }
                if (response.number_of_seasons != 0) {
                    showRunner += '<p><b>' + response.number_of_seasons + " Saisons" + ' </b> / ';
                }
                if (response.status != '') {
                    showRunner += '<b>' + ("Statut : " + '</b>' + response.status + '</p>');
                }
                if (response.episode_run_time[0] != '') {
                    genre += '<p><b>' + "Format: " + '</b><br>' + (response.episode_run_time[0]) + " Minutes" + ' </p>'
                }
                if (response.genres[0] != 0) {
                    genre += '<p><b>Genres : </b>';
                    jQuery.each(response.genres, function (index) {
                        genre += '<br> ' + response.genres[index].name
                    });
                }
                /*  if (response.vote_average != 0) {
                      note += '<p><b>' + "Note: " + '</b><br>' + (response.vote_average) + "/10 " + ' </p>'
                  }*/
                if (response.overview != 0) {
                    description += '<p><b>' + "Synopsis: " + '</b><br>' + (response.overview) + ' </p>'
                }
                if (response.poster_path != null) {
                    poster += '<br><img src="https://image.tmdb.org/t/p/w400' + response.poster_path + '"' +
                        ' style="width: 100%; box-shadow: 5px 10px 18px grey;">';
                }
            }
            /*  console.log(titre);
              console.log(showRunner);*/
            $('.poster').html('').prepend(
                poster
            );
            $('.titre').html('').prepend(
                titre
            );
            $('.showRunner').html('').prepend(
                showRunner
            );
            /*$('#note').html('').prepend(
               bar
            );*/
            $('.description').html('').prepend(
                description
            );
            $('.genre').html('').prepend(
                genre
            );
        }
    );
    var a = '';
    /*
                $('#Ajouter').click(function (event) {
                    event.preventDefault();
                    console.log(Ajouter);

                })
    */


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
            cast1 += '<p><b>' + response1.cast[0].name + '</b>';
            cast1 += '<br>' + response1.cast[0].character + '</p>';
            photo1 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[0].profile_path + '' +
                '" style="box-shadow: 5px 10px 18px grey; margin-bottom: 7px" >';
            cast2 += '<p><b>' + response1.cast[1].name + '</b>';
            cast2 += '<br>' + response1.cast[1].character + '</p>';
            photo2 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[1].profile_path + '' +
                '"style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px">';
            cast3 += '<p><b>' + response1.cast[2].name + '</b>';
            cast3 += '<br>' + response1.cast[2].character + '</p>';
            photo3 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[2].profile_path + '' +
                '"style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px">';
            cast4 += '<p><b>' + response1.cast[3].name + '</b>';
            cast4 += '<br>' + response1.cast[3].character + '</p>';
            photo4 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[3].profile_path + '' +
                '"style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px">';
            cast5 += '<p><b>' + response1.cast[4].name + '</b>';
            cast5 += '<br>' + response1.cast[4].character + '</p>';
            photo5 += '<br><img src="https://image.tmdb.org/t/p/w138_and_h175_face' + response1.cast[4].profile_path + '' +
                '"style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px">';
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
                        ' <img src="https://image.tmdb.org/t/p/w300' + response2.results[0].poster_path + '"' +
                        'style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px"">';
                }
                if (response2.results[1].poster_path != null) {
                    recommandationPoster2 += '<a href="http://127.0.0.1:8000/show/' + response2.results[1].id + '" >' +
                        ' <img src="https://image.tmdb.org/t/p/w300' + response2.results[1].poster_path + '"' +
                        'style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px"">';
                }
                if (response2.results[2].poster_path != null) {
                    recommandationPoster3 += '<a href="http://127.0.0.1:8000/show/' + response2.results[2].id + '" >' +
                        ' <img src="https://image.tmdb.org/t/p/w300' + response2.results[2].poster_path + '"' +
                        'style="box-shadow: 5px 10px 18px grey;margin-bottom: 7px"">';
                }
                if (((response2.results[0].name) != 'undefined') || ((response2.results[0].title) != 'undefined')) {
                    recommandationTexte1 += response2.results[0].name;
                }
                if (((response2.results[1].name) != 'undefined') || ((response2.results[1].title) != 'undefined')) {
                    recommandationTexte2 += response2.results[1].name;
                }
                if (((response2.results[2].name) != 'undefined') || ((response2.results[2].title) != 'undefined')) {
                    recommandationTexte3 += response2.results[2].name;
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