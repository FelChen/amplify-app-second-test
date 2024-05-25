/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      health
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        health
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getModifier = /* GraphQL */ `
  query GetModifier($id: ID!) {
    getModifier(id: $id) {
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
export const listModifiers = /* GraphQL */ `
  query ListModifiers(
    $filter: ModelModifierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModifiers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAbility = /* GraphQL */ `
  query GetAbility($id: ID!) {
    getAbility(id: $id) {
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
export const listAbilities = /* GraphQL */ `
  query ListAbilities(
    $filter: ModelAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAbilityCast = /* GraphQL */ `
  query GetAbilityCast($id: ID!) {
    getAbilityCast(id: $id) {
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
export const listAbilityCasts = /* GraphQL */ `
  query ListAbilityCasts(
    $filter: ModelAbilityCastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbilityCasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCalculation = /* GraphQL */ `
  query GetCalculation($id: ID!) {
    getCalculation(id: $id) {
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
export const listCalculations = /* GraphQL */ `
  query ListCalculations(
    $filter: ModelCalculationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalculations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        distributionType
        mean
        standardDeviation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
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
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCombatState = /* GraphQL */ `
  query GetCombatState($id: ID!) {
    getCombatState(id: $id) {
      id
      charactersEngaged
      currentCharacterTurn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCombatStates = /* GraphQL */ `
  query ListCombatStates(
    $filter: ModelCombatStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCombatStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        charactersEngaged
        currentCharacterTurn
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
