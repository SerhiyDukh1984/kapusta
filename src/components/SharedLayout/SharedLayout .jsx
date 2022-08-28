import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';
import UserMenuHeader from 'components/UserMenuHeader/UserMenuHeader';
import { getIsAuth } from 'redux/auth/AuthSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './sharedLayout.module.css';

const SharedLayout = () => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(getIsAuth);

  return (
    <>
      {isLoggedIn ? <UserMenuHeader /> : <Header />}
      <section className={pathname === '/' ? s.section : s.sectionHome}>
        <div className={s.container}>
          <div className={s.background}>
            {pathname === '/' && (
              <div className={s.bottomSection}>
                <h1 className={s.title}>Kapusta</h1>
                <p className={s.tittleText}>Smart Finance</p>
              </div>
            )}
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
