import React from 'react';
import { Header } from 'semantic-ui-react';
import { MyLink } from './MyLink';

interface Props {}

const MyHeader: React.FC<Props> = (props: Props) => {
  return (
    <Header as="h3" block data-testid="header">
      <MyLink to="/" color="black">
        Blog post
      </MyLink>
    </Header>
  );
};

export { MyHeader };
