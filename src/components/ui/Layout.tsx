import React, { ReactNode, FC, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../store/family/selectors';
import Navigation from './Navigation';
import { getFamilies } from '../../store/family/actions';

const Container = styled.div<{ isLoading: boolean }>`
    font-family: Georgia, serif;
    min-height: 100vh;
`;

const Content = styled.div`
    margin-top: 5vh;
    margin-bottom: 60px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    position: fixed;
    padding: 10px 10px 0 10px;
    bottom: 0;
    width: 100%;
    height: 40px;
`;

type Props = {
    children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    const isLoading = useSelector(getLoading);
    const display = () => (isLoading ? <Loader /> : children);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilies());
    }, []);

    return (
        <Container isLoading={isLoading}>
            <Content>
                <Navigation />
                {display()}
            </Content>
            <Footer> Viktor Orlyk 2020</Footer>
        </Container>
    );
};

export default Layout;
