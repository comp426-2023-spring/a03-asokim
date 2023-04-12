export function rps(userMove) {
    //TODO: create function
    const moves = ['rock', 'paper', 'scissors'];
    const rand = math.floor(math.random()*moves.length);
    const compMove = moves[rand];

    if (userMove == undefined){
        return {
            player: moves[rand]
        }
    }

    if (!moves.includes(userMove.toLowerCase())){
        console.error(`${userMove} not in range.`);
        throw new RangeError();
    }

    let result = "";

    if (userMove == compMove) {
        result = "tie";
    } else if (userMove == "scissors" && compMove == "paper" ||
    userMove == "rock" && compMove == "scissors" ||
    userMove == "paper" && compMove == "rock") {
        result = "win";
    } else {
        result = "lose";
    }

    return {
        player: userMove,
        opponent: compMove,
        result: result
    };

}

export function rpsls(userMove) {
    //TODO: create function
}