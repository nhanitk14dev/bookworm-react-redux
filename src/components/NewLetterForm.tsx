/* 
    Function Components follow: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components 
    Hook: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks
    https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
    Recommend use React Hook form: https://react-hook-form.com/get-started#TypeScript

    ------------
    https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
    Partial: means the object doesn't need to contain all keys
    Record: is used to create more complex object types
    
*/

import { useEffect, useState } from "react";
import {
  ErrorLabel,
  NewsLetterForm,
  NewsLetterFormGroup,
} from "../commonStyles";

const NewLetterForm = () => {
  // TypeScript object type
  type InputForm = { email: string };
  type Errors = Partial<Record<keyof InputForm, string>>;

  const initValues = { email: "" };
  const [formValues, setFormValues] = useState<InputForm>(initValues);
  const [errors, setErrors] = useState<Errors>({}); // default Errors Object empty
  const [isSubmit, setIsSubmit] = useState(false); // prevent submiting contain errors msg

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit && Object.keys(errors).length === 0) {
      console.log(formValues);

      // todo: call Api, send mail
    }
  });

  /*
    * Call Signatures in an object type: 
      https://www.typescriptlang.org/docs/handbook/2/objects.html
    */
  const validate = (newInputs: InputForm) => {
    const newErrors: Errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!newInputs.email) {
      newErrors.email = "Email is required!";
    } else if (!regex.test(newInputs.email)) {
      newErrors.email = "This is not a valid email format!";
    }

    return newErrors;
  };

  return (
    <NewsLetterForm onSubmit={handleSubmit}>
      <NewsLetterFormGroup>
        <input
          type="text"
          name="email"
          value={formValues.email}
          placeholder="Enter email"
          onChange={(e) =>
            setFormValues({ ...formValues, [e.target.name]: e.target.value })
          }
        />
        <input type="submit" value="Submit" />
      </NewsLetterFormGroup>
      {errors.email ? <ErrorLabel>{errors.email}</ErrorLabel> : null}
    </NewsLetterForm>
  );
};

export default NewLetterForm;
