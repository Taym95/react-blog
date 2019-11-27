import * as React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from '../../store';

import { PostDetails, PostList } from '../../containers';
// import { LoginForm } from '../PostDetails';

describe('Post', () => {
  test('should display PostList with Add post button', async () => {
    const history = createMemoryHistory();
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={PostList} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </Router>
      </Provider>
    );
    const AddPostButton = await getByText('Add post');
    expect(AddPostButton).toBeInTheDocument();
  });

  test('should change Route when click on Read more button', async () => {
    const history = createMemoryHistory();
    const { getByText, findByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={PostList} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </Router>
      </Provider>
    );

    //fireEvent.click(getByText('Read more'));

    // const postDetails = await findByTestId('post-details');
    // expect(postDetails).toBeInTheDocument();
  });
});
