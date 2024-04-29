import PlayerCard from "./PlayerCard";
import { deletePlayer } from "../../graphql/mutations";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from "../../amplifyconfiguration.json"

export default function CharacterList({ players }) {
    // var listPlayers = players.map(player => <li key={player.id}> <p>LIST PLAYER</p>{player.name}{player.health}</li>);
    Amplify.configure(config);
    const client = generateClient();
    async function delPlayer(player) {
        // console.log(player);
        await client.graphql({
            query: deletePlayer,
            variables: {
                input: {
                    id: player.id
                }
            }
        })
    }
    // console.log("PLAYERS");
    // console.log(players);
    return (
        <div key={players}>

            <PlayerCard />
            <ul>{players.map((player) =>
                    
                    <li key={player.id}> 
                    {/* {console.log("player")}
                    {console.log(player)}
                    {console.log("ddd")} */}
                    <p><b>Name: </b>{player.name} </p>
                    <p><b>Health: </b>{player.health}</p>
                    <button onClick={() => delPlayer(player)}>Delete</button>
                    </li>
            )}

            </ul>
        </div>
    )


}