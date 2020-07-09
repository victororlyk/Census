import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
    getAll,
    getPrimary,
    getPrimarySpouce,
    getRemovedPrimary,
    getRemovedPrimarySpouse,
    getRemovedAll,
} from '../store/family/selectors';
import Table from '../components/Summary/Table';

const Summary: FC = () => {
    const primary = useSelector(getPrimary);
    const primarySpouse = useSelector(getPrimarySpouce);
    const all = useSelector(getAll);
    const removedPrimary = useSelector(getRemovedPrimary);
    const removedPrimarySpouse = useSelector(getRemovedPrimarySpouse);
    const removedAll = useSelector(getRemovedAll);

    const data = {
        primary,
        primarySpouse,
        all,
        removedPrimary,
        removedPrimarySpouse,
        removedAll,
    };
    return <Table data={data} />;
};

export default Summary;
