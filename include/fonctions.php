<?php
/**
 * Created by PhpStorm.
 * User: Etudiant
 * Date: 16/08/2018
 * Time: 14:09
 */


// ajout du message (erreur/succès/warnig/...).
function setFlashMessage($message, $type = 'success'){
    $_SESSION['flashMessage'] = [
        'message' => $message,
        'type' => $type
    ];
}

//affichage d'un message si il y en a un
function displayFlashMessage(){
    if(isset($_SESSION['flashMessage'])){
        $message = $_SESSION['flashMessage']['message'];
        $type = ($_SESSION['flashMessage']['type'] == 'error')
            ? 'danger'
            : $_SESSION['flashMessage']['type'];

        // On affiche le message.
        echo '<div class="alert alert-' . $type . '">' . ' <h5 class="alert-heading">'. $message . '</h5></div>';

        // On suprime le message de la session.
        unset($_SESSION['flashMessage']);
    }
}