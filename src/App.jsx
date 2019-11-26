import React, { useState } from 'react';
import Routes from './app/Navigation/Route';
import { HashRouter } from 'react-router-dom';
import AtmosphereMenu from 'react-atmosphere-menu';
import { navbarRoutes } from './app/Navigation/utils';
import WrapperToHamburgerMenu from './app/Navigation/WrapperToHamburgerMenu';

function App() {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const handlerToEnableAndDisableMenu = () =>{
    setActiveMenu(!isActiveMenu);
  }    
     
  return (
    <div className="App">
      <HashRouter>
        <AtmosphereMenu
          active={isActiveMenu}
          nav={navbarRoutes}
          tagLine={'Made by'}
          companyName={'SeN'}
          closeMenu={handlerToEnableAndDisableMenu}
        >
          <WrapperToHamburgerMenu
            isOpen={isActiveMenu}
            menuClicked={() => setActiveMenu(!isActiveMenu)}
          />
          <Routes />
        </AtmosphereMenu>
      </HashRouter>
    </div>
  );
}

export default App;