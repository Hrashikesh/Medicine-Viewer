export type Department = {
  id: string;
  type: string;
  name: string;
};

export type Doctor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  qualification: string;
  role: string;
  photo: string;
};

export type Product = {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
};

export enum FORMTYPENUM {
    PRODUCT = 'product',
    DEPARTMENT = 'department',
    DOCTOR = 'd0ctor'
}