import Link from "next/link";

const Headline = ({ title, headlineLink }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='left'>
        <h2 className='text-4xl font-fontM font-bold'>{title}</h2>
      </div>
      <div className='right'>
        <Link
          href={`${headlineLink}`}
          className='text-base font-bold bg-yellow-200 px-3 rounded-md shadow-md'
        >
          सबै
        </Link>
      </div>
    </div>
  );
};

export default Headline;
