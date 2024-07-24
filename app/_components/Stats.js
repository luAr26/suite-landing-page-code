/** @format */

import Stat from "./Stat";

function Stats() {
  const stats = [
    {
      title: "2k+",
      subtitle: "companies",
    },
    {
      title: "8",
      subtitle: "languages",
    },
    {
      title: "1.2M",
      subtitle: "leads",
    },
  ];

  return (
    <div className='flex flex-col gap-8 tablet:flex-row tablet:gap-0 tablet:justify-between desktop:flex-col'>
      {stats.map(({ title, subtitle }) => (
        <Stat key={title} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
}

export default Stats;
