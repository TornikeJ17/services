import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: start;
  width: 1550px;
  max-width: 100%;
  height: 100vh;
  .ui-form {
    justify-content: start !important;
    width: 50%;
    .ui-form__dropdown {
      .ui-form__label {
        font-family: "BPG Nino Mtavruli", sans-serif;
        font-size: 16px;
        :after {
          content: "*";
          color: #ff5555;
        }
      }
    }
    .ui-form__button {
      width: 500px;
      max-width: 100%;
      text-align: end;
    }
    .ui-form__textarea {
      .ui-form__label {
        font-family: "BPG Nino Mtavruli", sans-serif;
        font-size: 16px;
        :after {
          color: #ff5555;
        }
      }
    }
    .ui-dropdown__container {
      width: 500px;
      max-width: 100%;
      .ui-list {
        width: 500px;
        max-width: 100%;
      }
    }

    .ui-textarea {
      width: 500px;
      max-width: 100%;
      height: 250px;
    }
  }
  .formInputs {
    .ui-box {
      width: 500px !important;
      max-width: 100% !important;
      .ui-input__icon {
        .ui-icon {
          position: absolute;
          right: 0;
        }
      }
    }
    .ui-form__label {
      font-family: "BPG Nino Mtavruli", sans-serif;
      font-size: 16px;
      :after {
        color: #ff5555;
      }
    }
  }
`;
export const MapContainer = styled.div`
  width: 50%;
  margin-top: 20px;
  .mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 500px;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 500px;
    border-radius: 8px;
  }
  .gmap_iframe {
    height: 500px !important;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: start;
  flex-flow: column;
  gap:10px;
  position:relative;
  top:20px;
  left: 40px;
`