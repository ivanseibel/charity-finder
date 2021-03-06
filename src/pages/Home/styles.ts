import styled from 'styled-components';

export const MainHeader = styled.div`
  min-width: 360px;
  height: 120px;
  display: flex;
  position: relative;
  z-index: 1;
  flex: 1;
  justify-content: center;
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
  justify-content: center;
  flex: 1;
  display: flex;
  min-width: 360px;
  background-color: #fff;
  align-items: center;

  clear: both;
  position: relative;
  height: 100px;
  margin-top: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1600px;

  @media (max-width: 400px) {
    width: 95%;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 769px) {
    width: 80%;
  }

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
  max-width: 1600px;

  padding: 15px 0;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 95%;
  }

  @media (min-width: 400px) and (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 769px) {
    width: 80%;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  padding: 0 15px;

  div#selects {
    display: flex;
    width: 100%;
    flex-direction: column;

    @media (min-width: 1052px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  div#buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 20px;

    div {
      width: 260px;
      display: flex;
      justify-content: space-between;
      margin-right: 5px;
    }
  }
`;

export const ResultsContainer = styled.div`
  margin: 15px 0 0;
  min-height: 500px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  max-width: 1600px;

  padding: 15px 0;

  @media (max-width: 400px) {
    width: 95%;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 769px) {
    width: 80%;
  }
`;
