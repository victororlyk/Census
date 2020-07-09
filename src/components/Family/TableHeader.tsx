import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ removed: boolean }>`
    display: flex;
    background-color: ${({ removed }) => (removed ? 'red' : '#b9d2ec')};
`;

const Item = styled.span`
    border: 1px solid black;
    width: 25%;
    &:first-of-type {
        width: 5%;
    }
`;

type Props = {
    removed: boolean;
};

const TableHeader: FC<Props> = ({ removed = false }) => {
    return (
        <Container removed={removed}>
            <Item>{removed ? 'x' : 'ok'}</Item>
            <Item>Member type</Item>
            <Item>SSN</Item>
            <Item>First Name</Item>
            <Item>Last Name</Item>
        </Container>
    );
};

export default TableHeader;
