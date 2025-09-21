import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-areas: "left center right";
  height: 100%;
`;

export const LayoutLeft = styled.div`
  grid-area: left;
`;

export const LayoutCenter = styled.div`
  grid-area: center;
`;

export const LayoutRight = styled.div`
  grid-area: right;
  background: black;
`;
