import PlayerCard from "./PlayerCard";

export default function CharacterList({players}){
    // var listPlayers = players.map(player => <li key={player.id}> <p>LIST PLAYER</p>{player.name}{player.health}</li>);
    return(
        <>
        <PlayerCard/>
        <ul>{players.map(player => <li key={player.id}> <p>LIST PLAYER</p>{player.name}{player.health}</li>)}</ul>
        </>
    )


}