import heroImg from '../images/image-intro-mobile.jpg';
import mobileLeft from '../images/bg-pattern-intro-left-mobile.svg';
import mobileRight from '../images/bg-pattern-intro-right-mobile.svg';

export default function Hero() {
  return (
    <section>
      <div className='relative'>
        
        <img src={heroImg} alt='A happy family' className='w-screen' />
      </div>

      <div className=' bg-slate-800 h-screen relative z-0'>
      <img className='absolute z-[-1]' alt='Pattern' src={mobileLeft} />
      <div className='flex flex-col justify-center items-center gap-7 h-full px-7'>
         <h1 className='text-slate-100 text-center text-5xl'>Humanizing your insurance.</h1>
        <p className='text-slate-100 text-center'>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className='text-slate-100 border p-3'>View Plans</button>
      </div>
        <img src={mobileRight} alt='Pattern' className='absolute z-[-1] bottom-0 right-0'/>
      </div>
    </section>
  );
}
