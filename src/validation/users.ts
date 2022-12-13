import { object, string } from "yup";

export const EditUserSchema = object().shape({
  email: string().email().required(),
  password: string().min(2).max(100).required(),
  name: string().min(2).max(20).required(),
  address: string().max(100),
});
