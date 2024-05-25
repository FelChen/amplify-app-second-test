import { useEffect, useState } from "react";
import { newAbility, newCalculation, removeAbility, retrieveCalculation } from "../../utils/abilityUtils";
import { DISTRIBUTION_TYPES, STAT_TYPES } from "../../enum/enums";

const hitCalculationStyle = {
    background: '#ffbbfa'
}
const dodgeCalculationStyle = {
    background: '#a6f3ff'
}
const damageCalculationStyle = {
    background: '#ffc0c0'
}
const calculationStyle = {
    background: '#a4f7ff'
}


export default function AbilityCard({ ability }) {
    useEffect(() => {
        retrieveCalculation(ability.toHitId).then(result => setToHit(result));
        retrieveCalculation(ability.toDodgeId).then(result => setToDodge(result));
        retrieveCalculation(ability.damageId).then(result => setDamage(result));
    }, []);
    const [editMode, setEditMode] = useState(false);
    const [localAbility, setAbility] = useState({
        id: ability.id,
        name: "",
        description: "",
        cost: 0,
        costType: STAT_TYPES.MANA,
        modifiers: []
    });
    const [toHit, setToHit] = useState({
        id: "",
        distributionType: DISTRIBUTION_TYPES.NORMAL,
        mean: "",
        standardDeviation: ""
    })
    const [toDodge, setToDodge] = useState({
        distributionType: DISTRIBUTION_TYPES.NORMAL,
        id: "",
        mean: "",
        standardDeviation: ""
    })
    const [damage, setDamage] = useState({
        id: "",
        distributionType: DISTRIBUTION_TYPES.NORMAL,
        mean: "",
        standardDeviation: ""
    })

    // setToHit();

    function toggleEditMode() {
        setEditMode(!editMode);
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAbility(values => ({ ...values, [name]: value }))
    }
    const handleToHitChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setToHit(values => ({ ...values, [name]: value }))
    }
    const handleToDodgeChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setToDodge(values => ({ ...values, [name]: value }))
    }
    const handleDamageChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDamage(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Do some sort of validation here
        var toHitId;
        var toDodgeId;
        var damageId;
        var modifiers = [];
        await newCalculation(toHit).then(result => toHitId = result.data.createCalculation.id);
        await newCalculation(toDodge).then(result => toDodgeId = result.data.createCalculation.id);
        await newCalculation(damage).then(result => damageId = result.data.createCalculation.id);
        await newAbility(ability, toHitId, toDodgeId, damageId, modifiers);
    }

    return (
        <div>

            {!editMode ? <div>
                <h1>{ability.name}</h1>
                Description: {ability.description}
                <br />
                Cost: {ability.cost} {ability.costType}
                <br />
                <h3>To Hit</h3>
                Distribution Type: {toHit.distributionType}
                <br />
                Mean: <span style={calculationStyle}>{toHit.mean}</span> Standard Deviation: <span style={calculationStyle}>{toHit.standardDeviation}</span>
                <br />
                <h3>To Dodge</h3>
                Distribution Type: {toDodge.distributionType}
                <br />
                Mean: <span style={calculationStyle}>{toDodge.mean}</span> Standard Deviation: <span style={calculationStyle}>{toDodge.standardDeviation}</span>
                <br />
                <h3>Damage Calculation</h3>
                Distribution Type: {damage.distributionType}
                <br />
                Mean: <span style={calculationStyle}>{damage.mean}</span> Standard Deviation: <span style={calculationStyle}>{damage.standardDeviation}</span>
                <br />
                <h3>Modifiers</h3>
                {ability.modifiers}


                <button onClick={toggleEditMode}>Edit Ability</button>
                <button onClick={() => removeAbility(ability)}>Delete</button>
            </div>
                : <div>
                    <p>editing</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Ability name:
                                <input
                                    type="text"
                                    name="name"
                                    value={ability.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Description:
                                <input
                                    type="text"
                                    name="description"
                                    value={ability.description}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Resource Cost Type:
                                <select name="costType" onChange={handleChange} value={ability.costType}>
                                    <option value={STAT_TYPES.MANA}>Mana</option>
                                    <option value={STAT_TYPES.HEALTH}>Health</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>Resource Cost:
                                <input
                                    type="number"
                                    name="cost"
                                    value={ability.cost}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <h2>Calculations</h2>
                        <div>
                            <div style={hitCalculationStyle}>
                                <h3>To hit</h3>
                                <div>
                                    <label>Distribution Type:
                                        <select
                                            name="distributionType"
                                            onChange={handleToHitChange}
                                            value={toHit.distributionType}>
                                            <option value={DISTRIBUTION_TYPES.NORMAL}>Normal</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>Mean Calculation:
                                        <input
                                            type="text"
                                            name="mean"
                                            value={toHit.mean}
                                            onChange={handleToHitChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>Standard Deviation Calculation:
                                        <input
                                            type="text"
                                            name="standardDeviation"
                                            value={toHit.standardDeviation}
                                            onChange={handleToHitChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div style={dodgeCalculationStyle}>
                                <h3>To dodge</h3>
                                <div>
                                    <label>Distribution Type:
                                        <select name="distributionType"
                                            onChange={handleToDodgeChange}
                                            value={toDodge.distributionType}>
                                            <option value={DISTRIBUTION_TYPES.NORMAL}>Normal</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>Mean Calculation:
                                        <input
                                            type="text"
                                            name="mean"
                                            value={toDodge.mean}
                                            onChange={handleToDodgeChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>Standard Deviation Calculation:
                                        <input
                                            type="text"
                                            name="standardDeviation"
                                            value={toDodge.standardDeviation}
                                            onChange={handleToDodgeChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div style={damageCalculationStyle}>
                                <h3>Damage</h3>
                                <div>
                                    <label>Distribution Type:
                                        <select name="distributionType"
                                            onChange={handleDamageChange}
                                            value={damage.distributionType}>
                                            <option value={DISTRIBUTION_TYPES.NORMAL}>Normal</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label>Mean Calculation:
                                        <input
                                            type="text"
                                            name="mean"
                                            value={damage.mean}
                                            onChange={handleDamageChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>Standard Deviation Calculation:
                                        <input
                                            type="text"
                                            name="standardDeviation"
                                            value={damage.standardDeviation}
                                            onChange={handleDamageChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <input type="submit" />
                    </form>
                    <button onClick={toggleEditMode}>Cancel</button>
                    <button onClick={() => removeAbility(ability)}>Delete</button>
                </div>
            }



        </div>
    )
}