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

type Props = { data: any };

const Table: FC<Props> = ({
    data: { primary, primarySpouse, all, removedPrimary, removedPrimarySpouse, removedAll },
}) => {
    return (
        <Container>
            <TableHeader />
            <Row>
                <Item>Confirmed</Item>
                <Item>{primary.length}</Item>
                <Item>{primarySpouse.length}</Item>
                <Item>{all.length}</Item>
            </Row>
            <Row>
                <Item>Removed</Item>
                <Item>{removedPrimary.length}</Item>
                <Item>{removedPrimarySpouse.length}</Item>
                <Item>{removedAll.length}</Item>
            </Row>
        </Container>
    );
};

export default Table;
