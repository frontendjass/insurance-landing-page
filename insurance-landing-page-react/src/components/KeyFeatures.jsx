import snappyIcon from '../images/icon-snappy-process.svg';
import affordableIcon from '../images/icon-affordable-prices.svg';
import peopleIcon from '../images/icon-people-first.svg';

export default function KeyFeatures() {
  const features = [
    {
      title: 'Snappy Process',
      description: `Our application process can be completed in minutes, not hours.
  Don’t get stuck filling in tedious forms.`,
  icon: snappyIcon,
    },
    {
      title: 'Affordable Prices',
      description: `We don’t want you worrying about high monthly costs. Our prices may
    be low, but we still offer the best coverage possible.`,
    icon: affordableIcon,
    },
    {
      title: 'People First',
      description: `Our plans aren’t full of conditions and clauses to prevent payouts.
    We make sure you’re covered when you need it.`,
    icon: peopleIcon,
    },
  ];

  return (
    <section className='mt-28'>
    <hr className='mx-16 mb-8'/>
      <h2 className="text-5xl text-center">We're different</h2>
      <ul className='px-8 space-y-16 my-16'>
      {features.map((feature, index) => (
        <li key={index} className="flex flex-col justify-center items-center space-y-2">
          <img src={feature.icon} alt='Icon'/>
          <h3 className="text-3xl">{feature.title}</h3>
          <p className='text-center'>{feature.description}</p>
        </li>
      ))}
      </ul>
    </section>
  );
}
