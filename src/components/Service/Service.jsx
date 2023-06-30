import React, { useState } from "react";
import {
  Container,
  ItemsContainer,
  SearchBlock,
  BlockForItems,
  ServiceTitle,
  ColorContainer,
  ItemContainerBlock,
  ServiceBenefits,
} from "./ServiceStyle";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {
  Segment,
  Flex,
  Input,
  Button,
  Tooltip,
} from "@fluentui/react-northstar";
import { ArrowLeftIcon, ArrowRightIcon } from "@fluentui/react-icons-northstar";
const Service = ({ services }) => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPageNumbersToShow = 3; // Number of page numbers to show at once

  const colors = {
    education: "განათლება",
    socialHelp: "მატერიალური დახმარება",
    healthcare: "ჯანდაცვა",
    socialConsultation: "სოციალური კონსულტაცია",
    reintegration: "რეინტეგრაცია",
  };
  const navigate = useNavigate();

  const InsideService = (id) => {
    navigate("/" + id, { state: { id: id } });
  };

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === totalPages) {
        return prevPage;
      } else {
        return prevPage + 1;
      }
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === 1) {
        return prevPage;
      } else {
        return prevPage - 1;
      }
    });
  };

  const startIndex = Math.max(
    1,
    currentPage - Math.floor(maxPageNumbersToShow / 2)
  );
  const endIndex = Math.min(startIndex + maxPageNumbersToShow - 1, totalPages);

  const visibleServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filtered = services.filter((service) => {
      return (
        service?.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        service?.benefits.toLowerCase().includes(searchValue.toLowerCase()) ||
        service?.location.toLowerCase().includes(searchValue.toLowerCase()) ||
        service?.provider.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredServices(filtered);
    setCurrentPage(1);
  };

  const applyFilters = (titles, locations, benefits) => {
    const filtered = services.filter((service) => {
      const titleMatches =
        titles.length === 0 || titles.includes(service.category[0].title);
      const locationMatches =
        locations.length === 0 ||
        locations.includes(service.location.toLowerCase());
      const benefitsMatches =
        benefits.length === 0 || benefits.includes(service.benefits);
      return titleMatches && locationMatches && benefitsMatches;
    });
    setFilteredServices(filtered);
    setCurrentPage(1);
  };
  const uniqueColors = [
    ...new Set(services.map((service) => service.category[0].title)),
  ];
  const uniqueColor = {
    [colors.education]: "rgb(249, 236, 2)",
    [colors.socialHelp]: "rgb(91, 95, 199)",
    [colors.healthcare]: "rgb(35, 123, 75)",
    [colors.socialConsultation]: "rgb(196, 49, 75)",
    [colors.reintegration]: "rgb(148, 54, 112)",
  };
  return (
    <Container>
      <Sidebar services={services} handleFilter={applyFilters} />
      {filteredServices.length === 0 ? (
        <div>
          <div>სერვისები არ მოიძებნა</div>
        </div>
      ) : (
        <BlockForItems>
          <SearchBlock>
            <ColorContainer>
              {uniqueColors.map((service) => (
                <div>
                  {service.includes(colors.education) ? (
                    <span
                      style={{ background: uniqueColor[colors.education] }}
                    ></span>
                  ) : service.includes(colors.socialHelp) ? (
                    <span
                      style={{ background: uniqueColor[colors.socialHelp] }}
                    ></span>
                  ) : service.includes(colors.healthcare) ? (
                    <span
                      style={{ background: uniqueColor[colors.healthcare] }}
                    ></span>
                  ) : service.includes(colors.socialConsultation) ? (
                    <span
                      style={{
                        background: uniqueColor[colors.socialConsultation],
                      }}
                    ></span>
                  ) : service.includes(colors.reintegration) ? (
                    <span
                      style={{ background: uniqueColor[colors.reintegration] }}
                    ></span>
                  ) : null}
                  {service.includes(colors.education)
                    ? service
                    : service.includes(colors.socialHelp)
                    ? service
                    : service.includes(colors.healthcare)
                    ? service
                    : service.includes(colors.socialConsultation)
                    ? service
                    : service.includes(colors.reintegration)
                    ? service
                    : null}
                </div>
              ))}
            </ColorContainer>
            <Input placeholder="ძიება..." onChange={handleSearch} />
          </SearchBlock>
          <ItemsContainer>
            {visibleServices.map((service) => (
              <Segment
                styles={{borderTop:"4px"}}
                key={service.id}
                onClick={() => InsideService(service.id)}
                color={
                  service.category[0].title.includes(colors.education)
                    ? "yellow"
                    : service.category[0].title.includes(colors.socialHelp)
                    ? "brand"
                    : service.category[0].title.includes(colors.healthcare)
                    ? "green"
                    : service.category[0].title.includes(
                        colors.socialConsultation
                      )
                    ? "red"
                    : service.category[0].title.includes(colors.reintegration)
                    ? "pink"
                    : "none"
                }
                content={
                  <ItemContainerBlock>
                    <Tooltip
                      trigger={
                        <ServiceTitle>
                          {service.name.length > 100
                            ? service.name.substring(0, 150) + "..."
                            : service.name}
                        </ServiceTitle>
                      }
                      content={service.name.length < 100 ? null : service.name}
                      pointing
                    />
                    <ServiceBenefits>{service.benefits}</ServiceBenefits>
                  </ItemContainerBlock>
                }
              />
            ))}
          </ItemsContainer>
          <Flex gap="gap.medium">
            <Button
              content={<ArrowLeftIcon />}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              iconOnly
              primary
            />

            {Array.from({ length: endIndex - startIndex + 1 }).map(
              (_, index) => (
                <Button
                  key={startIndex + index}
                  content={(startIndex + index).toString()}
                  onClick={() => setCurrentPage(startIndex + index)}
                  primary={currentPage === startIndex + index}
                  iconOnly
                />
              )
            )}
            <Button
              icon={<ArrowRightIcon />}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              iconOnly
              primary
            />
          </Flex>
        </BlockForItems>
      )}
    </Container>
  );
};

export default Service;
