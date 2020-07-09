import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../../routes';

const Header = styled.header`
    background-color: #000000;
    color: #ffffff;
    height: 5vh;
    padding: 0 5vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const Nav = styled.nav`
    display: flex;
    height: 100%;
    align-items: center;
`;

const StyledLink = styled(NavLink)`
    margin-left: 20px;
    color: #ffffff;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const Navigation: FC = () => {
    return (
        <Header>
            <Nav>
                {routes.map(({ name, url }) => (
                    <StyledLink key={url} to={url}>
                        {name}
                    </StyledLink>
                ))}
            </Nav>
        </Header>
    );
};
export default Navigation;
