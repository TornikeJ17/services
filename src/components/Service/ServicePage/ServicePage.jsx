import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Container,
  Title,
  ItemsContainer,
  ItemTitles,
  LinkItems,
  CategoryBlock,
  Block,
  FormBlock,
} from "./ServicePageStyle";
import {
  Button,
  Form,
  FormDropdown,
  FormInput,
  FormTextArea,
  FormButton,
} from "@fluentui/react-northstar";
import { ArrowLeftIcon } from "@fluentui/react-icons-northstar";

const ServicePage = ({ service }) => {
  const location = useLocation();
  const [formValues, setFormValues] = useState({
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
  const { email, phoneNumber, title, comment } = formValues;
  const isFormEmpty = !email || !phoneNumber || !title || !comment;
  return (
    <Container>
      {service.map(
        (item) =>
          item?.id === location.state.id && (
            <Block>
              <ItemsContainer>
                <Title>{item?.name}</Title>
                <div>
                  <ItemTitles>აღწერა:</ItemTitles>
                  <div>{item?.description}</div>
                </div>
                <div>
                  <ItemTitles>პროვაიდერი</ItemTitles>
                  <div>{item?.provider}</div>
                </div>
                <div>
                  <ItemTitles>კატეგორიები</ItemTitles>
                  <CategoryBlock>
                    {item?.category.map((ca) => (
                      <span>{ca.title}</span>
                    ))}
                  </CategoryBlock>
                </div>
                <div>
                  <ItemTitles>ლოკაცია</ItemTitles>
                  <div>{item?.location}</div>
                </div>
                <div>
                  <LinkItems href={item?.url} target="_blank">
                    ვრცლად პროგრამის შესახებ
                  </LinkItems>
                </div>
              </ItemsContainer>
              <FormBlock>
                <Form>
                  <FormInput
                    className="formInputs"
                    label="ელფოსტა"
                    name="email"
                    required
                    onChange={handleFormChange}
                  />
                  <FormInput
                    className="formInputs"
                    label="ტელეფონის ნომერი"
                    name="phoneNumber"
                    required
                    onChange={handleFormChange}
                  />
                  <FormInput
                    className="formInputs"
                    label="სათაური"
                    name="title"
                    required
                    onChange={handleFormChange}
                  />
                  <FormTextArea
                    label="ტექსტი"
                    name="comment"
                    required
                    onChange={handleFormChange}
                  />
                  <FormButton
                    content="გაგზავნა"
                    primary
                    disabled={isFormEmpty}
                  />
                </Form>
              </FormBlock>
            </Block>
          )
      )}
      <Link to="/">
        <Button icon={<ArrowLeftIcon />} iconOnly primary />
      </Link>
    </Container>
  );
};
export default ServicePage;
