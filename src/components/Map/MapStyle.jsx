import styled from "styled-components";

export const GeorgianMap = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 60px;
  flex-flow: column;
  svg {
    max-width: 100%;
    path {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    gap: 10px;
    span {
      position: relative;
      top: 2px;
      display: flex;
      align-items: center;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }
  //   კახეთი,მცხეთა მთიანეთი,ქვემო ქართლი
  #GEO3033 {
    fill: #8ad5bf;
    :hover {
      fill: #32913d;
    }
  }
  #GEO3034 {
    fill: #8ad5bf;
    :hover {
      fill: #32913d;
    }
  }
  #GEO3037 {
    fill: #8ad5bf;
    :hover {
      fill: #32913d;
    }
  }
  //შიდა ქართლი,სამცხე ჯავახეთი,იმერეთი, რაჭა, ლეჩხუმი ზემო სვანეთი
  #GEO3039 {
    fill: #ffc187;
    :hover {
      fill: #f36726;
    }
  }
  #GEO3038 {
    fill: #ffc187;
    :hover {
      fill: #f36726;
    }
  }
  #GEO3035 {
    fill: #ffc187;
    :hover {
      fill: #f36726;
    }
  }
  #GEO3030 {
    fill: #ffc187;
    :hover {
      fill: #f36726;
    }
  }
  //აფხაზეთი, აჭარა,გურია, სამეგრელო ზემო სვანეთი
  #GEO3015 {
    fill: #b5a8ff;
    :hover {
      fill: #6f2b81;
    }
  }
  #GEO3027 {
    fill: #b5a8ff;
    :hover {
      fill: #6f2b81;
    }
  }
  #GEO3028 {
    fill: #b5a8ff;
    :hover {
      fill: #6f2b81;
    }
  }
  #GEO3029 {
    fill: #b5a8ff;
    :hover {
      fill: #6f2b81;
    }
  }
  //თბილისი
  #GEO3036 {
    fill: rgb(0 129 251 / 52%);
    :hover {
      fill: rgb(0 129 251);
    }
  }
`;
export const Blocks = styled.div`
  width: 250px;
  max-width: 100%;
  span {
    font-size: 16px;
    font-family: "BPG Nino Mtavruli", sans-serif;
    display: flex;
    gap: 10px;
    svg {
      position: relative;
      top: 2px;
    }
  }
`;
export const Title = styled.div`
  position: absolute;
  top: 25px;
  font-size: 20px;
  font-weight: 600;
  font-family: "BPG Nino Mtavruli", sans-serif;
`;
export const BlockContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 20px;
  margin-top:10px;
`;
export const ServiceBlock = styled.div`
  .ui-dialog {
    .ui-dialog__content {
      position: relative;
    }
  }
`;
