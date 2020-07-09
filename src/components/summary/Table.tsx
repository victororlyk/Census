import React, { FC } from 'react';
import styled from 'styled-components';
import TableHeader from './TableHeader';

const Container = styled.div`
    margin: 10px;
    width: 50%;
`;

const Item = styled.span`
    border: 1px solid black;
    width: 25%;
`;

const Row = styled.div`
    display: flex;
`;

type Props = { data: Record<string, number> };

const Table: FC<Props> = ({
    data: { primary, primarySpouse, all, removedPrimary, removedPrimarySpouse, removedAll },
}) => (
    <Container>
        <TableHeader />
        <Row>
            <Item>Confirmed</Item>
            <Item>{primary}</Item>
            <Item>{primarySpouse}</Item>
            <Item>{all}</Item>
        </Row>
        <Row>
            <Item>Removed</Item>
            <Item>{removedPrimary}</Item>
            <Item>{removedPrimarySpouse}</Item>
            <Item>{removedAll}</Item>
        </Row>
    </Container>
);

export default Table;
