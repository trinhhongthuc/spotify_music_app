import styled from 'styled-components';


export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const PlayListTitle = styled.h3`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  margin: 40px 0 10px;
`;

export const PlayListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
  width: 100%;
`;
