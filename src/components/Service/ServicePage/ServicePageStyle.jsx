import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  top: 60px;
  width: 1550px;
  max-width: 100%;
  justify-content: space-between;
  .ui-button {
    background: rgb(220, 237, 247);
    color: #222;
  }
`;
export const Title = styled.div`
  font-family: "BPG Nino Mtavruli", sans-serif;
  font-size: 24px;
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  width: 70%;
`;

export const ItemTitles = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: "BPG Nino Mtavruli", sans-serif;
`;

export const LinkItems = styled.a`
  font-size: 20px;
  font-weight: 600;
  font-family: "BPG Nino Mtavruli", sans-serif;
  text-decoration: underline;
`;

export const CategoryBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Block = styled.div`
  display: flex;
  gap: 40px;
`;
export const FormBlock = styled.div`
width: 25%;
.ui-form {
  justify-content: start !important;
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
  }

  .ui-textarea {
    width: 100%;
    height: 250px;
  }
  .formInputs {
    .ui-box {
      width: 100%;
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
