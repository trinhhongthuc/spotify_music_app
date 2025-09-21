import styled from "styled-components";

export const HeaderContainer  = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContainerNavigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  gap: 20px;
`

export const HeaderContainerNavigateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, .5);
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: background .3s ease;

  &:hover {
    background: rgba(0, 0, 0, .3);
  }
`
export const  HeaderContainerLoginButton  = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: white;
  border-radius: 50px;
  background: transparent;
  padding:  12px 38px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid white;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  cursor: pointer;
  box-shadow: 0 0 0 #ccc;
  transition: all .3s ease;

  &:hover {
    background: #fff;
    border-color: #fff;
    color: #333;
  }
`
