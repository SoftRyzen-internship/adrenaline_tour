export interface LayoutProps {
  img: React.ReactNode;
  mainInfo: React.ReactNode;
  plans: React.ReactNode;
  rent: React.ReactNode;
  services: React.ReactNode;
  details: React.ReactNode;
  gallery: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  img,
  mainInfo,
  plans,
  rent,
  services,
  details,
  gallery,
}) => {
  return (
    <>
      <section className='pb-20 md:pb-[120px] md:pt-[128px] xl:pb-20 xl:pt-[160px]'>
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
            <div>{details}</div>
          </div>
        </div>
      </section>
      <section className='section'>{gallery}</section>
    </>
  );
};

export default Layout;
