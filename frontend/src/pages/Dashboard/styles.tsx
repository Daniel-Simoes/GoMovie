import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 46px;

  margin-top: 20px;
`;

export const Form = styled.form`
margin-top: 30px;
max-width: 700px;

display: flex;

input {
  flex: 1;
  height: 60px;
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
  height: 60px;
  background: #3397e8;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#3397e8')};
  }
}
`;

export const Error = styled.span`
  display: block;
  color: #d13330;
  margin-top: 8px;
`;

export const Movie = styled.div`
margin-top: 50px;
max-width: 1500px;

a {
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  background: #FFF;
  display: flex;
  align-items: center;
  transition: transform 0.5s;

  &:hover {
    background: ${shade(0.01, '#FFF')};
  }

  & + a {
    margin-top: 16px;
  }

  #test {
    margin:0;
  padding:0;
  outline:0;
  max-width:65%;
  box-sizing: border-box;

  }

  div{

    margin-left: 30px;

    strong {
      font-size: 40px;
      color: #3D3D4D;
    }
    p {
      font-size: 18px;
      color: #A8A8B3;
      margin-top: 4px;
      text-align: justify;
    }
    span{
      font-size: 18px;
      color: #3A3A3A;
      margin-top: 6px;
      font-weight: bold;
    }
    button {
    font-size: 14px;
    width: 150px;
    height: 50px;
    margin-top: 8px;
    background: #d13330;
    border-radius: 5px 5px 5px 5px;
    border: 0;
    margin-left: 400px;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#d13330')};
    }
  }
  }


}


`;
