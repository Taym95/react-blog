import React from 'react'
import { Header } from 'semantic-ui-react'
import { MyLink } from './MyLink';

const MyHeader = () => {
    return (
        <Header as='h3' block>
            <MyLink to="/" color="black">Blog post</MyLink>
        </Header>
    )
}


export { MyHeader };
