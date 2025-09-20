import styled from 'styled-components';
import { DivProps, SpanProps } from '../../types';

export const NavigatorContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
export const NavigatorItem = styled.div<DivProps>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  color: White;
  width: 100%;
  padding: 5px 20px 5px 25px;
  transition: all .3s ease;
  box-sizing: border-box;

  &:hover {
    background: #333;
    cursor: pointer;
  }
`;

export const NavigatorItemIcon = styled.span<SpanProps>`
  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .5;
  &.active {
    opacity: 1;
  }
`;

export const NavigatorItemTitle = styled.span<SpanProps>`
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  font-weight: 500;
  opacity: .5;

  &.active {
    opacity: 1;
  }
`;
