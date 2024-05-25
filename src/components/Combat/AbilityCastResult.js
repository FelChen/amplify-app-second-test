import { removeAbilityCast } from "../../utils/abilityUtils";

const succeedStyle = {
    background: "#66ff5c"
}
const failStyle = {
    background: "#ff7b7b"
}

export default function AbilityCastResult({ abilityCast }) {


    return (
        <div>
            {abilityCast.abilityName}
            <br />
            Caster: {abilityCast.casterName}
            <br />
            Hit roll: {abilityCast.toHit}
            <br />
            <b>Targets:</b>
            {abilityCast.targetNames.map((targetName, index) =>
                <div key={index} style={abilityCast.toDodge[index] > abilityCast.toHit ? succeedStyle : failStyle}>
                    <span>{targetName}: {abilityCast.toDodge[index]}</span>
                </div>

            )}
            <br />
            Dodge rolls: {abilityCast.toDodge}
            <br />
            Damage roll: {abilityCast.damage}
            <br />
            <button onClick={() => removeAbilityCast(abilityCast)}>Delete</button>
        </div>
    )
}