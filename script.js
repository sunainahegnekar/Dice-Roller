function rolldice(){

    const numOfDice = document.getElementById("numOfDice").value ;
    const result = document.getElementById("result") ;
    const images = document.getElementById("images") ;
    const values = [];
    const dice =[];


for(let i=0 ; i < numOfDice ;i++){
    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    dice.push(`<img src = "img/${value}.png">`)
}

result.textContent = `dice: ${values.join(",")}`;
images.innerHTML = dice.join('');

}
