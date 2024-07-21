/** @format */

function Stat({ title, subtitle }) {
  return (
    <div className='text-center'>
      <h3 className='font-bold text-[48px] leading-[56px] tracking-normal'>
        {title}
      </h3>
      <p className='text-sm uppercase text-grey'>{subtitle}</p>
    </div>
  );
}

export default Stat;
