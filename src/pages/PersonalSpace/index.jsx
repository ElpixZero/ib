import React from 'react';
import Cookies from 'universal-cookie';

import PersonalSpaceLoginIcon from '../../img/PersonalSpaceLoginIcon.svg';
import personalSpaceSidebarMainIcon from '../../img/personalSpaceSidebarMainIcon.svg';
import PersonalSpaceProfileIcon from '../../img/PersonalSpaceProfileIcon.svg';
import PersonalSpaceOfficialIcon from '../../img/PersonalSpaceOfficialIcon.svg';
import PsMainPage from '../../components/PsMainPage';
import PsProfilePage from '../../components/PsProfilePage';
import PsLicensePage from '../../components/PsLicensePage';
import './index.css';


function Main() {
  const cookies = new Cookies();
  const [mainBarPage, setMainBarPage] = React.useState(0);
  const mainBarPages = {
    0: <PsMainPage />,
    1: <PsProfilePage />,
    2: <PsLicensePage />,
  };

  (function checkAuthorized() {
    if (cookies.get('isAuth') !== 'true') {
      window.location.href = '/';
    }
  })();

  return (
    <div className="lkContainer">
      <div className="lkSidebar">
        <div className="lkSidebarTitle">
          <div className="lkSiderbarTitleIcon">
            <img src={PersonalSpaceLoginIcon} />
          </div>
          <span className="lkSidebarTitleText">Логин</span>
        </div>
        <div className="lkSidebarContent">
          <ul>
            <li className={`lkSidebarContentElem${mainBarPage === 0 ? ' lkSidebarContentElemActive' : ''}`} onClick={() => setMainBarPage(0)}>
              <img src={personalSpaceSidebarMainIcon} />
              <span className="lkSidebarContentElemText">Главная</span>
            </li>
            <li className={`lkSidebarContentElem${mainBarPage === 1 ? ' lkSidebarContentElemActive' : ''}`}  onClick={() => setMainBarPage(1)}>
              <img src={PersonalSpaceProfileIcon} />
              <span className="lkSidebarContentElemText">Профиль</span>
            </li>
            <li className={`lkSidebarContentElem${mainBarPage === 2 ? ' lkSidebarContentElemActive' : ''}`}  onClick={() => setMainBarPage(2)}>
              <img src={PersonalSpaceOfficialIcon} />
              <span className="lkSidebarContentElemText">Лицензии</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lkMainScreen">
        {mainBarPages[mainBarPage]}
      </div>
    </div>
  );
}

export default Main;
