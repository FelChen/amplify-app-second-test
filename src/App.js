import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
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
const another = await client.graphql({ query: listTodos });
// console.log(result);
const result = await client.graphql({
  query: updateTodo,
  variables: {
    input: {
      id: '354ab85e-6369-41fd-8160-223db8a74722',
      name: 'ZZZZZZMy first updated todo!'
    }
  }
});
console.log(result);
console.log(another);

console.log("hey");
function App({ signOut, user }) {
  return (
    <>
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
