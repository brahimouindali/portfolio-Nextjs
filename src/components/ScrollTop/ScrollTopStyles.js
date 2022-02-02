import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border: 0;
  cursor: pointer;
  border-radius: 12px;
  padding: 1em 1.3em;
  transition: opacity 500ms;

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 8px;
    padding: 0.7em 1em;
  }

  &:hover {
    opacity: 1 !important;
    transition-duration: 350ms;
  }
`;

export { Button };
