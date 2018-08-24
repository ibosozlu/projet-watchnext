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

    /**
     * @param $id
     * @Route("/show/{id}")
     */
    public function show($id)
    {
        return $this->render('page/show.html.twig',
            [
                'id' => $id
            ]);
    }
}




