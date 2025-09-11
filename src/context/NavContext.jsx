/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState('white');
  const locate = useLocation().pathname;

  useEffect(() => {
    setNavColor(['/projects', '/agency'].includes(locate) ? 'black' : 'white');
  }, [locate]);

  const navContextValue = useMemo(() => [navOpen, setNavOpen], [navOpen]);
  const navColorContextValue = useMemo(() => [navColor, setNavColor], [navColor]);

  return (
    <NavbarContext.Provider value={navContextValue}>
      <NavbarColorContext.Provider value={navColorContextValue}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
