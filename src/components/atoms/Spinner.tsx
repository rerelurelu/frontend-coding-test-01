import styled from 'styled-components';

export const Spinner = styled.div`
  border: 12px solid lightblue;
  border-top: 12px lightskyblue solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
