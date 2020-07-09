export type Person = {
    name: string;
    gender: string;
    age: number;
    ssn: string;
};

export type FamilyType = {
    primary: any;
    spouse?: any;
    children?: any[];
};
