import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  padding: 25px;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
  }
`;
