import Contact from '@/sections/Contacts';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <>{children}</>
      <Contact />
    </>
  );
};

export default Layout;
