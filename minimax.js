function playAI(){
  let bestScore=-10;
  let bestMove;
  
  for(let i = 0;i<3;i++){
    for(let j = 0;j<3;j++){
      if(board[i][j] == null){
        board[i][j]=0;
        let score = minimax(0,1);
        board[i][j]=null;
        if(score>bestScore){
          bestScore=score;
          bestMove=createVector(j,i);
        }
      }
    }
  }
  board[bestMove.y][bestMove.x] = 0;
  winner = checkWinner();
  printWinner();
  usersTurn=true;
}

function minimax(depth, player){
  let result = checkWinner();
  
  if(result != null){
    if(result ==1)return -1;
    else if(result ==0)return 1;
    else return 0;
  }
  
  if(player==0){
    let bestScore=-10;
    for(let i =0;i<3;i++){
      for(let j = 0;j<3;j++){
        if(board[i][j]==null){
          
          board[i][j]=0;
          let score = minimax(depth+1,1);
          board[i][j]=null;
          
          bestScore=max(score,bestScore);
        }
      }
    }
    return bestScore;
  }else{
    let bestScore= 10;
    for(let i =0;i<3;i++){
      for(let j = 0;j<3;j++){
        if(board[i][j]==null){
          
          board[i][j]=1;
          let score = minimax(depth+1,0);
          board[i][j]=null;
          
          bestScore=min(score,bestScore);
        }
      }
    }
    return bestScore;
  }
  
}