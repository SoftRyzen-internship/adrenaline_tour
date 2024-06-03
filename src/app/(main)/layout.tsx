import Contacts from '@/sections/Contacts/Contact';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <>{children}</>
      <Contacts />
    </>
  );
};

export default Layout;
