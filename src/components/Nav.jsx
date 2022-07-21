import styled from "styled-components";
import brandLogo from "../Assets/Images/brand/brand-logo.svg";

const NavCtr = styled.div`
  width: 100%;
  text-align: left;
  padding: 2rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  #brand_logo {
    max-width: 300px;
  }
  @media screen and (min-width: 50em) {
    #brand_logo {
      max-width: initial;
    }
  }
`;
const Nav = () => {
  return (
    <NavCtr className="">
      <img src={brandLogo} alt="brand-logo" id="brand_logo" />
    </NavCtr>
  );
};

export default Nav;
