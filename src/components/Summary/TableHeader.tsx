import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #b9d2ec;
    border: 1px solid black;
`;

const Item = styled.span`
    width: 25%;
    line-height: 1.5;
    text-align: center;
    padding: 10px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
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
