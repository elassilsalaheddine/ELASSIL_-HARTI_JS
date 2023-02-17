import Sortie from "./Sortie.js";
import ObstacleAnimeClignotant from "./ObstacleAnimeClignotant.js";
import ObstacleAnime from "./ObstacleAnime.js";
import Obstacle from "./ObstacleClass.js";
import ObstacleTexture from "./ObstacleTexture.js";
import Coin from "./Coin.js";

let tabNiveaux = [];

function creerLesNiveaux(assets) {
    let sortieLevel1 = new Sortie(500, 500, 50, "yellow");

    let level1 = {
        objetsGraphiques: [
            sortieLevel1,
            new Coin(100, 100, 50, 50, assets.coin, 10),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(400, 300, 50, 50, assets.coin, 10),
            new Coin(300, 200, 50, 50, assets.coin, 10),
        ],
        temps: 60,
        sortie : sortieLevel1,
        titre : "Niveau 1",
        description: "Souffre petit padawan !",
        background: "pattern1",
        musique: "xmas"
    }
    tabNiveaux.push(level1);
    
    let sortieLevel2 = new Sortie(600, 300, 40, "orange");
    let level2 = {
        objetsGraphiques: [
            sortieLevel2,
            new ObstacleAnime(450, 0, 30, 300, 'green', 1),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(400, 300, 50, 50, assets.coin, 10),
        ],
        sortie: sortieLevel2,
        temps: 30,
        titre : "Niveau 2",
        description: "Ne te laisse pas faire !",
        background: "bgn2",
        musique: "humbug"
    }
    tabNiveaux.push(level2);
    let sortieLevel3 = new Sortie(700, 200, 60, "red");
    let level3 = {
    objetsGraphiques: [
        sortieLevel3,
        new ObstacleAnime(200, 200, 100, 100, 'green', 1),
        new ObstacleAnime(400, 100, 40, 100, 'green', 1.5),
        new Coin(100, 100, 50, 50, assets.coin, 10),
        new Coin(100, 200, 50, 50, assets.coin, 10),
        new Coin(150, 200, 50, 50, assets.coin, 10),
        new Coin(210, 200, 50, 50, assets.coin, 10),
        new Coin(260, 200, 50, 50, assets.coin, 10),
        
        new Coin(100, 300, 50, 50, assets.coin, 10),
        new Coin(500, 300, 50, 50, assets.coin, 10),
        new Coin(500, 100, 50, 50, assets.coin, 10),
        new Coin(500, 200, 50, 50, assets.coin, 10),
    ],
    sortie: sortieLevel3,
    temps: 45,
    titre: "Niveau 3",
    description: "Le niveau des champions !",
    background: "pattern1",
    musique: "xmas"
  }
  tabNiveaux.push(level3);
  let sortieLevel4 = new Sortie(750, 450, 70, "blue");
  let level4 = {
    objetsGraphiques: [
        sortieLevel4,
        new ObstacleAnime(100, 200, 50, 50, 'red',1),
        new ObstacleAnime(400, 100, 100, 100, 'green', 1.5),
        new ObstacleAnime(600, 100, 100, 100, 'green', 1.5),

        new Coin(150, 150, 50, 50, assets.coin, 10),
        new Coin(500, 300, 50, 50, assets.coin, 10),
        new Coin(700, 100, 50, 50, assets.coin, 10),
    ],
    sortie: sortieLevel4,
    temps: 90,
    titre: "Niveau 4",
    description: "Plus dur que le niveau 3!",
    background: "bgn2",
    musique: "xmas"
}
tabNiveaux.push(level4);
let sortieLevel5 = new Sortie(600, 150, 30, "purple");
let level5 = {
    objetsGraphiques: [
        sortieLevel5,
        new Obstacle(200, 100, 50, 50, 'red'),
        new Obstacle(100, 100, 50, 50, 'red'),
        new ObstacleAnimeClignotant(400, 350, 60, 60, 'green', 5),
        new ObstacleAnimeClignotant(300, 350, 60, 60, 'yellow', 7),
        new Coin(150, 150, 50, 50, assets.coin, 10),
        new Coin(450, 100, 50, 50, assets.coin, 10),
        new Coin(150, 300, 50, 50, assets.coin, 10),
        new Coin(450, 300, 50, 50, assets.coin, 10),
        new Coin(500, 300, 50, 50, assets.coin, 10),
        new Coin(500, 300, 50, 50, assets.coin, 10),
    ],
    sortie: sortieLevel5,
    temps: 120,
    titre: "Niveau 5",
    description: "Le niveau final! Bonne chance!",
    background: "pattern1",
    musique: "xmas"
}
tabNiveaux.push(level5);
let sortieLevel6 = new Sortie(600, 150, 30, "purple");
let level6 = {
    objetsGraphiques: [
        sortieLevel6,
        new Obstacle(200, 100, 50, 50, 'red'),
        new Obstacle(300, 200, 50, 50, 'red'),
        new Obstacle(400, 100, 50, 50, 'red'),

        new Obstacle(100, 100, 50, 50, 'red'),
        new ObstacleAnimeClignotant(400, 350, 60, 60, 'green', 3),
        new ObstacleAnimeClignotant(150, 350, 60, 60, 'green', 5),
        new ObstacleAnimeClignotant(250, 350, 60, 60, 'green', 7),
        new ObstacleAnimeClignotant(300, 350, 60, 60, 'yellow', 10),
        new Coin(150, 150, 50, 50, assets.coin, 10),
        new Coin(450, 100, 50, 50, assets.coin, 10),
        new Coin(150, 300, 50, 50, assets.coin, 10),
        new Coin(450, 300, 50, 50, assets.coin, 10),
        new Coin(500, 300, 50, 50, assets.coin, 10),
        new Coin(500, 300, 50, 50, assets.coin, 10),
        new Coin(100, 300, 50, 50, assets.coin, 10),
        new Coin(200, 300, 50, 50, assets.coin, 10),
    ],
    sortie: sortieLevel5,
    temps: 120,
    titre: "Niveau 6",
    description: "Le niveau final! Bonne chance!",
    background: "bgn3",
    musique: "xmas"
}
tabNiveaux.push(level6);
}


export { creerLesNiveaux, tabNiveaux }