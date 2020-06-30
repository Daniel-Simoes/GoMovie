import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 46px;

  margin-top: 80px;
`;

export const Form = styled.form`
margin-top: 40px;
max-width: 700px;

display: flex;

input {
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;

  &::placeholder {
    color: #a8a8b3;
  }
}

button {
  width: 210px;
  height: 70px;
  background: #d13330;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#d13330')};
  }
}
`;

export const Movie = styled.div`
margin-top: 60px;
max-width: 1000px;

a {
  background: #FFF;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;
  transition: transform 0.5s;

  &:hover {
    transform: translateX(10px);
  }

  & + a {
    margin-top: 16px;
  }
  
  div{
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: #3D3D4D;
    }
    p {
      font-size: 18px;
      color: #A8A8B3;
      margin-top: 4px;
    }
  }
  svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  
}


`;