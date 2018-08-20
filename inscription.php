<?php
/**
 * Created by PhpStorm.
 * User: Etudiant
 * Date: 17/08/2018
 * Time: 14:24
 */

require_once __DIR__ . '/include/init.php';


$errors = [];
$username= $mdp = $prenom = $email = $nom = '';


if(!empty($_POST)) { // mon formulaire a été envoyé
    extract($_POST);

    if(empty($_POST['username'])) {
        $errors[] = 'Le username est obligatoire';
    }
    if(empty($_POST['nom'])) {
        $errors[] = 'Le nom est obligatoire';
    }
    if(empty($_POST['prenom'])) {
        $errors[] = 'Le prenom est obligatoire';
    }
    if(empty($_POST['email'])) {
        $errors[] = 'L \'email est obligatoire';
        // test de la validité de l'adresse email
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errors[] = "L'email n'est pas valide";
    }else { // test de l'unicité d l'adresse en BDD
        $query = 'SELECT count(*) FROM user WHERE email = :email';
        $stmt = $pdo->prepare($query);
        $stmt->execute([':email' => $_POST['email']]);
        $nb = $stmt->fetchColumn();

        if ($nb != 0){
            $errors[] = 'Cet email est déjà utilisé';
        }
    }
    if(empty($_POST['mdp'])) {
        $errors[] = 'Le mot de passe est obligatoire';
    } elseif (!preg_match('/^[a-zA-Z0-9_-]{6,20}$/',$_POST['mdp'])){
        $errors[] = 'Le mot de passe doit faire entre 6 et 20 caractères'
                . 'et ne contient que des chiffres, des lettres '
                . 'ou les caractères _ et -'
                ;
    }
if ($_POST['mdp'] != $_POST['mdp_confirm']){
    $errors[] = 'Le mot de passe et sa confirmation ne sont pas identiques';
    }

    if (empty($errors)){
        $query=<<<EOS
        INSERT INTO user(
        username,
        email,
        prenom,
        nom,
        mdp
        )VALUES(
        :username,
        :email,
        :prenom,
        :nom,
        :mdp
        )
EOS;
                $stmt = $pdo->prepare($query);
                $mdp = password_hash($_POST['mdp'], PASSWORD_BCRYPT);
                //var_dump($mdp);
                //var_dump(password_verify());
                $stmt->execute([
                    ':username' => $_POST['username'],
                    ':email' => $_POST['email'],
                    ':prenom' => $_POST['prenom'],
                    ':nom' => $_POST['nom'],
                    // encryptage du mot de passe à l'enregistrement
        ':mdp' => password_hash($_POST['mdp'], PASSWORD_BCRYPT)
        ]);

        setFlashMessage('Votre compte est crée');
        header('location: connexion.php');
        die;
    }
}


require __DIR__ . '/layout/top.php';
if (!empty($errors)) :
?>
<div class="alert alert-danger">
    <h5 class="alert-heading">Le formulaire contient des erreurs</h5>
    <?= implode('<br>', $errors); // transforme un tableau en chaîne de caractères ?>
</div>
<?php
endif;
?>
        <h1>Inscription</h1>

        <form method="post">
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" class="form-control"
                       value="<?= $username; ?>">
            </div>
            <div class="form-group">
                <label>Nom</label>
                <input type="text" name="nom" class="form-control"
                       value="<?= $nom; ?>">
            </div>
            <div class="form-group">
                <label>Prenom</label>
                <input type="text" name="prenom" class="form-control"
                       value="<?= $prenom; ?>">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" name="email" class="form-control"
                       value="<?= $email; ?>">
            </div>
            <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" name="mdp" class="form-control">
            </div>
            <div class="form-group">
                <label>Confirmation du mot de passe</label>
                <input type="password" name="mdp_confirm" class="form-control">
            </div>
            <div class="form-btn-group text-right">
                <button type="submit" class="btn btn-primary">
                                            Valider
                </button>
        </form>
<?php
require __DIR__ . '/layout/bottom.php';
?>
