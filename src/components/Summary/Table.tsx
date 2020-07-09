import React, { FC } from 'react';
import styled from 'styled-components';
import TableHeader from './TableHeader';

const Container = styled.div`
    margin: 10px auto;
    width: 80%;
`;

const Item = styled.span`
    border: 1px solid black;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Row = styled.div`
    display: flex;
    border: 1px solid black;
`;

const ItemWrapper = styled.div`
    width: 22.5%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

type Props = { data: Record<string, number> };

const Table: FC<Props> = ({
    data: { primary, primarySpouse, all, removedPrimary, removedPrimarySpouse, removedAll },
}) => (
    <Container>
        <TableHeader />
        <Row>
            <ItemWrapper>
                <Item>Confirmed</Item>
            </ItemWrapper>
            <ItemWrapper>
                <Item>{primary}</Item>
            </ItemWrapper>
            <ItemWrapper>
                <Item>{primarySpouse}</Item>
            </ItemWrapper>
            <ItemWrapper>
                <Item>{all}</Item>
            </ItemWrapper>
        </Row>
        <Row>
            <ItemWrapper>
                <Item>Removed</Item>
            </ItemWrapper>
            <ItemWrapper>
                <Item>{removedPrimary}</Item>
            </ItemWrapper>
            <ItemWrapper>
                <Item>{removedPrimarySpouse}</Item>
            </ItemWrapper>
            <ItemWrapper>
                <Item>{removedAll}</Item>
            </ItemWrapper>
        </Row>
    </Container>
);

export default Table;
