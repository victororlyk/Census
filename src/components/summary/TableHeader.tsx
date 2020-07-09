import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #b9d2ec;
`;

const Item = styled.span`
    border: 1px solid black;
    width: 25%;
`;

const TableHeader: FC = () => (
    <Container>
        <Item>Status</Item>
        <Item>Primary</Item>
        <Item>Primary+Spouse</Item>
        <Item>Primary + Spouse + Children</Item>
    </Container>
);

export default TableHeader;
