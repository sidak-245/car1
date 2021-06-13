class Form {
    constructor() {
        this.input = createInput("Enter Name")
        this.button = createButton("play");
        this.title = createElement("h1", "Multiplayer Car Racing Game")
        this.message = createElement("h2")
    }
    display() {
        this.input.position(455, 300)
        this.button.position(610, 300)
        this.title.position(380, 170)
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            this.message.html("waiting for other player to join")
            this.message.position (455,300)
            player.name = this.input.value();
            playercount = playercount + 1
            player.index = playercount
            player.playerinfo()
            player.updateplayercount(playercount)
           
        });

    }
}