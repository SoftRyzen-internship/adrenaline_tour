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
              className='prose-h2:mb-4 prose-h2:mt-8 prose-h2:font-inter prose-h2:text-[18px] prose-h2:font-bold prose-h2:leading-[1.1] prose-h2:text-blueDefault prose-p:font-inter prose-p:text-[14px] prose-p:font-normal prose-p:leading-[1.3] prose-p:text-[#4D4843] prose-ul:list-disc  prose-ul:pl-6 prose-ul:font-inter prose-ul:text-[14px] prose-ul:font-normal prose-ul:leading-[1.3] prose-ul:text-[#4D4843] md:prose-h2:mt-10 md:prose-h2:text-[20px] md:prose-h2:leading-[1.3] md:prose-p:text-[16px] md:prose-p:leading-[1.4]  md:prose-ul:text-[16px] md:prose-ul:leading-[1.4] xl:prose-h2:mb-6 xl:prose-p:text-[18px] xl:prose-p:leading-[1.5] xl:prose-ul:text-[18px] xl:prose-ul:leading-[1.5]'
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Policy;
