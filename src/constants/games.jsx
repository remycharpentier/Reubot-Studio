import coverGame1 from "../assets/img/games/game1/cover.png";
import footage1Game1 from "../assets/img/games/game1/footage1.jpg";
import coverGame2 from "../assets/img/games/game2/cover.png";
import coverGame3 from "../assets/img/games/game3/cover.jpg";
import coverGame4 from "../assets/img/games/game4/cover.jpg";
import coverGame5 from "../assets/img/games/game5/cover.jpg";
import coverGame6 from "../assets/img/games/game6/cover.jpg";
import coverGame7 from "../assets/img/games/game7/cover.jpg";
import coverGame8 from "../assets/img/games/game8/cover.jpg";
const games = [
  {
    id: 1,
    title: "Fallout 4",
    img: [coverGame1, footage1Game1],
    genre: "RPG / Action",
    mode: "Solo, Multijoueur",
    support: "PC, PlayStation 4, Xbox One",
    price: 29.99,
    resume:
      "Dans Fallout 4, explorez un monde post-apocalyptique vaste et ouvert. Incarnez le Survivant de l'Abri 111 et partez à la recherche de votre fils disparu. Personnalisez votre personnage, construisez des colonies et affrontez des créatures mutantes dans un environnement riche en histoire et en choix.",
  },
  {
    id: 2,
    title: "Monster Hunter: World",
    img: [coverGame2],
    genre: "Action / RPG",
    mode: "Solo, Multijoueur",
    support: "PC, PlayStation 4, Xbox One",
    price: 39.99,
    resume:
      "Entrez dans le monde de Monster Hunter: World, où vous incarnez un chasseur qui traque des monstres gigantesques dans des environnements magnifiques. Utilisez une variété d'armes et de tactiques pour vaincre vos proies, collecter des ressources et améliorer votre équipement. Un jeu qui met l'accent sur la coopération et la stratégie.",
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    img: [coverGame3],
    genre: "RPG / Action",
    mode: "Solo",
    support: "PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
    price: 59.99,
    resume:
      "Cyberpunk 2077 vous plonge dans un monde futuriste et dystopique où vous incarnez V, un mercenaire à la recherche d'un implant unique qui promet l'immortalité. Explorez Night City, un environnement ouvert riche en détails, interagissez avec des personnages mémorables et prenez des décisions qui influenceront le cours de l'histoire. Avec un gameplay immersif et des graphismes époustouflants, préparez-vous à vivre une aventure inoubliable.",
  },
  {
    id: 4,
    title: "Baldur's Gate 3",
    img: [coverGame4],
    genre: "RPG",
    mode: "Solo, Multijoueur",
    support: "PC, PlayStation 5",
    price: 59.99,
    resume:
      "Baldur's Gate 3 vous ramène dans les Royaumes Oubliés avec une aventure épique. Créez votre personnage, formez des alliances et prenez des décisions qui influenceront le cours de l'histoire. Avec un système de combat tactique et une narration riche, plongez dans un monde fantastique rempli de mystères.",
  },
  {
    id: 5,
    title: "No Man's Sky",
    img: [coverGame5],
    genre: "Exploration / Aventure",
    mode: "Solo, Multijoueur",
    support: "PC, PlayStation 4, Xbox One",
    price: 49.99,
    resume:
      "No Man's Sky vous permet d'explorer un univers infini généré de manière procédurale. Découvrez des planètes uniques, construisez des bases, et interagissez avec d'autres joueurs. Avec des mises à jour constantes, le jeu offre une expérience d'exploration spatiale sans limites.",
  },
  {
    id: 6,
    title: "Chrono Odyssey",
    img: [coverGame6],
    genre: "Action / RPG",
    mode: "Solo, Multijoueur",
    support: "PC, PlayStation 5, Xbox Series X/S",
    price: 59.99,
    resume:
      "Chrono Odyssey vous plonge dans un monde fantastique où le temps et l'espace se mêlent. Incarnez un héros qui doit combattre des forces obscures tout en manipulant le temps pour résoudre des énigmes et vaincre des ennemis. Un gameplay dynamique et des graphismes époustouflants vous attendent.",
  },
  {
    id: 7,
    title: "League of Legends",
    img: [coverGame7],
    genre: "MOBA",
    mode: "Multijoueur",
    support: "PC",
    price: 0,
    resume:
      "League of Legends est un jeu de stratégie en temps réel où deux équipes s'affrontent pour détruire la base ennemie. Choisissez parmi des centaines de champions, développez des stratégies et travaillez en équipe pour remporter la victoire. Un jeu compétitif avec une communauté active.",
  },
  {
    id: 8,
    title: "State of Decay 2",
    img: [coverGame8],
    genre: "Survie / Action",
    mode: "Solo, Multijoueur",
    support: "PC, Xbox One",
    price: 29.99,
    resume:
      "State of Decay 2 vous place dans un monde post-apocalyptique rempli de zombies. Construisez votre communauté, gérez des ressources et prenez des décisions difficiles pour survivre. Avec un gameplay axé sur la stratégie et la coopération, chaque choix peut avoir des conséquences sur votre survie et celle de votre groupe.",
  },
];

export default games;
