import { object, string } from "yup";

export const LoginSchema = object().shape({
  email: string().email("Invalid email address").required(),
  password: string().min(2).max(100).required(),
});

export const EditUserSchema = object().shape({
  email: string().email("Invalid email address").required(),
  name: string().min(2).max(20).required(),
  address: string().max(100),
});
