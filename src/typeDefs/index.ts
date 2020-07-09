export type PersonType = {
    name: string;
    gender: string;
    age: number;
    ssn: string;
};

export type FamilyType = {
    primary: PersonType;
    spouse?: PersonType;
    children?: PersonType[];
};
