import React from "react";
import styled from "styled-components";

// Styled component for the copyright bar
const CopyrightBar = styled.div`
  background-color: #6f6de8; /* Dark background color */
  color: #fff; /* White text color */
  text-align: center; /* Center the text */
  padding: 10px 0; /* Padding for top and bottom */
  font-size: 12px; /* Font size */
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <CopyrightBar>
      {new Date().getFullYear()} All rights reserved KFit Plus &copy; Powered by
      Khushali.
    </CopyrightBar>
  );
};

export default Footer;
