import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { createTodo, updateTodo, deleteTodo, deletePlayer } from './graphql/mutations';
import { onCreateTodo, onUpdateTodo, onDeleteTodo, onCreatePlayer } from './graphql/subscriptions';
import { listPlayers, listTodos } from './graphql/queries';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';
import PlayerCard from './components/Characters/PlayerCard';
import CharacterList from './components/Characters/CharacterList';
import DmPage from './components/DmPage';
Amplify.configure(config);
const client = generateClient();

// const result = await client.graphql({
//   query: createTodo,
//   variables: {
//     input: {
//       name: 'My first todo!'
//     }
//   }
// });

var players = await client.graphql({ query: listPlayers });
var listOfPlayers = players.data.listPlayers.items;
const another = await client.graphql({ query: listTodos });
console.log(another);
const createSub = client
  .graphql({ query: onCreateTodo })
  .subscribe({
    next: ({ data }) => printStuff(data),
    error: (error) => console.warn(error),
  });

  async function printStuff(data){
    console.log("TODOs");
    console.log(another)
    var todos = await client.graphql({query: listTodos});
    console.log(todos);
    console.log("CREATED");
    console.log(data);
  }

  function updatePlayers(data){
    console.log("trying to update players BEFORE");
    console.log(listOfPlayers);
    console.log(data);
    // listOfPlayers = data.listPlayers.items;
    listOfPlayers.push(data.onCreatePlayer);
    console.log("trying to update players AFTER");
    console.log(listOfPlayers);
  }
  const updateSub = client
  .graphql({ query: onUpdateTodo })
  .subscribe({
    next: ({ data }) => console.log("Updated" + data),
    error: (error) => console.warn(error),
  });

// Subscribe to deletion of Todo
const deleteSub = client
  .graphql({ query: onDeleteTodo })
  .subscribe({
    next: ({ data }) => console.log("Deleted" + data),
    error: (error) => console.warn(error),
  });

  const createPlayer = client
  .graphql({ query: onCreatePlayer })
  .subscribe({
    next: ({ data }) => updatePlayers(data)
    // players = data 
    // console.log("Player Created" + data)
    ,
    error: (error) => console.warn(error),
  });


const playerss = await client.graphql({ query: listPlayers });
// console.log(result);
// const result = await client.graphql({
//   query: updateTodo,
//   variables: {
//     input: {
//       id: '354ab85e-6369-41fd-8160-223db8a74722',
//       name: 'ZZZZZZMy first updated todo!'
//     }
//   }
// });

const del = await client.graphql({
  query: deleteTodo,
  variables: {
    input: {
      id: '9922459b-5899-4b6a-ad63-705903b1cc52'
    }
  }
})
/////////////////////////////////////////////////

// const del = await client.graphql({
//   query: deletePlayer,
//   variables: {
//     input: {
//       id: '413d3c2a-37a0-47a8-a3d8-b11bee7477f1'
//     }
//   }
// })

///////////////////////////////////////////////////////////////////////
// console.log(result);
// console.log(another);
// console.log("PLAYERS ");
console.log(playerss);
// console.log(playerss.data.listPlayers.items);

// console.log("hey");
function App({ signOut, user }) {
  console.log("app");
  return (
    <>
      <DmPage/>
      <h1>Hello!!! {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
// export default withAuthenticator(App, { hideSignUp: true });
// export default App;

// export default withAuthenticator(App, {
//   // Specify the OAuth providers you want to enable
//   federated: { google_client_id: '981178962228-gucgr4n05cnht5suf62iq02skmralo03.apps.googleusercontent.com' }
// });
