class Game {
    constructor() {

    }
    start() {
        if (gamestate == 0) {
            player = new Player()
           
        }
        form = new Form ()
        form.display()

    }
    play() {

    }
    end() {

    }
    getgamestate() {
        var getgamestateref = database.ref("gameState")
        getgamestateref.on("value", data => {
            gamestate = data.val()
        })
    }


    updategamestate(state) {
        var updategamestateref = database.ref("/")
        updategamestateref.update({
            "gameState": state
        })
    }


}

