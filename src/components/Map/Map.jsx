import React, { useState, useEffect } from "react";
import {
  GeorgianMap,
  ServiceBlock,
  Blocks,
  Title,
  BlockContainer,
  RegionContainer,
} from "./MapStyle";
import { Dialog } from "@fluentui/react-northstar";
import { CloseIcon, NotepadPersonIcon } from "@fluentui/react-icons-northstar";
import { Link } from "react-router-dom";
const Map = ({ services, regions }) => {
  const [selectedPathId, setSelectedPathId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  const uniqueColor = {
    apkhazeti: "rgb(181, 168, 255)",
    adjara: "rgb(181, 168, 255)",
    guria: "rgb(181, 168, 255)",
    samegrelo: "rgb(181, 168, 255)",
    imereti: "rgb(255, 193, 135)",
    kakheti: "rgb(138, 213, 191)",
    mtsketa: "rgb(138, 213, 191)",
    racha: "rgb(255, 193, 135)",
    tbilisi: "rgba(0, 129, 251, 0.52)",
    qvemo: "rgb(138, 213, 191)",
    samckhe: "rgb(255, 193, 135)",
    shida: "rgb(255, 193, 135)",
  };

  const openDialog = (event, id) => {
    setSelectedPathId(id);
  };
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    // navigate("/", { state: { location: location } });
  };
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
                      <span>
                        <Link
                          to={{
                            pathname: "/",
                            search: `?location=${location}`,
                          }}
                        >
                          {location}
                        </Link>
                      </span>
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
        <RegionContainer>
          <div>
            <span style={{ background: uniqueColor.apkhazeti }}></span>
            აფხაზეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.adjara }}></span>
            აჭარა
          </div>
          <div>
            <span style={{ background: uniqueColor.guria }}></span>
            გურია
          </div>
          <div>
            <span style={{ background: uniqueColor.samegrelo }}></span>
            სამეგრელო-ზემო სვანეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.imereti }}></span>
            იმერეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.kakheti }}></span>
            კახეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.mtsketa }}></span>
            მცხეთა-მთიანეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.racha }}></span>
            რაჭა-ლეჩხუმი-ქვემო სვანეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.tbilisi }}></span>
            თბილისი
          </div>
          <div>
            <span style={{ background: uniqueColor.qvemo }}></span>
            ქვემო ქართლი
          </div>
          <div>
            <span style={{ background: uniqueColor.samckhe }}></span>
            სამცხე-ჯავახეთი
          </div>
          <div>
            <span style={{ background: uniqueColor.shida }}></span>
            შიდა ქართლი
          </div>
        </RegionContainer>
      </ServiceBlock>
    </GeorgianMap>
  );
};

export default Map;
