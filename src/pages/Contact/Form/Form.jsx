import { useState } from "react";
import { Button } from "../../../components/ui/Button/Button";
import * as SC from "./styles";

export const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("feedback", JSON.stringify(formValues));
    console.log(formValues);
    setFormValues({
      name: "",
      email: "",
      feedback: "",
    });
  };

  const disabled =
    !formValues.name || !formValues.email || !formValues.feedback;

  return (
    <SC.Form onSubmit={onSubmit} autoComplete="off">
      <SC.Input
        type="text"
        name="name"
        value={formValues.name}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        placeholder="Enter your name"
      />
      <SC.Input
        type="email"
        name="email"
        value={formValues.email}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        placeholder="Enter your email"
      />
      <SC.Textarea
        type="text"
        name="feedback"
        value={formValues.feedback}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        placeholder="Enter your feedback"
        rows="5"
      />
      <Button type="onSubmit" disabled={disabled}>
        Send a message
      </Button>
    </SC.Form>
  );
};
