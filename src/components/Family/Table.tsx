import React, { FC } from 'react';
import styled from 'styled-components';
import { FamilyType } from '../../typeDefs';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { PersonType } from '../../typeDefs/index';

const Container = styled.div`
    margin: 10px;
    width: 50%;
`;

type Props = { family: FamilyType; onToggleFamily: () => void; removed: boolean };

const Table: FC<Props> = ({ family, onToggleFamily, removed }) => {
    return (
        <Container>
            <TableHeader removed={removed} />
            <div onClick={() => onToggleFamily()}>
                {Object.entries(family).map(([type, data]) => {
                    if (Array.isArray(data)) {
                        return data.map((children: PersonType) => (
                            <TableRow key={children.name} row={children} type={type} />
                        ));
                    }
                    return <TableRow key={data?.name} row={data} type={type} />;
                })}
            </div>
        </Container>
    );
};

export default Table;
