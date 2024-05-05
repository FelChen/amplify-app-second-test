import { Amplify } from 'aws-amplify';
import { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import CharacterList from './Characters/CharacterList';
import CharacterCreator from "./Characters/CharacterCreator";
import { onCreateCharacter, onDeleteCharacter, onUpdateCharacter } from '../graphql/subscriptions';
import { listCharacters } from "../graphql/queries";
import config from "../amplifyconfiguration.json"

Amplify.configure(config);
const client = generateClient();


var characters = await client.graphql({ query: listCharacters });

var listOfCharacters = characters.data.listCharacters.items;

export default function DmPage() {


  const [characters, setCharacters] = useState(listOfCharacters);//
  useEffect(() => {
    const createCharacterSub = client
      .graphql({ query: onCreateCharacter })
      .subscribe({
        next: ({ data }) => setCharacters(prevCharacters => [...prevCharacters, data.onCreateCharacter]),
        error: (error) => console.warn(error),
      });
    const deleteCharacterSub = client
      .graphql({ query: onDeleteCharacter })
      .subscribe({
        next: ({ data }) => setCharacters(prevCharacters => prevCharacters.filter(character => character.id !== data.onDeleteCharacter.id)),
        error: (error) => console.warn(error),
      });
    const updateCharacterSub = client
      .graphql({ query: onUpdateCharacter })
      .subscribe({
        next: ({ data }) => {
          console.log(data);
          setCharacters(prevCharacters => prevCharacters.map(char => char.id === data.onUpdateCharacter.id ? data.onUpdateCharacter : char))},
        error: (error) => console.warn(error)
      })
    return () => { createCharacterSub.unsubscribe(); deleteCharacterSub.unsubscribe(); updateCharacterSub.unsubscribe() };
  }, []);


  return (
    <>
      <CharacterList characters={characters} />
      {/* <button onClick={handleClick}>
        Click me
      </button> */}
      <CharacterCreator />

    </>
  )

}