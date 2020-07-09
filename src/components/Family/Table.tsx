import React, { FC } from 'react';
import styled from 'styled-components';
import { FamilyType } from '../../typeDefs';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { PersonType } from '../../typeDefs/index';

const Container = styled.div`
    margin: 10px;
    width: 80%;
`;

type Props = { family: FamilyType; onToggleFamily: () => void; removed: boolean };

const Table: FC<Props> = ({ family, onToggleFamily, removed }) => (
    <Container onClick={onToggleFamily}>
        <TableHeader removed={removed} />
        {Object.entries(family).map(([type, data]) => {
            if (Array.isArray(data)) {
                return data.map((children: PersonType) => <TableRow key={children.name} row={children} type={type} />);
            }
            return <TableRow key={data?.name} row={data} type={type} />;
        })}
    </Container>
);

export default Table;
