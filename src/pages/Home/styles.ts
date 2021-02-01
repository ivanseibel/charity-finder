import styled from 'styled-components';

export const MainHeader = styled.div`
  min-width: 360px;
  display: flex;
  position: relative;
  z-index: 1;
  flex: 1;
  justify-content: center;
  height: 120px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

export const MainBody = styled.div`
  min-width: 360px;
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: #f3f2ef;
`;

export const MainFooter = styled.div`
  min-width: 360px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 0.8;
  max-width: 1165px;

  .container-logo {
    padding: 15px 0;
    /* height: 120px; */
    display: flex;

    svg {
      width: 90px;
      height: auto;
    }

    .container-logo-texts {
      display: flex;
      flex-direction: column;
      padding-left: 5px;
      justify-content: center;

      h1 {
        font-size: 35px;
      }

      span {
        margin-top: 2px;
        font-size: 15px;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 0.8;
  max-width: 1165px;

  padding: 15px 0;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex: 0.8;
  max-width: 1165px;

  padding: 15px 0;
`;
