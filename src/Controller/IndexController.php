<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/")
     */
    public function index()
    {
        return $this->render('index/index.html.twig');
    }

    /**
     * @Route("/recommandation")
     */
    public function recommandation()
    {
        return $this->render('page/recommandation.html.twig');
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


