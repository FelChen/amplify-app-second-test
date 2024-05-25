/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateModifier = /* GraphQL */ `
  subscription OnCreateModifier($filter: ModelSubscriptionModifierFilterInput) {
    onCreateModifier(filter: $filter) {
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
export const onUpdateModifier = /* GraphQL */ `
  subscription OnUpdateModifier($filter: ModelSubscriptionModifierFilterInput) {
    onUpdateModifier(filter: $filter) {
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
export const onDeleteModifier = /* GraphQL */ `
  subscription OnDeleteModifier($filter: ModelSubscriptionModifierFilterInput) {
    onDeleteModifier(filter: $filter) {
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
export const onCreateAbility = /* GraphQL */ `
  subscription OnCreateAbility($filter: ModelSubscriptionAbilityFilterInput) {
    onCreateAbility(filter: $filter) {
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
export const onUpdateAbility = /* GraphQL */ `
  subscription OnUpdateAbility($filter: ModelSubscriptionAbilityFilterInput) {
    onUpdateAbility(filter: $filter) {
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
export const onDeleteAbility = /* GraphQL */ `
  subscription OnDeleteAbility($filter: ModelSubscriptionAbilityFilterInput) {
    onDeleteAbility(filter: $filter) {
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
export const onCreateAbilityCast = /* GraphQL */ `
  subscription OnCreateAbilityCast(
    $filter: ModelSubscriptionAbilityCastFilterInput
  ) {
    onCreateAbilityCast(filter: $filter) {
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
export const onUpdateAbilityCast = /* GraphQL */ `
  subscription OnUpdateAbilityCast(
    $filter: ModelSubscriptionAbilityCastFilterInput
  ) {
    onUpdateAbilityCast(filter: $filter) {
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
export const onDeleteAbilityCast = /* GraphQL */ `
  subscription OnDeleteAbilityCast(
    $filter: ModelSubscriptionAbilityCastFilterInput
  ) {
    onDeleteAbilityCast(filter: $filter) {
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
export const onCreateCalculation = /* GraphQL */ `
  subscription OnCreateCalculation(
    $filter: ModelSubscriptionCalculationFilterInput
  ) {
    onCreateCalculation(filter: $filter) {
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
export const onUpdateCalculation = /* GraphQL */ `
  subscription OnUpdateCalculation(
    $filter: ModelSubscriptionCalculationFilterInput
  ) {
    onUpdateCalculation(filter: $filter) {
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
export const onDeleteCalculation = /* GraphQL */ `
  subscription OnDeleteCalculation(
    $filter: ModelSubscriptionCalculationFilterInput
  ) {
    onDeleteCalculation(filter: $filter) {
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onCreateCharacter(filter: $filter) {
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onUpdateCharacter(filter: $filter) {
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
  ) {
    onDeleteCharacter(filter: $filter) {
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
export const onCreateCombatState = /* GraphQL */ `
  subscription OnCreateCombatState(
    $filter: ModelSubscriptionCombatStateFilterInput
  ) {
    onCreateCombatState(filter: $filter) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCombatState = /* GraphQL */ `
  subscription OnUpdateCombatState(
    $filter: ModelSubscriptionCombatStateFilterInput
  ) {
    onUpdateCombatState(filter: $filter) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCombatState = /* GraphQL */ `
  subscription OnDeleteCombatState(
    $filter: ModelSubscriptionCombatStateFilterInput
  ) {
    onDeleteCombatState(filter: $filter) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
