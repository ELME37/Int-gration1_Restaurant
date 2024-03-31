import styled from "styled-components";
import DatePicker from "react-datepicker";

import { colors } from "../../utils/colors";

export const Root = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px 0;
`;

export const ContainerForm = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const ItemForm = styled.div`
    width: calc(100% / 3  - 30px);
    margin-bottom: 30px;
`;

export const Select = styled.select`
    width: 100%;
    color: ${colors.white};
    background: transparent;
    border: none;
    border-bottom: 1px ${colors.white} solid;
    font-size: 16px;
    padding: 10px 4px;

    &::placeholder {
        color: ${colors.white};
    }
`

export const Input = styled.input`
    width: 100%;
    color: ${colors.white};
    background: transparent;
    border: none;
    border-bottom: 1px ${colors.white} solid;
    font-size: 16px;
    padding: 10px 4px;

    &::placeholder {
        color: ${colors.white};
    }
`;

export const InputDatePicker = styled(DatePicker)`
    width: 100%;
    color: ${colors.white};
    background: transparent;
    border: none;
    border-bottom: 1px ${colors.white} solid;
    font-size: 16px;
    padding: 10px 4px;

    &::placeholder {
        color: ${colors.white};
    }
`;

export const StyledDatePickerGeneral = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker-popper {
    z-index: 999;
  }

  .react-datepicker__current-month {
    color: ${colors.gold};
    text-transform: uppercase;
  }

  .react-datepicker__day-name {
    text-transform: uppercase;
  }

  .react-datepicker__day--selected {
    background-color: ${colors.gold}
  }

  .react-datepicker__input-container {
    position: relative;
  }

`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
  fill: ${colors.gold};
`;

export const Option = styled.option`
    color: ${colors.gray};
`;

export const Span = styled.span`
    color: red;
`;