<?php
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"email"}, message="Il existe déjà un utilisateur avec cet email")
 */
class User implements UserInterface, \Serializable
{

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="Le nom est obligatoire")
     * @Assert\Length(max="100",
     *      maxMessage="Le nom ne doit pas faire plus de {{ limit }} caractères")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="Le prénom est obligatoire")
     * @Assert\Length(max="100",
     *      maxMessage="Le prénom ne doit pas faire plus de {{ limit }} caractères")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank(message="L'email est obligatoire")
     * @Assert\Email(message="L'email n'est pas valide")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $role = 'ROLE_USER';

    /**
     * Mot de passe en clair pour interagir avec le formulaire
     * @var string
     * @Assert\NotBlank()
     */
    private $plainPassword;

    /**
     * @var Collection
     * @ORM\OneToMany(targetEntity="App\Entity\Series", mappedBy="user")
     */
    private $series;

    /**
     * user constructor.
     * @param Collection $series
     */
    public function __construct()
    {
        $this->series = new ArrayCollection();
    }

    /**
     * @return Collection
     */
    public function getSeries(): Collection
    {
        return $this->series;
    }

    /**
     * @param Collection $series
     * @return User
     */
    public function setSeries(Collection $series): User
    {
        $this->series = $series;
        return $this;
    }

    public function containsSerie($id){
       foreach ($this->series as $series)
        {
           if ($series->getIdApi() == $id) {
               return true;
           }
        }
        return false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;
        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;
        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }
    
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): self
    {
        $this->role = $role;
        return $this;
    }

    /**
     * @return string
     */
    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    /**
     * @param string $plainPassword
     * @return User
     */
    public function setPlainPassword(?string $plainPassword): User
    {
        $this->plainPassword = $plainPassword;
        return $this;
    }

    /**
     * Transforme un objet User en chaîne de caractères normée
     *
     * @return string
     */
    public function serialize()
    {
        return serialize([
            $this->id,
            $this->lastname,
            $this->firstname,
            $this->email,
            $this->password
        ]);
    }

    /** Transforme une chaîne générée par serialize en objet User ... */
    public function unserialize($serialized)
    {
        list(
            $this->id,
            $this->lastname,
            $this->firstname,
            $this->email,
            $this->password
            ) = unserialize($serialized);
    }

    /**
     * Rôle sous forme d'un array
     *
     * @return array
     */
    public function getRoles()
    {
        return [$this->role];
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    /**
     * quel attribut va servir d'identifiant
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->email;
    }

    public function eraseCredentials()
    {
    }
    
    public function __toString()
    {
        return $this->firstname . ' ' . $this->lastname;
    }
}