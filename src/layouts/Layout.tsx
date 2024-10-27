import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white px-5 py-4">
        <nav>
          <Link to="/" className="mr-4 font-semibold">Home</Link>
        </nav>
      </header>
      <main className="flex-grow p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;