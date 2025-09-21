import * as Styled from './styles';
import { BackIcon, NextIcon } from '../../assets';

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContainerNavigate>
        <Styled.HeaderContainerNavigateButton>
          <BackIcon />
        </Styled.HeaderContainerNavigateButton>

        <Styled.HeaderContainerNavigateButton>
          <NextIcon />
        </Styled.HeaderContainerNavigateButton>
      </Styled.HeaderContainerNavigate>

      <Styled.HeaderContainerLoginButton>
        Login
      </Styled.HeaderContainerLoginButton>
    </Styled.HeaderContainer>
  );
};
