import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ removed: boolean }>`
    display: flex;
    border: 1px solid black;
    background-color: ${({ removed }) => (removed ? 'red' : '#b9d2ec')};
`;

const Item = styled.span`
    padding: 0 10px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.5%;
    &:first-of-type {
        width: 5%;
    }
`;

type Props = {
    removed: boolean;
};

const TableHeader: FC<Props> = ({ removed = false }) => (
    <Container removed={removed}>
        <Item>{removed ? <code>&#10005;</code> : <code style={{ color: 'green' }}>&#10003;</code>}</Item>
        <Item>Member type</Item>
        <Item>SSN</Item>
        <Item>First Name</Item>
        <Item>Last Name</Item>
    </Container>
);

export default TableHeader;
