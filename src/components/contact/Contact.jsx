import React from "react";
import { Container } from "./ContactStyle";
import {
  Form,
  FormInput,
  FormDropdown,
  FormRadioGroup,
  FormSlider,
  FormCheckbox,
  FormDatepicker,
  FormButton,
  FormTextArea,
} from "@fluentui/react-northstar";

const Contact = () => {
  return (
    <Container>
      <Form>
        <FormDropdown
          label="სერვისის დასახელება"
          items={["prague", "new york"]}
        />
        <FormInput label="სათაური" name="firstName" required />
        <FormInput label="ელფოსტა" name="firstName" required />
        <FormInput label="ტელეფონის ნომერი" name="firstName" required />
        <FormTextArea label="კომენტარი" name="bio"  required/>
        <FormButton content="Submit" />
      </Form>
    </Container>
  );
};

export default Contact;
