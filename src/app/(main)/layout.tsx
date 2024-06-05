import Contacts from '@/sections/Contacts';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Contacts />
    </>
  );
};

export default Layout;
