import CardTips from '@/components/ui/CardTips';
import { tipsData } from '@/data';

const Tips = () => {
  return (
    <section className='section'>
      <div className='container'>
        <ul className='flex flex-col gap-3 md:gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-4'>
          {tipsData.cards.map(({ id, title, text }) => {
            return <CardTips key={id} title={title} text={text} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Tips;
