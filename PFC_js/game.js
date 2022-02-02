/*The querySelector() method 
returns the first element that matches a CSS selector.
*/
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click",function() {
    //innerHTML gets what is inside the balise (const cannot change)
    const player = buttons[i].innerHTML;
    //Get a random number between 0 and 2 (in this case)
    const robot = buttons[Math.floor(Math.random() * (buttons.length))].innerHTML;
    //console.log(`Player : ${player} vs Robot : ${robot}`);
    let result = "";

    if (player === "Cheat")
        result = "Player wins but cheating is bad";
    else if (player === robot)
        result = "Draw";
    else if ((player === "Pierre" && robot === "Ciseaux")
            ||(player === "Feuille" && robot === "Pierre")
            ||(player === "Ciseaux" && robot ==="Feuille"))
                result = "Player Wins";
    else
        result = "Robot wins";

    document.querySelector(".Results").innerHTML =
        `PLAYER : ${player}</br>
         ROBOT : ${robot}</br>
         ${result}`
                      
    })
            
}