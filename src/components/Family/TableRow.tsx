import React, { FC } from 'react';
import { PersonType } from '../../typeDefs';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Item = styled.span`
    border: 1px solid black;
    width: 25%;
    &:first-of-type {
        width: 5%;
    }
`;

type Props = {
    row?: PersonType;
    type?: string;
};

const TableRow: FC<Props> = ({ row, type }) => {
    return (
        <Container>
            <Item />
            <Item>{type}</Item>
            <Item>{row?.ssn}</Item>
            <Item>{row?.name?.split(' ')[0]}</Item>
            <Item>{row?.name?.split(' ')[1]}</Item>
        </Container>
    );
};

export default TableRow;
