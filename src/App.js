import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
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
