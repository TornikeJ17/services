import React, { useState, useEffect } from "react";
import { GeorgianMap, ServiceBlock, Blocks, Title,BlockContainer } from "./MapStyle";
import { Dialog } from "@fluentui/react-northstar";
import { CloseIcon, NotepadPersonIcon } from "@fluentui/react-icons-northstar";
const Map = ({ services, regions }) => {
  const [selectedPathId, setSelectedPathId] = useState(null);
  const uniqueColors = [
    ...new Set(services.map((service) => service.category[0].title)),
  ];
  const uniqueLocations = [...new Set(services.map((service) => service.name))];
  console.log(uniqueLocations);
  const colors = {
    education: "განათლება",
    socialHelp: "მატერიალური დახმარება",
    healthcare: "ჯანდაცვა",
    socialConsultation: "სოციალური კონსულტაცია",
    reintegration: "რეინტეგრაცია",
  };
  const uniqueColor = {
    [colors.education]: "rgb(249, 236, 2)",
    [colors.socialHelp]: "rgb(91, 95, 199)",
    [colors.healthcare]: "rgb(35, 123, 75)",
    [colors.socialConsultation]: "rgb(196, 49, 75)",
    [colors.reintegration]: "rgb(148, 54, 112)",
  };

  const openDialog = (event, id) => {
    setSelectedPathId(id);
  };
  console.log(regions);
  return (
    <GeorgianMap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        baseprofile="tiny"
        fill="#7c7c7c"
        height="512"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        version="1.2"
        viewbox="0 0 1000 512"
        width="1000"
        id="georgiaMapSvg"
      >
        {regions.map((item) => (
          <path
            onClick={() => openDialog(item, item.id)}
            d={item.d}
            id={item.id}
            name={item.name}
          />
        ))}
      </svg>
      <ServiceBlock>
        <Dialog
          headerAction={{
            icon: <CloseIcon />,
            title: "Close",
            onClick: () => {
              setSelectedPathId(null);
            },
          }}
          open={selectedPathId !== null}
          content={
            <>
              <Title>სერვისები</Title>
              <BlockContainer>
                {selectedPathId &&
                  Array.from(
                    new Set(
                      services
                        .filter((item) => item.regionId === selectedPathId)
                        .map((item) => item.location)
                    )
                  ).map((location) => (
                    <Blocks key={location}>
                      <span>{location}</span>{" "}
                      <span>
                        <NotepadPersonIcon outline size="medium" />
                        {
                          services.filter((item) => item.location === location)
                            .length
                        }
                      </span>
                    </Blocks>
                  ))}
              </BlockContainer>
            </>
          }
        />
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
      </ServiceBlock>
    </GeorgianMap>
  );
};

export default Map;
