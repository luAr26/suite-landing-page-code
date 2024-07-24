/** @format */

function Stat({ title, subtitle }) {
  return (
    <div className='text-center'>
      <h3 className='font-bold text-[3rem] leading-[1.1667] tracking-normal'>
        {title}
      </h3>
      <p className='text-sm uppercase text-grey'>{subtitle}</p>
    </div>
  );
}

export default Stat;
