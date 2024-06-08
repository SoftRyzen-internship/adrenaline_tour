import { PortableText } from '@portabletext/react';

import { fetchPrivacyPolicy } from '@/actions/requests/fetchPrivacyPolicy';
import { CustomComponent } from '@/components/common/CustomComponent';

const Policy = async () => {
  const policy = await fetchPrivacyPolicy();

  return (
    <section className='section'>
      <div className='container'>
        {policy && (
          <>
            <h1 className=''>{policy.title}</h1>
            <PortableText value={policy.text} components={CustomComponent} />
          </>
        )}
      </div>
    </section>
  );
};

export default Policy;
