export function rps(userMove) {
    //TODO: create function
    const moves = ['rock', 'paper', 'scissors'];
    const rand = math.floor(math.random()*moves.length);
    const compMove = moves[rand]

    if (move == undefined){
        return {
            player: moves[rand]
        }
    }

    if (!moves.includes(userMove.toLowerCase())){
        console.error(`${userMove} not in range.`);
        throw new RangeError();
    }

}

export function rpsls(userMove) {
    //TODO: create function
}