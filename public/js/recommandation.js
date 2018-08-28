$(function () { // DOM ready

    // Vérification du format de la série

    var api = "https://api.themoviedb.org/3/search/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&query="+name;

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


            // Remplir la variable content avant de l'inclure dans la div AJAX
            var content = [];
            var image = [];
            var title = [];
            var i= 0;
            var b=1;
            var id= [];


            if (response.results != '') {
                $(response.results).each(function () {


                    if (this.poster_path != null) {
                        image[i] = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                    }
                    else{
                        image[i] = ''
                    }
                    if (this.name != '') {
                        title[i] = '<div>'+ this.name + '</div>'
                    }
                    if (this.vote_average != '') {
                        content[i] = '<div> Note : '+ this.vote_average + '/10</div>'
                    }
                    if (this.vote_count != '') {
                        content[i] += '<div> Nombre de vote : '+ this.vote_count + '</div>'
                    } if (this.id != '') {
                        id[i] = this.id

                    }
                    i++;

                });
            } else {


                content = '<br><br><br><div class="alert alert-danger"> Il n\'y a pas de série similaire ' + '<a href="http://127.0.0.1:8000/recommandation/">Retour aux recommandations</a></div><br>';
            }

            for (i = 0; i < content.length; i++) {

                if(image[i] == '') {

                    b--;
                }else{
                    $('.image' + b).attr("src", image[i]);

                    $('.lien' + b).attr("href", "http://127.0.0.1:8000/show/"+id[i] );


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
})