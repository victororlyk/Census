import React, { FC } from 'react';
import { PersonType } from '../../typeDefs';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    border: 1px solid black;
`;

const Item = styled.span`
    border: 1px solid black;
    min-width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FirstItem = styled(Item)`
    border: none;
`;

const ItemWrapper = styled.div`
    width: 22.5%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:first-of-type {
        width: 5%;
    }
    padding: 10px;
`;

const CommonItems = styled(ItemWrapper)`
    outline: 1px solid black;
    width: 45%;
    margin: 10px;
    padding: 0;
`;

const ItemInCommon = styled(ItemWrapper)`
    width: 100% !important;
    &:first-child {
        padding-left: 0;
    }
    padding-right: 0;
`;

type Props = {
    row?: PersonType;
    type?: string;
};

const TableRow: FC<Props> = ({ row, type }) => (
    <Container>
        <ItemWrapper>
            <FirstItem />
        </ItemWrapper>
        <ItemWrapper>
            <Item>{type}</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Item>{row?.ssn}</Item>
        </ItemWrapper>
        <CommonItems>
            <ItemInCommon>
                <Item>{row?.name?.split(' ')[0]}</Item>
            </ItemInCommon>
            <ItemInCommon>
                <Item>{row?.name?.split(' ')[1]}</Item>
            </ItemInCommon>
        </CommonItems>
    </Container>
);

export default TableRow;
