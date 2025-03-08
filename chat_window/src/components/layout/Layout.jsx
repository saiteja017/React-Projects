import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="h-[80vh] flex">
      
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;
