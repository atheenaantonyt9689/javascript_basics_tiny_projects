
let sum = 0
let card =[] 
let has_blackJack = false
let isAlive = false
let player ={
    playerName:"Atheena ",
    playerChips:" 145"
}
var message = document.getElementById('messageEl');
var sumVar = document.getElementById('sumCards');
var cards = document.getElementById('cardsEl');
var playerEl = document.getElementById('player-El');
playerEl.textContent = player.playerName +"  $ "+player.playerChips
function getRandom() {
   randomNum = Math.floor(Math.random()*13)+1
   if (randomNum>10){
       return 10

   }else if(randomNum===1){
       return 11
   }else{
       return randomNum
   } 


    return randomNum
  }
  
  

function startGame(){
    isAlive = true  
    let first_card = getRandom()
    console.log("first_card   ",first_card )
    let second_card = getRandom()
    console.log(" second_card  ", second_card);
    card =[first_card,second_card]
    sum = first_card +second_card    
    
    renderGame()
}

function renderGame(){
    cards.textContent ="CARDS "

    for (i=0;i<card.length;i+=1){

        cards.textContent +=" "+card[i]+" , ";
        }
    
    if (sum <= 20){
       
        message.textContent = " do you want draw a new card ?😊 ";

        sumVar.textContent ="SUM : "+ sum ;
        
        
    }else if(sum ===21){
        
        let has_blackJack = true
        message.textContent = " you have got black jack 🥳!!!"
        sumVar.textContent = "SUM : "+sum;
        
    }
    else{
        
        isAlive = false
        message.textContent = "you are out of the game ..😔"
        sumVar.textContent ="SUM : "+ sum;        
        
    }
    console.log(message);

    }
    
function addNewcards(){
    if( isAlive===true && has_blackJack===false ){
                
        console.log("new card addedd");
            let newCard = getRandom()
            card.push(newCard)    
        
            sum = sum + newCard
            console.log("sum ",sum);
        renderGame()
         }
}




let person={
    name:"Atheee",
    age:22,
    country:"Indian",
    logData:function logg(){
        console.log("Atheeenaaaa ...Take risk..u will Win!!!");
    }

}
person.logData()

