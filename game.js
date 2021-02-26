class Game{
    constructor(){

    }
    display(){

    }
    getState(){
        var gamestateref  = database.ref('gameState');
        gamestateref.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      start(){
        player=new Player(1050,300);

        player.getPlayerCount();
        form=new Form()
        form.display()
        ground=new Ground()
        
      }

      play(){
        //console.log("GAME HAS STARTED")
        form.hide()
        Player.getPlayersInfo()
        console.log(allplayers)
        

        if(allplayers!=undefined){
          background("green");
          ground.display()
          for(var i in allplayers){
            // if(player.index===1){
            //   player.body.position.x=150 
            //   player.body.position.y=350 
            //   }
            //   if(player.index===2){
              
            //     player.body.position.x=1050
            //     player.body.position.y=350 
              //}
              player.body.position.x = allplayers[i].x;
              player.body.position.y = allplayers[i].y;

              player.updateLocation();
              console.log(allplayers[i]);
              

              



              player.display()
          }
       
          
        }

        if(keyWentDown(UP_ARROW)){
          player.body.position.y-=10
          player.updateLocation();
        }


      }

}