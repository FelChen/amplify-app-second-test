import { Amplify } from 'aws-amplify';
import { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import CharacterList from "./Characters/CharacterList";
import { createPlayer, createTodo } from '../graphql/mutations';
import { onCreatePlayer, onDeletePlayer } from '../graphql/subscriptions';
import { listPlayers } from "../graphql/queries";
import config from "../amplifyconfiguration.json"

Amplify.configure(config);
const client = generateClient();

async function handleClick() {
  const result = await client.graphql({
    query: createTodo,
    variables: {
      input: {
        name: 'My first todo!'
      }
    }
  });
}

var players = await client.graphql({ query: listPlayers });
var listOfPlayers = players.data.listPlayers.items;


export default function DmPage() {

  const [inputs, setInputs] = useState({});
  const [players, setPlayers] = useState(listOfPlayers);
  useEffect(() => {
    const createPlayerSub = client
      .graphql({ query: onCreatePlayer })
      .subscribe({
        next: ({ data }) => setPlayers(prevPlayers => [...prevPlayers, data.onCreatePlayer]),
        error: (error) => console.warn(error),
      });
    const deletePlayerSub = client
      .graphql({ query: onDeletePlayer })
      .subscribe({
        next: ({ data }) => setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== data.onDeletePlayer.id)),
        error: (error) => console.warn(error),
      });
    return () => { createPlayerSub.unsubscribe(); deletePlayerSub.unsubscribe() };
  }, []);

  const handleChange = (event) => {
    // console.log("something changed");
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // setPlayers(listOfPlayers);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    await client.graphql({
      query: createPlayer,
      variables: {
        input: {
          name: inputs.name,
          health: inputs.health
        }
      }
    })
  }
  return (
    <>
      <CharacterList players={players} />
      {/* <button onClick={handleClick}>
        Click me
      </button> */}
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter name:
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </label>
          <label>Enter health:
            <input
              type="number"
              name="health"
              value={inputs.health || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>

    </>
  )

}