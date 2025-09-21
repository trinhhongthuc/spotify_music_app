import * as Styled from "./styles"
import React from 'react';

interface IProps{
  left: React.ReactElement
  center: React.ReactElement
  right: React.ReactElement
}

export const Layout = (props:IProps) => {
  const {left, center, right} = props;

  return(<Styled.LayoutContainer>
    <Styled.LayoutLeft>{left}</Styled.LayoutLeft>
    <Styled.LayoutCenter>{center}</Styled.LayoutCenter>
    <Styled.LayoutRight>{right}</Styled.LayoutRight>
  </Styled.LayoutContainer>);
};
