import { deleteCharacter, updateCharacter } from "../../graphql/mutations";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import ResourceBar from "./ResourceBar";
import { RESOURCE_TYPES } from "../../enum/enums";
import config from "../../amplifyconfiguration.json"
import { useState } from "react";
import { Stack } from "react-bootstrap";

const characterCardStyle = {
    background: 'hsl(0, 75%, 85%)',
    width: '250px'
}

Amplify.configure(config);
const client = generateClient();
async function delCharacter(character) {
    await client.graphql({
        query: deleteCharacter,
        variables: {
            input: {
                id: character.id
            }
        }
    })
}

export default function CharacterCard({ character }) {
    const [editMode, setEditMode] = useState(false);
    const [editCharacter, setEditCharacter] = useState(character);
    function toggleEditMode() {
        setEditMode(!editMode);
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEditCharacter(values => ({ ...values, [name]: value }))
    }
    const updateChar = async (event) =>{
        event.preventDefault();
        await client.graphql({
            query: updateCharacter,
            variables: {
                input: {
                    id: editCharacter.id,
                    name: editCharacter.name,
                    strength: editCharacter.strength,
                    dexterity: editCharacter.dexterity,
                    magicStrength: editCharacter.magicStrength,
                    magicDexterity: editCharacter.magicDexterity,
                    maxHealth: editCharacter.maxHealth,
                    maxMana: editCharacter.maxMana,
                }
            }
        })
    }
    return (
        <div style={characterCardStyle}>
            {!editMode ? <div>
                <h1>{character.name}</h1>
                <Stack gap={4}>
                    <ResourceBar currentNum={character.currentHealth} maxNum={character.maxHealth} type={RESOURCE_TYPES.Health} />
                    {character.temporaryHealth > 0 ?
                        <ResourceBar currentNum={character.temporaryHealth} type={RESOURCE_TYPES.TemporaryHealth} /> : null}
                    {character.temporaryArmor > 0 ?
                        <ResourceBar currentNum={character.temporaryArmor} type={RESOURCE_TYPES.Armor} /> : null}
                    <ResourceBar currentNum={character.currentMana} maxNum={character.maxMana} type={RESOURCE_TYPES.Mana} />
                </Stack>
                <hr></hr>
                Strength: {character.strength}
                <br />
                Dexterity: {character.dexterity}
                <br />
                Magic Strength: {character.magicStrength}
                <br />
                Magic Dexterity: {character.magicDexterity}
                <br />
                <button onClick={toggleEditMode}>Edit Stats</button>
                <button onClick={() => delCharacter(character)}>Delete</button>
            </div>
                : <div>
                    <p>editing</p>
                    <form onSubmit={updateChar}>
                        <div>
                            <label>Enter name:
                                <input
                                    type="text"
                                    name="name"
                                    value={editCharacter.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Enter health:
                                <input
                                    type="number"
                                    name="maxHealth"
                                    value={editCharacter.maxHealth}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Enter mana:
                                <input
                                    type="number"
                                    name="maxMana"
                                    value={editCharacter.maxMana}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Enter Strength:
                                <input
                                    type="number"
                                    name="strength"
                                    value={editCharacter.strength}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Enter Dexterity:
                                <input
                                    type="number"
                                    name="dexterity"
                                    value={editCharacter.dexterity}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Enter Magic Strength:
                                <input
                                    type="number"
                                    name="magicStrength"
                                    value={editCharacter.magicStrength}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Enter Magic Dexterity:
                                <input
                                    type="number"
                                    name="magicDexterity"
                                    value={editCharacter.magicDexterity}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <input type="submit" />
                    </form>
                    <button onClick={toggleEditMode}>Cancel</button>
                    <button onClick={() => delCharacter(character)}>Delete</button>
                </div>
            }

        </div>
    )

}