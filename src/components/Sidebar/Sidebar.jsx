import React, { useState, useEffect } from "react";
import { Container, Title, MenuContainer } from "./SidebarStyle";
import { Checkbox, Button, Accordion } from "@fluentui/react-northstar";

const Sidebar = ({ services, handleFilter }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCategoryTitles, setSelectedCategoryTitles] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const uniqueLocations = [
    ...new Set(services.map((service) => service.location)),
  ];
  const uniqueTitles = [
    ...new Set(
      services.map(
        (service) => service.category.find((item) => item.title).title
      )
    ),
  ];
  const uniqueBenefits = [
    ...new Set(services.map((service) => service.benefits)),
  ];

  const handleBenefitsFilter = (benefits) => {
    const isChecked = selectedBenefits.includes(benefits);
    let updatedBenefits = [...selectedBenefits];
    if (isChecked) {
      updatedBenefits = updatedBenefits.filter(
        (benefit) => benefit !== benefits
      );
    } else {
      updatedBenefits.push(benefits);
    }
    setSelectedBenefits(updatedBenefits);
    handleFilter(selectedCategoryTitles, selectedLocations, updatedBenefits);
  };

  const handleLocationFilter = (location) => {
    const isChecked = selectedLocations.includes(location);
    let updatedLocations = [...selectedLocations];
    if (isChecked) {
      updatedLocations = updatedLocations.filter((loc) => loc !== location);
    } else {
      updatedLocations.push(location);
    }
    setSelectedLocations(updatedLocations);
    handleFilter(selectedCategoryTitles, updatedLocations, selectedBenefits);
  };

  const handleCategoryTitleFilter = (title) => {
    const isChecked = selectedCategoryTitles.includes(title);
    let updatedCategoryTitles = [...selectedCategoryTitles];
    if (isChecked) {
      updatedCategoryTitles = updatedCategoryTitles.filter(
        (cat) => cat !== title
      );
    } else {
      updatedCategoryTitles.push(title);
    }
    setSelectedCategoryTitles(updatedCategoryTitles);
    handleFilter(updatedCategoryTitles, selectedLocations, selectedBenefits);
  };

  const handleClearAll = () => {
    setSelectedCategoryTitles([]);
    setSelectedLocations([]);
    setSelectedBenefits([]);
    handleFilter([], [], []);
  };

  const Menu = [
    {
      key: 1,
      title: "კატეგორიები",
      content: [
        uniqueTitles.map((title) => (
          <Checkbox
            key={title}
            label={title}
            checked={selectedCategoryTitles.includes(title)}
            onChange={() => handleCategoryTitleFilter(title)}
          />
        )),
      ],
    },
    {
      key: 2,
      title: "ლოკაციები",
      content: [
        uniqueLocations.map((location) => (
          <Checkbox
            key={location}
            label={location}
            checked={selectedLocations.includes(location?.toLowerCase())}
            onChange={() => handleLocationFilter(location?.toLowerCase())}
          />
        )),
      ],
    },
    {
      key: 3,
      title: "ბენეფიციარები",
      content: [
        uniqueBenefits.map((benefits) => (
          <Checkbox
            key={benefits}
            label={benefits}
            checked={selectedBenefits.includes(benefits)}
            onChange={() => handleBenefitsFilter(benefits)}
          />
        )),
      ],
    },
  ];

  return (
    <Container>
      <Title>სერვისები</Title>
      <MenuContainer>
        <Accordion className="accordion" panels={Menu} exclusive />
      </MenuContainer>
      <Button onClick={handleClearAll} content="გასუფთავება" primary />
    </Container>
  );
};

export default Sidebar;
