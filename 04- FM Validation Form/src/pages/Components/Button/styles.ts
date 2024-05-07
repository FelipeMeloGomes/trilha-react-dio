import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: ${(props) => (props.disabled ? "#CCC" : "#255B9D")};
    color: #fff;
    border: 1px solid ${(props) => (props.disabled ? "#CCC" : "#255B9D")};
    border-radius: 21px;
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

    &:hover {
        opacity: ${(props) => (props.disabled ? "1" : "0.6")};
        cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    }
`;
