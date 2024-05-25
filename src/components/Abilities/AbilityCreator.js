import { useState } from "react";
import { DISTRIBUTION_TYPES, STAT_TYPES } from "../../enum/enums";
import { newAbility, newCalculation } from "../../utils/abilityUtils";

const creatorStyle = {
    background: '#bbffc3'
}
const hitCalculationStyle = {
    background: '#ffbbfa'
}
const dodgeCalculationStyle = {
    background: '#a6f3ff'
}
const damageCalculationStyle = {
    background: '#ffc0c0'
}

export default function AbilityCreator() {
    const [ability, setAbility] = useState({
        name: "",
        description: "",
        cost: 0,
        costType: STAT_TYPES.MANA,
        modifiers: []
    });
    const [toHit, setToHit] = useState({
        distributionType: DISTRIBUTION_TYPES.NORMAL,
        mean: "",
        standardDeviation: ""
    })
    const [toDodge, setToDodge] = useState({
        distributionType: DISTRIBUTION_TYPES.NORMAL,
        mean: "",
        standardDeviation: ""
    })
    const [damage, setDamage] = useState({
        distributionType: DISTRIBUTION_TYPES.NORMAL,
        mean: "",
        standardDeviation: ""
    })

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
    // TODO: Add help text
    // mean always calculated before standard deviation, cannot have mean reference standard deviation
    // Tell user what symbols they need to use for calculations
    // STR, DEX, MSTR, MDEX, HP, MAXHP, MANA, MAXMANA, MEAN
    return (
        <div style={creatorStyle}>
            <h1>Ability Creator</h1>
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
                <p>STR, DEX, MSTR, MDEX, HP, MAXHP, MANA, MAXMANA, MEAN</p>
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
        </div>
    );
}