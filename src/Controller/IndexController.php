<?php
namespace App\Controller;
use App\Entity\Series;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class IndexController extends AbstractController
{
    /**
     * @Route("/accueil")
     */
    public function index()
    {
        $test = $this->getDoctrine()->getRepository('App:Series')->findBy(['user' => $this->getUser()], ['id' => 'DESC'],5);

        dump($test);

        return $this->render('index/accueil.html.twig',
        [
            'test' => $test
        ]);
    }



    /**
     * @Route("/")
     */
    public function page()
    {
        return $this->render('page/page.html.twig');
    }

    /**
     * @Route("/recommandation/{name}")
     */
    public function recommandation($name)
    {
        return $this->render('page/recommandation.html.twig',
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
     * @param $id
     * @Route("/show/{id}")
     */
    public function show($id)
    {
            if(!empty($_POST))
            {
                    $entityManager = $this->getDoctrine()->getManager();
                    $series = new Series();
                    $series->setIdApi($id);
                    $series->setUser($this->getUser());

                    $entityManager->persist($series);
                    $entityManager->flush();
                    return $this->redirectToRoute('app_index_show', ['id' => $id]);
            }


        return $this->render('page/show.html.twig',
            [
                'id' => $id,
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
