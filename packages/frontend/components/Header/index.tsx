import styled from '@emotion/styled';

import { Logout } from './Logout';
import useSessionContext from '../../context/SessionContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }
`;

const Header = () => {
  const { isLogged } = useSessionContext();
  return <HeaderContainer>{isLogged ? <Logout /> : false}</HeaderContainer>;
};

export default Header;
