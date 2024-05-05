/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
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
export const createEffect = /* GraphQL */ `
  mutation CreateEffect(
    $input: CreateEffectInput!
    $condition: ModelEffectConditionInput
  ) {
    createEffect(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
      __typename
    }
  }
`;
export const updateEffect = /* GraphQL */ `
  mutation UpdateEffect(
    $input: UpdateEffectInput!
    $condition: ModelEffectConditionInput
  ) {
    updateEffect(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
      __typename
    }
  }
`;
export const deleteEffect = /* GraphQL */ `
  mutation DeleteEffect(
    $input: DeleteEffectInput!
    $condition: ModelEffectConditionInput
  ) {
    deleteEffect(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
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
export const createCombatState = /* GraphQL */ `
  mutation CreateCombatState(
    $input: CreateCombatStateInput!
    $condition: ModelCombatStateConditionInput
  ) {
    createCombatState(input: $input, condition: $condition) {
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
export const updateCombatState = /* GraphQL */ `
  mutation UpdateCombatState(
    $input: UpdateCombatStateInput!
    $condition: ModelCombatStateConditionInput
  ) {
    updateCombatState(input: $input, condition: $condition) {
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
export const deleteCombatState = /* GraphQL */ `
  mutation DeleteCombatState(
    $input: DeleteCombatStateInput!
    $condition: ModelCombatStateConditionInput
  ) {
    deleteCombatState(input: $input, condition: $condition) {
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
