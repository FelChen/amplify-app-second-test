/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createModifier = /* GraphQL */ `
  mutation CreateModifier(
    $input: CreateModifierInput!
    $condition: ModelModifierConditionInput
  ) {
    createModifier(input: $input, condition: $condition) {
      id
      name
      description
      strengthMod
      dexterityMod
      magicStrengthMod
      magicDexterityMod
      maxHealthMod
      maxManaMod
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateModifier = /* GraphQL */ `
  mutation UpdateModifier(
    $input: UpdateModifierInput!
    $condition: ModelModifierConditionInput
  ) {
    updateModifier(input: $input, condition: $condition) {
      id
      name
      description
      strengthMod
      dexterityMod
      magicStrengthMod
      magicDexterityMod
      maxHealthMod
      maxManaMod
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteModifier = /* GraphQL */ `
  mutation DeleteModifier(
    $input: DeleteModifierInput!
    $condition: ModelModifierConditionInput
  ) {
    deleteModifier(input: $input, condition: $condition) {
      id
      name
      description
      strengthMod
      dexterityMod
      magicStrengthMod
      magicDexterityMod
      maxHealthMod
      maxManaMod
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAbility = /* GraphQL */ `
  mutation CreateAbility(
    $input: CreateAbilityInput!
    $condition: ModelAbilityConditionInput
  ) {
    createAbility(input: $input, condition: $condition) {
      id
      name
      description
      cost
      costType
      toHitId
      toDodgeId
      damageId
      modifiers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAbility = /* GraphQL */ `
  mutation UpdateAbility(
    $input: UpdateAbilityInput!
    $condition: ModelAbilityConditionInput
  ) {
    updateAbility(input: $input, condition: $condition) {
      id
      name
      description
      cost
      costType
      toHitId
      toDodgeId
      damageId
      modifiers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAbility = /* GraphQL */ `
  mutation DeleteAbility(
    $input: DeleteAbilityInput!
    $condition: ModelAbilityConditionInput
  ) {
    deleteAbility(input: $input, condition: $condition) {
      id
      name
      description
      cost
      costType
      toHitId
      toDodgeId
      damageId
      modifiers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAbilityCast = /* GraphQL */ `
  mutation CreateAbilityCast(
    $input: CreateAbilityCastInput!
    $condition: ModelAbilityCastConditionInput
  ) {
    createAbilityCast(input: $input, condition: $condition) {
      id
      casterName
      targetNames
      toHit
      toDodge
      damage
      abilityName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAbilityCast = /* GraphQL */ `
  mutation UpdateAbilityCast(
    $input: UpdateAbilityCastInput!
    $condition: ModelAbilityCastConditionInput
  ) {
    updateAbilityCast(input: $input, condition: $condition) {
      id
      casterName
      targetNames
      toHit
      toDodge
      damage
      abilityName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAbilityCast = /* GraphQL */ `
  mutation DeleteAbilityCast(
    $input: DeleteAbilityCastInput!
    $condition: ModelAbilityCastConditionInput
  ) {
    deleteAbilityCast(input: $input, condition: $condition) {
      id
      casterName
      targetNames
      toHit
      toDodge
      damage
      abilityName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCalculation = /* GraphQL */ `
  mutation CreateCalculation(
    $input: CreateCalculationInput!
    $condition: ModelCalculationConditionInput
  ) {
    createCalculation(input: $input, condition: $condition) {
      id
      distributionType
      mean
      standardDeviation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCalculation = /* GraphQL */ `
  mutation UpdateCalculation(
    $input: UpdateCalculationInput!
    $condition: ModelCalculationConditionInput
  ) {
    updateCalculation(input: $input, condition: $condition) {
      id
      distributionType
      mean
      standardDeviation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCalculation = /* GraphQL */ `
  mutation DeleteCalculation(
    $input: DeleteCalculationInput!
    $condition: ModelCalculationConditionInput
  ) {
    deleteCalculation(input: $input, condition: $condition) {
      id
      distributionType
      mean
      standardDeviation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
      id
      name
      strength
      dexterity
      magicStrength
      magicDexterity
      maxHealth
      currentHealth
      temporaryHealth
      temporaryArmor
      maxMana
      currentMana
      modifiers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
      id
      name
      strength
      dexterity
      magicStrength
      magicDexterity
      maxHealth
      currentHealth
      temporaryHealth
      temporaryArmor
      maxMana
      currentMana
      modifiers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
      id
      name
      strength
      dexterity
      magicStrength
      magicDexterity
      maxHealth
      currentHealth
      temporaryHealth
      temporaryArmor
      maxMana
      currentMana
      modifiers
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCombatState = /* GraphQL */ `
  mutation CreateCombatState(
    $input: CreateCombatStateInput!
    $condition: ModelCombatStateConditionInput
  ) {
    createCombatState(input: $input, condition: $condition) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCombatState = /* GraphQL */ `
  mutation UpdateCombatState(
    $input: UpdateCombatStateInput!
    $condition: ModelCombatStateConditionInput
  ) {
    updateCombatState(input: $input, condition: $condition) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCombatState = /* GraphQL */ `
  mutation DeleteCombatState(
    $input: DeleteCombatStateInput!
    $condition: ModelCombatStateConditionInput
  ) {
    deleteCombatState(input: $input, condition: $condition) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
