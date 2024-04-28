import { Amplify } from 'aws-amplify';
import { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import CharacterList from "./Characters/CharacterList";
import { createPlayer, createTodo } from '../graphql/mutations';
import { onCreatePlayer } from '../graphql/subscriptions';
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
async function createCharacter(formData) {
  console.log("heyaaaaaa");
  // await client.graphql({
  //     query: createPlayer,
  //     variables:{
  //         input:{
  //             name: formData.get('name'),
  //             health: formData.get('health')
  //         }
  //     }
  // })
}


export default function DmPage(props) {

  const [inputs, setInputs] = useState({});
  const [players, setPlayers] = useState(listOfPlayers);
  // useEffect(() => {
  //   const createPlayerSub = client
  //     .graphql({ query: onCreatePlayer })
  //     .subscribe({
  //       next: ({ data }) => setPlayers([...players,data]),
  //       error: (error) => console.warn(error),
  //     });
  //   return () => createPlayerSub.unsubscribe();
  // }, []);
  const createPlayerSub = client
  .graphql({ query: onCreatePlayer })
  .subscribe({
    next: ({ data }) => setPlayers([...players,data]),
    error: (error) => console.warn(error),
  });
  const handleChange = (event) => {
    console.log("something changed");
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // setPlayers(listOfPlayers);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
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
      <button onClick={handleClick}>
        Click me
      </button>
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