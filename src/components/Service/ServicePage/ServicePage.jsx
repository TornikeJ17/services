import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Container,
  Title,
  ItemsContainer,
  ItemTitles,
  LinkItems,
  CategoryBlock,
} from "./ServicePageStyle";
import { Button } from "@fluentui/react-northstar";
import { ArrowLeftIcon } from "@fluentui/react-icons-northstar";

const ServicePage = ({ service }) => {
  const location = useLocation();
  return (
    <Container>
      {service.map(
        (item) =>
          item?.id === location.state.id && (
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
          )
      )}
      <Link to="/">
        <Button icon={<ArrowLeftIcon />} iconOnly primary />
      </Link>
    </Container>
  );
};
export default ServicePage;
