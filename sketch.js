
var database;
var form;
var playercount;
var player;
var gamestate, game
playercount = 0
gamestate = 0
function setup() {
    database = firebase.database();
    console.log(database)
    createCanvas(500, 500);
    game = new Game();
    game.getgamestate()
    game.start()
}

function draw() {
    background("white");
    if (playercount == 4) {
        game.updategamestate(1)
    }
    if (gamestate == 1) {
        game.play()
    }
    drawSprites();
}

