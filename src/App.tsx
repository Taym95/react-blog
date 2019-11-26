import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { store } from './store';
import { PostList } from './containers'
import { MyHeader } from './components'

const AppContainer = () => (
  <Container>
    <MyHeader />
    <PostList />
  </Container>
)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
