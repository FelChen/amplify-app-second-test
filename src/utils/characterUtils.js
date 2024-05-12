import { deleteCharacter, updateCharacter } from "../graphql/mutations";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from "../amplifyconfiguration.json"

Amplify.configure(config);
const client = generateClient();

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
export async function changeHealth(character, delta) {
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