import styled from 'styled-components';
import { DivProps } from '../../types';

export const HistoryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-top: 12px;
`

export const HistoryItem = styled.div<DivProps>`
  font-size: 14px;
  font-weight: 500;
  color: #b3b3b3;
  padding: 10px 20px 10px 25px;
  font-family: 'Encode Sans Semi Expanded', sans-serif;

  width: 100%;
  box-sizing: border-box;
  transition: color 0.3s ease;
  cursor: pointer;
h
  &:hover {
    color: #d2d2d2;
  }

  &:first-child {
    border-top: 1px solid #282828;
  }
`
