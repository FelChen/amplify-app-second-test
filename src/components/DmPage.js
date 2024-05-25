import { Amplify } from 'aws-amplify';
import { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/api';
import CharacterList from './Characters/CharacterList';
import CharacterCreator from "./Characters/CharacterCreator";
import { onCreateAbility, onCreateAbilityCast, onCreateCharacter, onDeleteAbility, onDeleteAbilityCast, onDeleteCharacter, onUpdateAbility, onUpdateCharacter } from '../graphql/subscriptions';
import { listCharacters } from "../graphql/queries";
import config from "../amplifyconfiguration.json"
import AbilityCreator from './Abilities/AbilityCreator';
import AbilityList from './Abilities/AbilityList';
import { getAbilities, getAbilityCasts, getCalculations } from '../utils/abilityUtils';
import AbilityCaster from './Abilities/AbilityCaster';
import AbilitiesCastList from './Combat/AbilitiesCastList';

Amplify.configure(config);
const client = generateClient();

const wrapper = {
  display: "flex"
}
const child = {
  flex: 1
}
var characters = await client.graphql({ query: listCharacters });

var listOfCharacters = characters.data.listCharacters.items;

var listOfAbilities = await getAbilities();
var listOfAbilityCasts = await getAbilityCasts();
// var listOfCalculations = await getCalculations();
// console.log(listOfCalculations);

export default function DmPage() {


  const [characters, setCharacters] = useState(listOfCharacters);
  const [abilities, setAbilities] = useState(listOfAbilities);
  const [abilityCasts, setAbilityCasts] = useState(listOfAbilityCasts);
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
          setCharacters(prevCharacters => prevCharacters.map(char => char.id === data.onUpdateCharacter.id ? data.onUpdateCharacter : char))
        },
        error: (error) => console.warn(error)
      })
    const createAbilitySub = client
      .graphql({ query: onCreateAbility })
      .subscribe({
        next: ({ data }) => setAbilities(prevAbilities => [...prevAbilities, data.onCreateAbility]),
        error: (error) => console.warn(error),
      })
    const updateAbilitySub = client
      .graphql({ query: onUpdateAbility })
      .subscribe({
        next: ({ data }) => setAbilities(prevAbilities => prevAbilities.map(ability => ability.id === data.onUpdateAbility.id ? data.onUpdateAbility : ability)),
        error: (error) => console.warn(error),
      })
    const deleteAbilitySub = client
      .graphql({ query: onDeleteAbility })
      .subscribe({
        next: ({ data }) => setAbilities(prevAbilities => prevAbilities.filter(ability => ability.id !== data.onDeleteAbility.id)),
        error: (error) => console.warn(error),
      })
    const createAbilityCastSub = client
      .graphql({ query: onCreateAbilityCast })
      .subscribe({
        next: ({ data }) => setAbilityCasts(prev => [...prev, data.onCreateAbilityCast]),
        error: (error) => console.warn(error),
      })
    const deleteAbilityCastSub = client
      .graphql({ query: onDeleteAbilityCast })
      .subscribe({
        next: ({ data }) => setAbilityCasts(prev => prev.filter(abilityCast => abilityCast.id !== data.onDeleteAbilityCast.id)),
        error: (error) => console.warn(error),
      })
    return () => {
      createCharacterSub.unsubscribe();
      deleteCharacterSub.unsubscribe();
      updateCharacterSub.unsubscribe();
      createAbilitySub.unsubscribe();
      updateAbilitySub.unsubscribe();
      deleteAbilitySub.unsubscribe();
      createAbilityCastSub.unsubscribe();
      deleteAbilityCastSub.unsubscribe();
    };
  }, []);


  return (
    <>
      <div style={wrapper}>
        <div style={child}>
          <CharacterList characters={characters} />
        </div>
        <div style={child}>
          <AbilityCaster abilities={abilities} characters={characters} />
          <AbilitiesCastList abilitiesCast={abilityCasts} />
        </div>
      </div>

      {/* <button onClick={handleClick}>
        Click me
      </button> */}
      <CharacterCreator />

      <AbilityList abilities={abilities} />
      <AbilityCreator />

    </>
  )

}