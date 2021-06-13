class Player {
  constructor() {
    this.name = null;
    this.distance = 0
    this.rank = null;
    this.index = null;

  }
  getplayercount() {
    var playercountref = database.ref("playerCount")
    playercountref.on("value", data => {
      playerCount = data.val()
    })
  }
  updateplayercount(count) {
    var countref = database.ref("/")
    countref.update({
      "playerCount": count
    })
  }
playerinfo(){
  var playerref = "players/player"+ this.index
  database.ref(playerref).set({
    name:this.name,
    distance:this.distance
  })
}
}
