// class Tic {
//   constructor(field, backgroundcolor ){
// this.field = field,
// this.backgroundcolor= backgroundcolor,
// this.pickvalue= function(){
//   this.balance += 1000 
// },

// this.describe= function(){
//   this.credit()
//   return `"owner:${this.name}, balance:${this.balance}"`
// }
//   }
// }

//   // const Sean = new Account( "Sean", 50);
// // const Brad= new Account( "Brad", 50);
// // const Georges = new Account( "Georges", 50)

// // console.log(Sean.describe());backgr



    


class play {
constructor(turn, cellresult) {
  this.turn = turn;
  this.cellresult= {
    cell1: '',
    cell2: '',
    cell3: '',
    cell4: '',
    cell5: '',
    cell6: '',
    cell7: '',
    cell8: '',
    cell9: '',
  };
  
 this.handleButtonClicked = (cell) => {
      if (document.getElementById(cell).innerText == "") {
          document.getElementById(cell).innerText = this.turn;
          this.cellresult[cell] = this.turn;
          this.checkResult();
          this.changeTurn();
        }
      };

    this.checkResult = () => {

      let condition ={
getFunction: () =>{
  let displayresult="";
  let count = 0;
let playerName = ""
 if(this.turn == 'X'){
    playerName = "player1 Wins";
      count++;
      displayresult+=`<div class="shadow h-8 w-[50%]  border border-red-200 flex justify-between" style="background-color:white;" id="Results">X-${count} <span class="ml-10"></span>O-0</div>`
   let getElement =  document.getElementById("Results");
     getElement.innerHTML=displayresult
  
  } else {
    playerName = "player2 Wins"
  count++;
      displayresult+=` <div class="shadow h-8 w-[50%]  border border-red-200 flex justify-between" style="background-color:white;" id="Results">X-0 <span class="ml-10"></span> O-${count}</div>`
   let getElement =  document.getElementById("Results");
     getElement.innerHTML=displayresult
  }
  document.getElementById("result").innerText= playerName;
  document.getElementById("game-progression").innerText= playerName;
  this.handleButtonClicked=event.preventDefault;


  

  

},



   getCondition:() =>{

 this.cellresult.cell3 &&this.cellresult.cell5&&this.cellresult.cell7
  &&this.cellresult.cell3&& this.cellresult.cell6&&this.cellresult.cell9
  &&this.cellresult.cell7&& this.cellresult.cell8&&this.cellresult.cell9
  &&this.cellresult.cell4&&this.cellresult.cell6&&this.cellresult.cell5
  &&this.cellresult.cell3&& this.cellresult.cell6&&this.cellresult.cell9
  &&this.cellresult.cell2&& this.cellresult.cell5&&this.cellresult.cell8
  &&this.cellresult.cell1&& this.cellresult.cell5&&this.cellresult.cell9
  &&this.cellresult.cell1 && this.cellresult.cell2&& this.cellresult.cell3
  &&this.cellresult.cell1 && this.cellresult.cell4&& this.cellresult.cell7
        }
      }
     
   if(this.cellresult.cell1 == this.turn && this.cellresult.cell2 == this.turn &&this.cellresult.cell3 == this.turn){
  condition.getFunction()
     
      } else if(this.cellresult.cell1 == this.turn&& this.cellresult.cell5 == this.turn&& this.cellresult.cell9 == this.turn){
        condition.getFunction()
 
    }else if(this.cellresult.cell2 == this.turn&&this.cellresult.cell5 == this.turn&&this.cellresult.cell8 == this.turn){
      condition.getFunction()

  }else if(this.cellresult.cell3 == this.turn&& this.cellresult.cell6 == this.turn&&this.cellresult.cell9 == this.turn){
    condition.getFunction()

}else if(this.cellresult.cell4 == this.turn&& this.cellresult.cell6 == this.turn&&this.cellresult.cell5 == this.turn){
  condition.getFunction()

}else if(this.cellresult.cell7 == this.turn&& this.cellresult.cell8 == this.turn&&this.cellresult.cell9 == this.turn){
  condition.getFunction()
}else if(this.cellresult.cell1 == this.turn&&this.cellresult.cell4 == this.turn&&this.cellresult.cell7 == this.turn){
  condition.getFunction()


}else if(this.cellresult.cell3 == this.turn&&this.cellresult.cell5 == this.turn&&this.cellresult == this.turn){
  condition.getFunction()



}else if(this.cellresult.cell3 == this.turn&& this.cellresult.cell6 == this.turn&&this.cellresult.cell9 == this.turn){
  condition.getFunction()

} else if(condition.getCondition()){
    if('X'||"O"){
    document.getElementById("result").innerText= "DRAW"

    }
    document.getElementById("game-progression").innerText= "Gameover"
};



this.changeTurn = () => {
  let game = ""
 if (this.turn == "X") {
  game = "player2's turn "
  document.getElementById("game-progression").innerText=game
document.getElementById("player1").style.background ="none";
document.getElementById("player2").style.background ="rgb(212, 212, 126)";
              this.turn = "O";
             } else {
              game = "player1's turn"
              document.getElementById("game-progression").innerText=game
document.getElementById("player2").style.background ="none";
        document.getElementById("player1").style.background ="rgb(212, 212, 126)";
        this.turn = "X";
 }
 if(condition.getCondition()){
    game = "Gameover"
    document.getElementById("game-progression").innerText=game
    this.turn =game
}
}
}

};
};

const player = new play("X",document.getElementById("cell"))




























