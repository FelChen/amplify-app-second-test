import { deleteCharacter, updateCharacter } from "../graphql/mutations";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from "../amplifyconfiguration.json"

Amplify.configure(config);
const client = generateClient();
// TODO: delete modifiers prior to deleting character
export async function delChar(character) {
    await client.graphql({
        query: deleteCharacter,
        variables: {
            input: {
                id: character.id
            }
        }
    })
}
export async function updateChar(character) {
    await client.graphql({
        query: updateCharacter,
        variables: {
            input: {
                id: character.id,
                name: character.name,
                strength: character.strength,
                dexterity: character.dexterity,
                magicStrength: character.magicStrength,
                magicDexterity: character.magicDexterity,
                maxHealth: character.maxHealth,
                maxMana: character.maxMana,
                currentHealth: character.currentHealth,
                temporaryHealth: character.temporaryHealth,
                temporaryArmor: character.temporaryArmor,
                currentMana: character.currentMana,
                modifiers: character.modifiers
            }
        }
    });
}
// TODO: figure out how to deal with modifiers
// maybe add a function which gets the modified value health
// health probably shouldn't ever change
export async function changeHealth(character, delta) {
    // TODO: add error handling
    var newChar = character;
    newChar.currentHealth += parseInt(delta);
    await client.graphql({
        query: updateCharacter,
        variables: {
            input: {
                id: newChar.id,
                currentHealth: newChar.currentHealth
            }
        }
    });
}
export async function changeMana(character, delta) {
    // TODO: add error handling
    var newChar = character;
    newChar.currentMana += parseInt(delta);
    await client.graphql({
        query: updateCharacter,
        variables: {
            input: {
                id: newChar.id,
                currentMana: newChar.currentMana
            }
        }
    });
}
export async function changeArmor(character, delta) {
    // TODO: add error handling
    var newChar = character;
    newChar.temporaryArmor += parseInt(delta);
    await client.graphql({
        query: updateCharacter,
        variables: {
            input: {
                id: newChar.id,
                temporaryArmor: newChar.temporaryArmor
            }
        }
    });
}
export async function changeTemporaryHealth(character, delta) {
    // TODO: add error handling
    var newChar = character;
    newChar.temporaryHealth += parseInt(delta);
    await client.graphql({
        query: updateCharacter,
        variables: {
            input: {
                id: newChar.id,
                temporaryHealth: newChar.temporaryHealth
            }
        }
    });
}