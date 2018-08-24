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
        return $this->render('index/accueil.html.twig');
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

    /**
     * @Route("/contact")
     */
    public function contact()
    {
        return $this->render('page/contact.html.twig');
    }

    /**
     * @Route("/apropos")
     */
    public function apropos()
    {
        return $this->render('page/apropos.html.twig');
    }

    /**
     * @Route("/waitingscreen")
     */
    public function waitingscreen()
    {
        return $this->render('page/waitingscreen.html.twig');
    }



}




