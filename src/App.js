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


function App({ signOut, user }) {
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
