import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  gap: 70px;
  position: relative;
  border-top: 20px solid #eee;
  padding-top: 110px;
  margin-bottom: 50px;
  > img:first-child {
    position: absolute;
    top: 20px;
    left: 0;
    width: 130px;
  }
  > img:last-child {
    position: absolute;
    top: 50px;
    width: 290px;
    right: 0;
  }
`;

export const Info = styled.div`
  position: relative;
  left: 50px;
  padding-left: 150px;
`;

export const BasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 90px;
  margin-bottom: 91px;
`;

export const FirstColumnBI = styled.div`
  width: 331px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
    > img:first-child {
      width: 110px;
    }
  }
`;

export const SecondAndThirdBI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  > ul {
    > li {
      margin-bottom: 12px;
    }
  }

  > p {
    font-weight: bold;
  }
`;

export const FourthColumnBI = styled.div`
  width: 361px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
`;

export const Pay = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.div`
  margin-top: 14px;
  display: flex;
  > input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #444;
    padding-bottom: 16px;
  }
  > button {
    border: none;
    background: #fff;
    border-bottom: 1px solid #444;
    padding-bottom: 16px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SocialNetwork = styled.div`
  display: flex;
  gap: 15px;
`;
