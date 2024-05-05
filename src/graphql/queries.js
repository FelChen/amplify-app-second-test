/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
export const getEffect = /* GraphQL */ `
  query GetEffect($id: ID!) {
    getEffect(id: $id) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
      __typename
    }
  }
`;
export const listEffects = /* GraphQL */ `
  query ListEffects(
    $filter: ModelEffectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEffects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        characterEffectsId
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
      effects {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      combatStateCharactersEngagedId
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
        createdAt
        updatedAt
        combatStateCharactersEngagedId
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
      charactersEngaged {
        nextToken
        __typename
      }
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
