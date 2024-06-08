// import { PortableText } from '@portabletext/react';

import { fetchPrivacyPolicy } from '@/actions/requests/fetchPrivacyPolicy';
// import { CustomComponent } from '@/components/common/CustomComponent';

const Policy = async () => {
  const policy = await fetchPrivacyPolicy();

  return (
    <section className='section pt-[148px] md:pt-[172px] xl:pt-[224px]'>
      <div className='container'>
        {policy && (
          <>
            <h1 className='mb-10 text-center font-inter text-lightLarge font-bold uppercase text-blueDefault md:mb-14 md:text-extraLarge xl:mb-16 xl:text-[40px] xl:leading-[44px]'>
              {policy.title}
            </h1>
            <p>{policy.text}</p>
            {/* <PortableText value={policy.text} components={CustomComponent} /> */}
          </>
        )}
      </div>
    </section>
  );
};

export default Policy;
