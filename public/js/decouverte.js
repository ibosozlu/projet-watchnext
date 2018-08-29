$(function () { // DOM ready

    // Vérification du format de la série

    var api = "http://api.themoviedb.org/3/discover/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&vote_average.gte=8";

    // Récupération des données de l'API
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": api,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings).done(function (response) {
            console.log(response);

            // Remplir la variable content avant de l'inclure dans la div AJAX
            var content = [];
            var image = [];
            var title = [];
            var i = 0;
            var b = 1;
            var id = [];

            if (response.results != '') {
                $(response.results).each(function () {

                    if (this.poster_path != null) {
                        image[i] = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                    } else {
                        image[i] = '';
                    }
                    if (this.name != '') {
                        title[i] = '<div>' + this.name + '</div>';

                    }
                    if (this.vote_average != '') {
                        content[i] = '<div> Note : ' + this.vote_average + '/10</div>'
                    }
                    if (this.vote_count != '') {
                        content[i] += '<div> Nombre de vote : ' + this.vote_count + '</div>'

                    }
                    if (this.id != '') {
                        id[i] = this.id
                    }
                    i++;
                });
            }
            for (i = 0; i < content.length; i++) {

                if (image[i] == '') {
                    b--;
                } else {
                    $('.image' + b).attr("src", image[i]);

                    $('.lien' + b).attr("href", "http://127.0.0.1:8000/show/" + id[i]);

                    $('.card' + b).html('').prepend(
                        content[i]
                    );

                    $('.title' + b).html('').prepend(
                        title[i]
                    );

                }
                b++;
            }
        }
    );

    var i = 0;

    // Ecouteur d'événement submit
    $('#valider').click(function (event) {
        // Empêche la redirection
        event.preventDefault();

        // Récupération des données du formulaire
        var values = {};
        $.each($('#form').serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });

        console.log(values.titre);
        var api = "http://api.themoviedb.org/3/discover/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&first_air_date.gte=2018-01-01&sort_by=popularity.desc";


        // Récupération des données de l'API
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": api,
            "method": "GET",
            "headers": {},
            "data": "{}"
        }

        $.ajax(settings).done(function (response) {
                console.log(response);

                // Remplir la variable content avant de l'inclure dans la div AJAX
                var content = [];
                var image = [];
                var title = [];
                var i = 0;
                var b = 1;
                var id = [];

                if (response.results != '') {
                    $(response.results).each(function () {

                        if (this.poster_path != null) {
                            image[i] = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                        } else {
                            image[i] = '';
                        }
                        if (this.name != '') {
                            title[i] = '<div>' + this.name + '</div>'
                        }
                        if (this.vote_average != '') {
                            content[i] = '<div> Note : ' + this.vote_average + '/10</div>'
                        }
                        if (this.vote_count != '') {
                            content[i] += '<div> Nombre de vote : ' + this.vote_count + '</div>'
                        }
                        if (this.id != '') {
                            id[i] = this.id
                        }
                        i++;

                    });
                }

                for (i = 0; i < content.length; i++) {
                    if (image[i] == '') {
                        b--;
                    } else {
                        $('.image' + b).attr("src", image[i]);

                        $('.lien' + b).attr("href", "http://127.0.0.1:8000/show/" + id[i]);

                        $('.card' + b).html('').prepend(
                            content[i]
                        );
                        $('.title' + b).html('').prepend(
                            title[i]
                        );
                    }
                    b++;
                }
            }
        );
    });

    $('#valider2').click(function (event) {
        // Empêche la redirection
        event.preventDefault();


        // Vérification du formulaire
        if ($('#form').find('input[name="firstname"]').val() != '' && $('#form').find('input[name="lastname"]').val() != '') {

            // Récupération des données du formulaire
            var values = {};
            $.each($('#form').serializeArray(), function (i, field) {
                values[field.name] = field.value;
            });

            console.log(values.titre);
            var api = "http://api.themoviedb.org/3/discover/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&vote_average.gte=8";


            // Récupération des données de l'API
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": api,
                "method": "GET",
                "headers": {},
                "data": "{}"
            }

            $.ajax(settings).done(function (response) {
                    console.log(response);

                    // Remplir la variable content avant de l'inclure dans la div AJAX
                    var content = [];
                    var image = [];
                    var title = [];
                    var i = 0;
                    var b = 1;
                    var id = [];

                    // Remplir les tableaux des résultats de l'objet response
                    if (response.results != '') {
                        $(response.results).each(function () {

                            if (this.poster_path != null) {
                                image[i] = 'https://image.tmdb.org/t/p/w300' + this.poster_path;

                            } else {
                                image[i] = '';
                            }
                            if (this.name != '') {
                                title[i] = '<div>' + this.name + '</div>'
                            }
                            if (this.vote_average != '') {
                                content[i] = '<div> Note : ' + this.vote_average + '/10</div>'
                            }
                            if (this.vote_count != '') {
                                content[i] += '<div> Nombre de vote : ' + this.vote_count + '</div>'
                            }
                            if (this.id != '') {
                                id[i] = this.id
                            }
                            i++;
                        });
                    }
                    // Boucle permettant de ne pas afficher les contenues sans images
                    for (i = 0; i < content.length; i++) {

                        if (image[i] == '') {
                            b--;
                        } else {
                            $('.image' + b).attr("src", image[i]);

                            $('.lien' + b).attr("href", "http://127.0.0.1:8000/show/" + id[i]);

                            $('.card' + b).html('').prepend(
                                content[i]
                            );

                            $('.title' + b).html('').prepend(
                                title[i]
                            );
                        }
                        b++;
                    }
                }
            );
        }
    });

    $('#valider3').click(function (event) {
        // Empêche la redirection
        event.preventDefault();

            // Récupération des données du formulaire
            var values = {};
            $.each($('#form').serializeArray(), function (i, field) {
                values[field.name] = field.value;
            });

            console.log(values.titre);
            var api = "http://api.themoviedb.org/3/discover/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&vote_count.gte=10";


            // Récupération des données de l'API
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": api,
                "method": "GET",
                "headers": {},
                "data": "{}"
            }

            $.ajax(settings).done(function (response) {
                    console.log(response);

                    // Remplir la variable content avant de l'inclure dans la div AJAX
                    var content = [];
                    var image = [];
                    var title = [];
                    var i = 0;
                    var b = 1;
                    var id = [];

                    if (response.results != '') {
                        $(response.results).each(function () {

                            if (this.poster_path != null) {
                                image[i] = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                            } else {
                                image[i] = '';
                            }
                            if (this.name != '') {
                                title[i] = '<div>' + this.name + '</div>'
                            }
                            if (this.vote_average != '') {
                                content[i] = '<div> Note : ' + this.vote_average + '/10</div>'
                            }
                            if (this.vote_count != '') {
                                content[i] += '<div> Nombre de vote : ' + this.vote_count + '</div>'
                            }
                            if (this.id != '') {
                                id[i] = this.id
                            }
                            i++;
                        });
                    }

                    for (i = 0; i < content.length; i++) {
                        console.log(id[i]);
                        if (image[i] == '') {
                            b--;
                        } else {
                            $('.image' + b).attr("src", image[i]);

                            $('.lien' + b).attr("href", "http://127.0.0.1:8000/show/" + id[i]);

                            $('.card' + b).html('').prepend(
                                content[i]
                            );

                            $('.title' + b).html('').prepend(
                                title[i]
                            );
                        }
                        b++;
                    }
                }
            );

    });
})
