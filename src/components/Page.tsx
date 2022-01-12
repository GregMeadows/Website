import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import HideOnMobile from './HideOnMobile';

const Page: FunctionComponent = function Page() {
  return (
    <>
      <HideOnMobile>
        <Header />
      </HideOnMobile>
      <Outlet />
    </>
  );
};

export default Page;
