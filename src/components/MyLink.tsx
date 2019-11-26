import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Lets use styled-components to style our Link
const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        color: ${props => props.color ? props.color : "white"};;
    }
`;

const MyLink = (props: any) => <StyledLink {...props} />;

export { MyLink };