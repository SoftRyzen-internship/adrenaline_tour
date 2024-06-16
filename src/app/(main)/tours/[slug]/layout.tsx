export interface LayoutProps {
  children: React.ReactNode;
  img: React.ReactNode;
  mainInfo: React.ReactNode;
  plans: React.ReactNode;
  rent: React.ReactNode;
  services: React.ReactNode;
  details: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  img,
  mainInfo,
  plans,
  rent,
  services,
  details,
}) => {
  return (
    <>
      <section className='pb-10 md:pb-[60px] md:pt-[128px] xl:pb-20 xl:pt-[160px]'>
        <div className='xl:hidden'>
          {img}
          {mainInfo}
          {details}
          {plans}
          {services}
          {rent}
        </div>
        <div className='notXL:hidden'>
          {img}
          <div className='xl:container xl:flex xl:gap-16'>
            <div>
              {mainInfo}
              {plans}
              {services}
              {rent}
            </div>
            {details}
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default Layout;
