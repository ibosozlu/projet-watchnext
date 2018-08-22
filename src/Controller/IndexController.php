<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{

    /**
     * @Route("/accueil")
     */
    public function index()
    {
        return $this->render('index/index.html.twig');
    }

    /**
     * @Route("/")
     */
    public function page()
    {
        return $this->render('page/page.html.twig');
    }

    /**
     * @Route("/recommandation")
     */
    public function recommandation()
    {
        return $this->render('page/recommandation.html.twig');
    }

    /**
     * @Route("/recommandation1/{name}")
     */
    public function recommandation1($name)
    {
        return $this->render('page/recommandation1.html.twig',
        [
            'name' => $name
        ]);
    }

    /**
     * @Route("/decouverte")
     */
    public function decouverte()
    {
        return $this->render('page/decouverte.html.twig');
    }



    /**
     * @Route("/similar/{id}")
     */
    public function similar($id)
    {
        return $this->render('page/similar.html.twig',
        [
            'id' => $id
        ]);
    }


}




