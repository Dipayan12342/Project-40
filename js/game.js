class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    
  
      bike1 = createSprite(100,200);  
      bike1.addImage(bike1Img);  
      bike1.scale=0.5;
      bike2 = createSprite(300,200);
      bike2.addImage(bike2Img);  
      bike2.scale=0.5;
      bike3 = createSprite(500,200);
      bike3.addImage(bike3Img);  
      bike3.scale=0.5;
      bike4 = createSprite(700,200);
      bike4.addImage(bike4Img);  
      bike4.scale=0.5;
      bikes = [bike1, bike2, bike3, bike4];
    }
  
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
  
      if(allPlayers !==undefined){
        background(rgb(198,135,103));
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
      }
    
        var index=0;
        var x=175;
        var y;

        for(var plr in allPlayers){
          index=index+1;
          x=x+200;
          y=displayHeight-allPlayers[plr].distance;
          bikes[index-1].x=x;
          bikes[index-1].y=y;
        
      
        if (index === player.index){
          fill('red')
          ellipse(x,y,60,60);
          bikes[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = bikes[index-1].y;
        }
      }
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
        
      
          if(player.distance > 3860){
            gameState = 2;
          }
        
         
          drawSprites();
    }
      
        end(){
          console.log("Race Ended");
        }
        }
      


          

    