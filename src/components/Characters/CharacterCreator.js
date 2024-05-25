import { Amplify } from 'aws-amplify';
import { useState } from "react";
import { generateClient } from 'aws-amplify/api';
import { createCharacter } from '../../graphql/mutations';
import config from "../../amplifyconfiguration.json"

const creatorStyle = {
  background: 'aliceblue'
}
Amplify.configure(config);
const client = generateClient();

export default function CharacterCreator() {
  const [inputs, setInputs] = useState({
    name: "",
    strength: 0,
    dexterity: 0,
    magicStrength: 0,
    magicDexterity: 0,
    health: 0,
    temporaryHealth: 0,
    temporaryArmor: 0,
    mana: 0,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);

    await client.graphql({
      query: createCharacter,
      variables: {
        input: {
          name: inputs.name ?? "DEFAULT",
          strength: inputs.strength ?? 0,
          dexterity: inputs.dexterity ?? 0,
          magicStrength: inputs.magicStrength ?? 0,
          magicDexterity: inputs.magicDexterity ?? 0,
          maxHealth: inputs.health ?? 0,
          currentHealth: inputs.health ?? 0,
          temporaryHealth: 0,
          temporaryArmor: 0,
          maxMana: inputs.mana ?? 0,
          currentMana: inputs.mana ?? 0,
          testing: [2,6]
        }
      }
    })
  }
  return (
    <div style={creatorStyle}>
      <h1>Character Creator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter name:
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Enter Strength:
            <input
              type="number"
              name="strength"
              value={inputs.strength}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Enter Dexterity:
            <input
              type="number"
              name="dexterity"
              value={inputs.dexterity}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Enter Magic Strength:
            <input
              type="number"
              name="magicStrength"
              value={inputs.magicStrength}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Enter Magic Dexterity:
            <input
              type="number"
              name="magicDexterity"
              value={inputs.magicDexterity}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Enter health:
            <input
              type="number"
              name="health"
              value={inputs.health}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>Enter mana:
            <input
              type="number"
              name="mana"
              value={inputs.mana}
              onChange={handleChange}
            />
          </label>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}