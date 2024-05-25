import { useEffect, useState } from "react";
import { castAbility } from "../../utils/abilityUtils";

const abilityCastStyle = {
    background: '#a4f7ff'
}

export default function AbilityCaster({ abilities, characters }) {
    const [basicInputs, setBasicInputs] = useState({
        casterId: "",
        abilityId: ""
    })
    const [targetIds, setTargetIds] = useState([]);
    useEffect(() => {
        if (characters.length > 0) {
            setBasicInputs(values => ({ ...values, casterId: characters[0].id }))
        }
        if (abilities.length > 0) {
            setBasicInputs(values => ({ ...values, abilityId: abilities[0].id }))
        }

    }, [])
    const handleChange = async (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBasicInputs(values => ({ ...values, [name]: value }))
        // console.log(basicInputs);
    }
    const handleTargetChange = async (event) => {
        const newSelectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setTargetIds(newSelectedValues);
    }
    const submitAbility = async (event) => {
        event.preventDefault();
        // console.log("AbilityCaster");
        // console.log(basicInputs);
        // console.log(targetIds);

        castAbility(
            abilities.find(ability => ability.id === basicInputs.abilityId),
            characters.find(char => char.id === basicInputs.casterId),
            characters.filter(char => targetIds.includes(char.id))
        );
        // console.log(abilities)
        // console.log(characters)
    }

    return (
        <div style={abilityCastStyle}>
            Cast an ability
            <form onSubmit={submitAbility}>
                <div>
                    <label>Caster:
                        <select name="casterId" onChange={handleChange} >
                            {characters.map((character) =>
                                <option key={character.id} value={character.id} >{character.name}</option>
                            )}
                        </select>
                    </label>
                </div>
                <div>
                    <label>Ability:
                        <select name="abilityId" onChange={handleChange} >
                            {abilities.map((ability) =>
                                <option key={ability.id} value={ability.id} >{ability.name}</option>
                            )}
                        </select>
                    </label>
                </div>
                <div>
                    <label>Targets:
                        <select name="targets" onChange={handleTargetChange} multiple>
                            {characters.map((character) =>
                                <option key={character.id} value={character.id} >{character.name}</option>
                            )}
                        </select>
                    </label>
                </div>
                <input type="submit" />
            </form>

        </div>
    )
}