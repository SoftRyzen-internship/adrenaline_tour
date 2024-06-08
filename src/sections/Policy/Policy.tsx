import showdown from 'showdown';

import { fetchPrivacyPolicy } from '@/actions/requests/fetchPrivacyPolicy';

const converter = new showdown.Converter();

const Policy = async () => {
  const policy = await fetchPrivacyPolicy();

  const htmlContent = converter.makeHtml(policy.text);

  return (
    <section className='section pt-[148px] md:pt-[172px] xl:pt-[224px]'>
      <div className='container'>
        {policy && (
          <div>
            <h1 className='mb-10 text-center font-inter text-lightLarge font-bold uppercase text-blueDefault md:mb-14 md:text-extraLarge xl:mb-16 xl:text-[40px] xl:leading-[44px]'>
              {policy.title}
            </h1>
            <div
              className='prose-h2:mb-4 prose-h2:mt-8 prose-h2:font-inter prose-h2:text-[14px] prose-h2:font-bold prose-h2:uppercase prose-h2:leading-[1.15] prose-h2:text-blueDefault prose-p:font-inter prose-p:text-[14px] prose-p:text-light prose-p:font-light prose-p:leading-[1.35] prose-p:tracking-[-0.28px] prose-a:text-[14px] prose-a:font-light prose-a:leading-[1.35] prose-a:tracking-[-0.28px] prose-ul:list-disc prose-ul:pl-6 prose-ul:font-inter prose-ul:text-[14px] prose-ul:text-light prose-ul:font-light prose-ul:leading-[1.35] prose-ul:tracking-[-0.28px] md:prose-h2:mt-10 md:prose-h2:text-[16px] md:prose-h2:leading-[1.30] md:prose-p:text-[16px] md:prose-p:tracking-[-0.32px] md:prose-a:text-[16px] md:prose-a:tracking-[-0.32px] md:prose-ul:text-[16px] md:prose-ul:tracking-[-0.32px] xl:prose-h2:mb-6 xl:prose-h2:text-[20px] xl:prose-p:text-[18px] xl:prose-p:tracking-[-0.36px] xl:prose-a:text-[18px] xl:prose-a:tracking-[-0.36px] xl:prose-ul:text-[18px] xl:prose-ul:tracking-[-0.36px]'
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Policy;
