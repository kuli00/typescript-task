export enum GENDER {
  MALE,
  FEMALE,
  APACHE_HELICOPTER,
}

export interface SingleData {
  firstName: string;
  lastName: string;
  age: number;
  gender: GENDER;
  occupation?: string;
}

export type Data = SingleData[];