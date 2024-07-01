import styled from "styled-components";

export const PromoCode = styled.div`
  width: 400px;
  margin-left: 250px;
  > h1 {
    margin-bottom: 20px;
  }
`;

export const EnterPromo = styled.div`
  display: flex;
  gap: 45px;
  > input {
    border: none;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 0 17px;
    font-size: 14px;
    font-weight: 400;
  }
  > button {
    border: none;
    padding: 15px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: #ff8e8e;
    }
  }
`;

export const TextPromoCode = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
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

export const Print = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;