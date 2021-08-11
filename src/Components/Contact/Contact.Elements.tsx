import styled from "styled-components";
import { animateUp } from "../Homepage/Homepage.Elements";

export const WorksSection = styled.div`
  height: 100vh;
  padding: 2rem 6rem;
`;

export const WorkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 70%;
  margin: auto;
`;

export const ContactHeader = styled.h1`
  color: #e95e01;
  line-height: 140%;
  animation: ${animateUp} 1s;
`;

export const ContactText = styled.p`
  line-height: 170%;
  font-size: 1.2rem;
  margin-bottom: 3vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.4rem;
  border: 1px solid #e95e01;
  color: #e95e01;
  background-color: transparent;
  margin: 2rem auto;
  width: 50%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e95e01;
  padding: 1rem;
  font-size: 1.4rem;
  ::placeholder {
    color: rgb(233, 94, 1, 0.5);
  }
  &:nth-child(3) {
    margin-left: 0.9rem;
  }
  &:focus {
    outline: none;
  }
`;

export const MessageBox = styled.textarea`
  font-size: 1.4rem;
  min-height: 200px;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #e95e01;
  ::placeholder {
    color: rgb(233, 94, 1, 0.5);
  }
  &:focus {
    outline: none;
  }
`;
