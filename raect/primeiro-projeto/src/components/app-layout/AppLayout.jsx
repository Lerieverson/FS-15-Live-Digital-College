import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <header>
        MENUS
      </header>
      <main>
         <Outlet />
      </main>
      <footer>
        RODAPÉ
      </footer>
    </>
  );
}
export default AppLayout;