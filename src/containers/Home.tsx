import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Table from '../components/Family/Table';
import { getFamilies, getRemoved } from '../store/family/selectors';
import { removeFamily, addFamily } from '../store/family/actions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home: FC = () => {
    const families = useSelector(getFamilies);
    const removed = useSelector(getRemoved);
    const dispatch = useDispatch();

    const toggleFamily = (i: number) => {
        if (removed.includes(i)) {
            dispatch(removeFamily(i));
        } else {
            dispatch(addFamily(i));
        }
    };

    return (
        <Container>
            {families.map((family, index) => (
                <Table
                    key={family.primary.name}
                    family={family}
                    removed={removed.includes(index)}
                    onToggleFamily={toggleFamily.bind(null, index)}
                />
            ))}
        </Container>
    );
};
export default Home;
