$(function () { // DOM ready

    // Vérification du format de la série

    var api = "https://api.themoviedb.org/3/search/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&query=" + name;
    var api2 = "https://api.themoviedb.org/3/search/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&query=" + name;
    var api3 = "https://api.themoviedb.org/3/search/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&query=" + name;
    var api4 = "https://api.themoviedb.org/3/search/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&query=" + name;
    var api5 = "https://api.themoviedb.org/3/search/tv?api_key=6f077ac27b8512d9188198b9d2e07cad&query=" + name;

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
            var content = '';
            var image = '';
            var title = '';
            var i= 0;
            var b=1;
            var id= '';


            if (response.results != '') {
              

                    if (this.poster_path != null) {
                        image = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                    }
                    else{
                        image = ''
                    }
                    if (this.name != '') {
                        title = '<div>'+ this.name + '</div>'
                    }
                    if (this.vote_average != '') {
                        content = '<div> Note : '+ this.vote_average + '/10</div>'
                    }
                    if (this.id != '') {
                        id = this.id

                    }
                    
            } 

                    $('.image').attr("src", image);

                    $('.lien').attr("href", "http://127.0.0.1:8000/show/"+id );


                    $('.card').html('').prepend(
                        content
                    );

                    $('.title').html('').prepend(
                        title
                    );

        });
    
    var settings2 = {
        "async": true,
        "crossDomain": true,
        "url": api2,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings2).done(function (response) {
        console.log(response);


        // Remplir la variable content avant de l'inclure dans la div AJAX
        var content = '';
        var image = '';
        var title = '';
        var i= 0;
        var b=1;
        var id= '';


        if (response.results != '') {
          
                if (this.poster_path != null) {
                    image = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                }
                else{
                    image = ''
                }
                if (this.name != '') {
                    title = '<div>'+ this.name + '</div>'
                }
                if (this.vote_average != '') {
                    content = '<div> Note : '+ this.vote_average + '/10</div>'
                }
                if (this.id != '') {
                    id = this.id

                }
 
        } 

                $('.image2').attr("src", image);

                $('.lien2').attr("href", "http://127.0.0.1:8000/show/"+id );


                $('.card2').html('').prepend(
                    content
                );

                $('.title2').html('').prepend(
                    title
                );

            });

    var settings3 = {
        "async": true,
        "crossDomain": true,
        "url": api2,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings3).done(function (response) {
        console.log(response);

        // Remplir la variable content avant de l'inclure dans la div AJAX
        var content = '';
        var image = '';
        var title = '';
        var i= 0;
        var b=1;
        var id= '';

        if (response.results != '') {
          

                if (this.poster_path != null) {
                    image = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                }
                else{
                    image = ''
                }
                if (this.name != '') {
                    title = '<div>'+ this.name + '</div>'
                }
                if (this.vote_average != '') {
                    content = '<div> Note : '+ this.vote_average + '/10</div>'
                }
                if (this.id != '') {
                    id = this.id

                }

        } 
   
                $('.image3').attr("src", image);

                $('.lien3').attr("href", "http://127.0.0.1:8000/show/"+id );


                $('.card3').html('').prepend(
                    content
                );

                $('.title3').html('').prepend(
                    title
                );

            
    });

    var settings4 = {
        "async": true,
        "crossDomain": true,
        "url": api2,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings4).done(function (response) {
        console.log(response);

        // Remplir la variable content avant de l'inclure dans la div AJAX
        var content = '';
        var image = '';
        var title = '';
        var i= 0;
        var b=1;
        var id= '';

        if (response.results != '') {

                if (this.poster_path != null) {
                    image = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                }
                else{
                    image = ''
                }
                if (this.name != '') {
                    title = '<div>'+ this.name + '</div>'
                }
                if (this.vote_average != '') {
                    content = '<div> Note : '+ this.vote_average + '/10</div>'
                }
                if (this.id != '') {
                    id = this.id

                }

        } 

                $('.image4').attr("src", image);

                $('.lien4').attr("href", "http://127.0.0.1:8000/show/"+id );


                $('.card4').html('').prepend(
                    content
                );

                $('.title4').html('').prepend(
                    title
                );

            });

    var settings5 = {
        "async": true,
        "crossDomain": true,
        "url": api2,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings5).done(function (response) {
        console.log(response);


        // Remplir la variable content avant de l'inclure dans la div AJAX
        var content = '';
        var image = '';
        var title = '';
        var i= 0;
        var b=1;
        var id= '';

        if (response.results != '') {


                if (this.poster_path != null) {
                    image = 'https://image.tmdb.org/t/p/w300' + this.poster_path;
                }
                else{
                    image = ''
                }
                if (this.name != '') {
                    title = '<div>'+ this.name + '</div>'
                }
                if (this.vote_average != '') {
                    content = '<div> Note : '+ this.vote_average + '/10</div>'
                }
                if (this.id != '') {
                    id = this.id

                }
           
        } 
            
                $('.image5').attr("src", image);

                $('.lien5').attr("href", "http://127.0.0.1:8000/show/"+id );


                $('.card5').html('').prepend(
                    content
                );

                $('.title5').html('').prepend(
                    title
                );

    }
);

})