import * as Styled from './styles';
import { NAV_LIST } from '../../utils/constants';
import { useState } from 'react';
import { NAV_LIST_ENUM } from '../../types';
import { useNavigate } from 'react-router-dom';


export const NavigatorItems = () => {
  const [activeId, setActiveId] = useState<NAV_LIST_ENUM>(NAV_LIST_ENUM.HOME);

  const navigate = useNavigate()

  const onChange = (id: NAV_LIST_ENUM) => (event: React.MouseEvent) => {
    setActiveId(id);
    navigate({
      pathname: 'search',
    })
  };

  return (
    <Styled.NavigatorContainer>
      {NAV_LIST.map(({ name, icon: Icon, id }, index) => (
        <Styled.NavigatorItem key={index} onClick={onChange(id)}>
          <Styled.NavigatorItemIcon
            className={`${activeId === id && 'active'}`}
          >
            {<Icon />}
          </Styled.NavigatorItemIcon>
          <Styled.NavigatorItemTitle
            className={`${activeId === id && 'active'}`}
          >
            {name}
          </Styled.NavigatorItemTitle>
        </Styled.NavigatorItem>
      ))}
    </Styled.NavigatorContainer>
  );
};
