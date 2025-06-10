import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* <Header /> */}
      <main className="flex flex-grow flex-col items-center justify-center w-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
