import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { store } from './store';
import { withSuspense } from './HOC';

// Using React.lazy to dynamic import component.
const Post = lazy(() =>
  import('./containers')
    .then(({ Post }) => ({ default: Post })),
);
const PostList = lazy(() =>
  import('./containers')
    .then(({ PostList }) => ({ default: PostList })),
);

const Routes = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withSuspense(PostList)} />
      <Route path="/post/:id" component={withSuspense(Post)} />
    </Switch>
  </BrowserRouter>

}
const AppContainer = () => (
  <Container>
    <Routes />
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
