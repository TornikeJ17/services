import React, { useState } from "react";
import { Container, MapContainer,Block} from "./ContactStyle";
import {
  Form,
  FormInput,
  FormDropdown,
  FormButton,
  FormTextArea,
} from "@fluentui/react-northstar";

const Contact = ({ services }) => {
  const servicesName = services.map((x) => x.name);
  const [formValues, setFormValues] = useState({
    serviceName: "",
    email: "",
    phoneNumber: "",
    title: "",
    comment: "",
  });

  const handleFormChange = (event, { name, value }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const { serviceName, email, phoneNumber, title, comment } = formValues;
  const isFormEmpty =
    !serviceName || !email || !phoneNumber || !title || !comment;

  return (
    <Container>
      <MapContainer>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              marginHeight="0"
              scrolling="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;q=სოციალური სერვისების სააგენტო&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </MapContainer>
      <Block>
        <div>მეილი: example@hotmail.com</div>
        <div>მისამართი: თბილისი ქუჩა</div>
        <div>ტელ: 987182941940</div>
        <div>მეილი: example@hotmail.com</div>
        <div>მისამართი: თბილისი ქუჩა</div>
        <div>ტელ: 987182941940</div>
        <div>მეილი: example@hotmail.com</div>
        <div>მისამართი: თბილისი ქუჩა</div>
        <div>ტელ: 987182941940</div>
      </Block>
    </Container>
  );
};

export default Contact;
