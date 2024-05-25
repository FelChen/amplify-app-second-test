import { createAbility, createAbilityCast, createCalculation, deleteAbility, deleteAbilityCast, deleteCalculation, updateAbility, updateAbilityCast, updateCalculation } from "../graphql/mutations";
import { getCalculation, listAbilities, listAbilityCasts, listCalculations } from "../graphql/queries";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from "../amplifyconfiguration.json"
import { normalDistribution } from "./calculations";
import { DISTRIBUTION_TYPES, RESOURCE_TYPES, STAT_TYPES } from "../enum/enums";
import { evaluate, parse } from "mathjs";
import { changeHealth, changeMana } from "./characterUtils";

Amplify.configure(config);
const client = generateClient();

export async function getCalculations() {
    var calculations = await client.graphql({ query: listCalculations, });
    var listOfCalculations = calculations.data.listCalculations.items;
    return listOfCalculations;
}

export async function retrieveCalculation(id) {
    try {
        var calculation = await client.graphql({
            query: getCalculation,
            variables: {
                id: id
            }
        });
        return calculation.data.getCalculation;
    } catch (error) {
        console.log(error.errors[0].message);
    }
}

export async function newCalculation(calc) {
    return await client.graphql({
        query: createCalculation,
        variables: {
            input: {
                distributionType: calc.distributionType,
                mean: calc.mean,
                standardDeviation: calc.standardDeviation
            }
        }
    })
}

export async function changeCalculation(calc) {
    await client.graphql({
        query: updateCalculation,
        variables: {
            input: {
                id: calc.id,
                distributionType: calc.distributionType,
                mean: calc.meanEquation,
                standardDeviation: calc.stdDevEquation
            }
        }
    })
}

export async function removeCalculation(calcId) {
    await client.graphql({
        query: deleteCalculation,
        variables: {
            input: {
                id: calcId
            }
        }
    })
}

export async function getAbilities() {

    var abilities = await client.graphql({ query: listAbilities });
    var listOfAbilities = abilities.data.listAbilities.items;
    return listOfAbilities;
}

export async function newAbility(ability, toHit, toDodge, damage, modifiers = []) {
    try {
        await client.graphql({
            query: createAbility,
            variables: {
                input: {
                    name: ability.name,
                    description: ability.description,
                    cost: ability.cost,
                    costType: ability.costType,
                    toHitId: toHit,
                    toDodgeId: toDodge,
                    damageId: damage,
                    modifiers: modifiers
                }
            }
        })
    } catch (error) {
        console.log(error.errors[0].message);
    }

}

export async function changeAbility(ability) {
    await client.graphql({
        query: updateAbility,
        variables: {
            input: {
                id: ability.id,
                name: ability.name,
                description: ability.description,
                cost: ability.cost,
                costType: ability.costType,
                toHit: ability.hitCalculation,
                toDodge: ability.dodgeCalculation,
                damage: ability.damageCalculation,
                modifiers: ability.modifiers
            }
        }
    })
}

export async function removeAbility(ability) {
    await removeCalculation(ability.toHitId);
    await removeCalculation(ability.toDodgeId);
    await removeCalculation(ability.damageId);
    await client.graphql({
        query: deleteAbility,
        variables: {
            input: {
                id: ability.id
            }
        }
    })
}

export async function castAbility(ability, caster, targets) {
    // TODO: add error handling


    const hitCalc = await retrieveCalculation(ability.toHitId);
    const dodgeCalc = await retrieveCalculation(ability.toHitId);
    const damageCalc = await retrieveCalculation(ability.toHitId);
    var damageVal = 0;
    var toHit = 0;
    var toDodge = [];
    toHit = parseAndCalculate(hitCalc, caster);
    toDodge = targets.map(target => parseAndCalculate(dodgeCalc, target));
    damageVal = parseAndCalculate(damageCalc, caster);

    // TODO: Check values for errors


    // Damage is modified by players
    // Spell cost is subtracted automatically

    switch (ability.costType) {
        case STAT_TYPES.HEALTH:
            changeHealth(caster, 0 - ability.cost);
            break;
        case STAT_TYPES.MANA:
            changeMana(caster, 0 - ability.cost);
            break;

        default:
            break;
    }


    // Ties currently go to the attacker
    const abilityCast = {
        casterName: caster.name,
        targetNames: targets.map(target => target.name),
        toHit: toHit,
        toDodge: toDodge,
        damage: Math.floor(damageVal),
        abilityName: ability.name
    }
    newAbilityCast(abilityCast);
}

function parseAndCalculate(calculation, character) {
    // TODO: add modifiers to the character's values
    // STR, DEX, MSTR, MDEX, HP, MAXHP, MANA, MAXMANA, MEAN
    var parsedMeanCalculation = calculation.mean;
    var parsedStdDevCalculation = calculation.standardDeviation;
    // console.log(calculation.mean);
    // Parse Mean

    parsedMeanCalculation = parsedMeanCalculation.replaceAll("MSTR", character.magicStrength);
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("MDEX", character.magicDexterity);
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("STR", character.strength);
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("DEX", character.dexterity);
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("MAXHP", character.maxHealth);
    // TODO: figure out what to do with temporary health and/or armor
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("HP", character.currentHealth);
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("MAXMANA", character.maxMana);
    parsedMeanCalculation = parsedMeanCalculation.replaceAll("MANA", character.currentMana);


    // Parse Standard Deviation

    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("MSTR", character.magicStrength);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("MDEX", character.magicDexterity);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("STR", character.strength);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("DEX", character.dexterity);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("MAXHP", character.maxHealth);
    // TODO: figure out what to do with temporary health and/or armor
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("HP", character.currentHealth);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("MAXMANA", character.maxMana);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("MANA", character.currentMana);
    parsedStdDevCalculation = parsedStdDevCalculation.replaceAll("MEAN", parsedMeanCalculation);

    var meanCalc;
    var stdDevCalc;
    try {
        meanCalc = evaluate(parsedMeanCalculation);
        stdDevCalc = evaluate(parsedStdDevCalculation);
    } catch (error) {
        console.log(error);
        console.log("Something failed with the evaluate function, probably incorrectly formatted function");
    }
    // TODO: Add support for other distribution types
    var result;
    try {
        switch (calculation.distributionType) {
            case DISTRIBUTION_TYPES.NORMAL:
                result = normalDistribution(meanCalc, stdDevCalc);
                break;

            default:
                break;
        }
    } catch (error) {

    }
    return result;
}

export async function getAbilityCasts() {
    var abilityCasts = await client.graphql({ query: listAbilityCasts, });
    var listOfAbilityCasts = abilityCasts.data.listAbilityCasts.items;
    return listOfAbilityCasts;
}

export async function newAbilityCast(abilityCast) {
    await client.graphql({
        query: createAbilityCast,
        variables: {
            input: {
                casterName: abilityCast.casterName,
                targetNames: abilityCast.targetNames,
                toHit: abilityCast.toHit,
                toDodge: abilityCast.toDodge,
                damage: abilityCast.damage,
                abilityName: abilityCast.abilityName
            }
        }
    })
}

export async function removeAbilityCast(abilityCast) {
    await client.graphql({
        query: deleteAbilityCast,
        variables: {
            input: {
                id: abilityCast.id
            }
        }
    })
}