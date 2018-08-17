<?php
/**
 * Created by PhpStorm.
 * User: Etudiant
 * Date: 16/08/2018
 * Time: 14:08
 */


$pdo = new PDO(
    'mysql:host=localhost;dbname=watchnext', // chaîne de connexion
    'root', // utilisateur
    '', // mot de passe
    // tableau d'options
    [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
);
?>