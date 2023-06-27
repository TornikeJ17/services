import React from "react";
import { Container, MapContainer } from "./ContactStyle";
import {
  Form,
  FormInput,
  FormDropdown,
  FormButton,
  FormTextArea,
} from "@fluentui/react-northstar";

const Contact = ({ services }) => {
  const servicesName = services.map((x) => x.name);
  console.log(servicesName);
  return (
    <Container>
      <Form>
        <FormDropdown label="სერვისის დასახელება" items={servicesName} />
        <FormInput
          className="formInputs"
          label="ელფოსტა"
          name="firstName"
          required
        />
        <FormInput
          className="formInputs"
          label="ტელეფონის ნომერი"
          name="firstName"
          required
        />
        <FormInput
          className="formInputs"
          label="სათაური"
          name="firstName"
          required
        />
        <FormTextArea label="კომენტარი" name="bio" required />
        <FormButton content="გაგზავნა" primary/>
      </Form>
      <MapContainer>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;q=სოციალური სერვისების სააგენტო&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </MapContainer>
    </Container>
  );
};

export default Contact;
