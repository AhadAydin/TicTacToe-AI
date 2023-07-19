let tileSize=180;

let textRectSize=120;
let board=[];
let usersTurn=true;

let winner;

function setup() {
  createCanvas(tileSize*3, tileSize*3+ textRectSize);
  
    
  for(let i =0;i<3;i++){
    board[i] = [];
    for(let j =0;j<3;j++){
      board[i][j] = null;
    }
  }
  
}

function draw() {
  background(28);

  //draw tile

  
  for(let i =0;i<3;i++){
    for(let j = 0;j<3;j++){
        rectMode(CENTER);
        fill(40);
        stroke(255);
        strokeWeight(4);
        textSize(40);
            
        rect(j*tileSize + tileSize/2,i*tileSize+tileSize/2,
           tileSize-20,tileSize-20,tileSize/10);
      drawPlayer(j*tileSize + tileSize/2,i*tileSize+tileSize/2,board[i][j]);
    }
  }
  
  // AI plays
  if(!usersTurn && winner==null){
    playAI();
  }

  rectMode(CORNER);
  textStyle(BOLD);
  strokeWeight(6);
  fill(28);
  rect(10,tileSize*3,width-20,textRectSize-10,20);
  noStroke();
  textSize(36);
  fill(255,100,220);
  text('Tic',width-84,tileSize*3+textRectSize/3-5);
  fill(100,100,255);
  text('Tac',width-84,tileSize*3+textRectSize*2/3-11);
  fill(100,255,100);
  text('Toe',width-84,tileSize*3+textRectSize-17);
  drawWinner();
}

function drawPlayer(posX,posY,value){
  stroke(255);

  if(value==1){  
    fill(255,100,220);
      strokeWeight(6);
    rect(posX,posY,tileSize-20,tileSize-20,tileSize/10);
      strokeWeight(8);
    line(posX-40,posY-40,posX+40,posY+40);
    line(posX-40,posY+40,posX+40,posY-40);
  }
  else if(value==0){   
    fill(100,100,255);
      strokeWeight(6);
    rect(posX,posY,tileSize-20,tileSize-20,tileSize/10);
      strokeWeight(8);
      noFill();
    circle(posX,posY,80);
  }
}

function mousePressed(){
  
  let tileX = floor(mouseX/tileSize);
  let tileY = floor(mouseY/tileSize);

  if(usersTurn && winner==null&& mouseX<tileSize*3&&mouseY<tileSize*3){
    if(board[tileY][tileX]==null){
      board[tileY][tileX]=1;
      usersTurn=false;
      winner = checkWinner();
      printWinner();
      
    }
  }
  print("anneni yedim");
}

function checkWinner(){
  // horizontal check
  for(let i =0;i<3;i++){

      if(board[i][0]==board[i][1]&&board[i][0]==board[i][2]){
        return board[i][0];

    }
  }
  // vertical check
  for(let i =0;i<3;i++){
      if(board[0][i]==board[1][i]&&board[0][i]==board[2][i]){
        return board[0][i];
      }
  }
  // diagonal check
      if((board[0][0]==board[1][1]&&board[0][0]==board[2][2])||
        (board[0][2]==board[1][1]&&board[0][2]==board[2][0])){
        return board[1][1];

  }
  
  let full=true;
  
  for(let i =0;i<3;i++){
    for(let j = 0;j<3;j++){
      if(board[i][j]==null){
        // game not finished
        full=false;
      }
    }
  }
  
  if(!full){
    return null;
  }else{
    return -1;
  }
}

function printWinner(){
  
  if(winner==1){
    print("you win...");
  }else if(winner==0){
    print("comp win...");
  }else if(winner==-1){
    print("tie...");
  }
  
}
function drawWinner(){
  textStyle(BOLD);
  textSize(60);
  noStroke();
  fill(0)
  
  if(winner==1){
      fill(255,100,220);
    text('You win...',20,tileSize*3+textRectSize*2/3);
  }else if(winner==0){
      fill(100,100,255);
    text('Comp win...',20,tileSize*3+textRectSize*2/3);
  }else if(winner==-1){
      fill(100,255,100);
    text('Tie...',20,tileSize*3+textRectSize*2/3);
  }
}
      
      
      
      
      
      