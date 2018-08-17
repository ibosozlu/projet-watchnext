<?php
/**
 * Created by PhpStorm.
 * User: Etudiant
 * Date: 16/08/2018
 * Time: 14:18
 */
require "layout/bottom.php";
require "layout/top.php";
require "include/init.php";

?>
    <h1>Requête</h1>

    <!-- le tableau HTML ici -->
    <table class="table_cat th_produits table table-striped">
        <tr>
            <th>Nom</th>
            <th>Prénom</th>

        </tr>

        <tr>
            <td>
            <form id="form" method="get">
                Titre:<br>
                <input type="text" name="titre"><br>
                Date:<br>
                <input type="text" name="date"><br>
                Durée:<br>
                <input type="text" name="duree">
            <td><button type="submit" name="valider" id="valider" class="btn btn-primary">Voir détail</button></td>
            </form>
            </td>
        </tr>


    </table>

<div class="ajax">

</div>

<?php
$javascripts = 'recommandation.js';
require __DIR__ . '/layout/bottom.php';
?>
