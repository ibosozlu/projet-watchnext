$(function () { // DOM ready
    // interception de l'évènement submit du formulaire

    // Ecouteur d'événement click
    $('#form').submit(function (event) {

        // Empêche la redirection
        event.preventDefault();

        // Vérification du formulaire
        if ($('#form').find('input[name="titre"]').val() != '') {

            var values = {};
            $.each($('#form').serializeArray(), function (i, field) {
                values[field.name] = field.value;
            });
            document.location.href = 'http://127.0.0.1:8000/recommandation1/' + values.titre;
        }
    })
    $('#retour').click(function (event) {
        $('#exampleModal').classList.add("hidden")
    })
})