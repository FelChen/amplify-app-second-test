import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';
import DmPage from './components/DmPage';
import NormalDistribution from './components/Math/NormalDistribution';


function App({ signOut, user }) {
  return (
    <>
      <h1>Hello!!! {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <DmPage/>
      <NormalDistribution/>
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
