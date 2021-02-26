class Form{
constructor(){
this.title=createElement("h1")
this.input=createInput("Enter your name")
this.button=createButton("play")
this.greet=createElement("h1")
this.reset=createButton("reset")
}
hide(){
    this.greet.hide()
}

display(){
    this.title.html("HEAD FOOTBALL!!")
    this.title.position(600,50)
    this.reset.position(1100,100)

    this.input.position(600,200)
    this.button.position(600,300)

    this.button.mousePressed(()=>{
        playerCount=playerCount+1
        player.index=playerCount
        player.updatePlayerCount(playerCount)
        this.input.hide()
    this.button.hide()
    this.title.hide()
    player.name = this.input.value();
    player.update()
    this.greet.position(600,200)
    this.greet.html("Wait for the other person to join or invite a friend")
    
    })
    this.reset.mousePressed(()=>{
player.updatePlayerCount(0)
game.update(0)
    })

}


}