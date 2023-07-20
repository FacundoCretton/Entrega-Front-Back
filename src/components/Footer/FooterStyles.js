import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  border-top: 1px solid #fff;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 100px;
  

`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
  align-items: center;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;


  };
`;

export const FooterLeftFraction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  grid-row: 2;
  @media (max-width: 576px) {
    margin: auto;

  }
`;

export const FLFul = styled.ul`
  margin: 0 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FLFli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const FooterLogo = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

export const FooterLogoImg = styled.img`
  width: 200px;
`;

export const FooterRedSocialIcon = styled.i`
  font-size: 20px;
  margin: 20px;
  width: 30px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: #a2a2a2;
  border: 1px solid;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    ${props =>
      props.facebook &&
      `
      background: #41579a;
      color: #fff;
    `}
    ${props =>
      props.instagram &&
      `
      background: linear-gradient(to top right, #fcde30, #e9712a, #d2313b, #ae4198, #7540a1, #5443a8);
      color: #fff;
    `}
    ${props =>
      props.twitter &&
      `
      background: linear-gradient(45deg, #66757f, #00acee, #36d8ff, #f5f8fa);
      color: #fff;
    `}
    ${props =>
      props.youtube &&
      `
      background: #f5f8fa;
      color: #ff0000;
    `}
  }
  @media (max-width: 576px) {
    margin: 10px;
    width: 25px;
    height: 25px;
  }
`;

export const FooterRedesSocialesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
  grid-row: 2;

  a {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: 992px) {
    margin: 20px 0;
    
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 3;
  grid-row: 2;

  li{
    margin-bottom: 10px;
  };
  @media (max-width: 992px) {
    display: none;
    
  };
`;

export const FooterLink = styled.a`
  color: #fff;
  
`;

export const FooterSeparator = styled.hr`
  border: none;
  border-top: 1px solid #555;
  margin: 20px 0;
`;

export const FooterCopyRight = styled.div`
  font-size: 15px;
`;

