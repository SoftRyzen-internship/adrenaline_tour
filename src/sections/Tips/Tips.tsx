import CardTips from '@/components/ui/CardTips';
import { tipsData } from '@/data';

const Tips = () => {
  return (
    <section className='section bg-[#F5FAFD]'>
      <div className='container'>
        <h2 className='section-title mb-8 text-blueDefault md:mb-12 xl:mb-16'>
          {tipsData.title[0]}
          <br />
          {tipsData.title[1]}
        </h2>
        <ul className='mb-8 flex flex-col gap-3 md:mb-12 md:gap-4 xl:mb-16 xl:flex-row xl:items-center xl:justify-between xl:gap-4'>
          {tipsData.cards.map(({ id, title, text }) => {
            return <CardTips key={id} title={title} text={text} />;
          })}
        </ul>
        <div>Місце для Аккардіона</div>
      </div>
    </section>
  );
};

export default Tips;
