import Phones from '@/components/ui/Phones';
import Contacts from '@/sections/Contacts';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Contacts>
        <Phones
          variant='contacts'
          className='smOnly:pl-[10px] xl:w-1/2 notXL:mb-[60px]'
        />
      </Contacts>
    </>
  );
};

export default Layout;
