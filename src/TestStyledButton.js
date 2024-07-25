import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: blue;
  font-size: 32px;
  color: white;
`;

export default function TestStyledButton() {
  // Use it like any other component.
  return <StyledButton> Login </StyledButton>;
}