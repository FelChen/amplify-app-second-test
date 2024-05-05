/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
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
export const onCreateEffect = /* GraphQL */ `
  subscription OnCreateEffect($filter: ModelSubscriptionEffectFilterInput) {
    onCreateEffect(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
      __typename
    }
  }
`;
export const onUpdateEffect = /* GraphQL */ `
  subscription OnUpdateEffect($filter: ModelSubscriptionEffectFilterInput) {
    onUpdateEffect(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
      __typename
    }
  }
`;
export const onDeleteEffect = /* GraphQL */ `
  subscription OnDeleteEffect($filter: ModelSubscriptionEffectFilterInput) {
    onDeleteEffect(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      characterEffectsId
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
export const onCreateCombatState = /* GraphQL */ `
  subscription OnCreateCombatState(
    $filter: ModelSubscriptionCombatStateFilterInput
  ) {
    onCreateCombatState(filter: $filter) {
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
export const onUpdateCombatState = /* GraphQL */ `
  subscription OnUpdateCombatState(
    $filter: ModelSubscriptionCombatStateFilterInput
  ) {
    onUpdateCombatState(filter: $filter) {
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
export const onDeleteCombatState = /* GraphQL */ `
  subscription OnDeleteCombatState(
    $filter: ModelSubscriptionCombatStateFilterInput
  ) {
    onDeleteCombatState(filter: $filter) {
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
