import { object, string } from "yup";

export const LoginSchema = object().shape({
  email: string().email("Invalid email address").required(),
  password: string().min(2).max(100).required(),
});