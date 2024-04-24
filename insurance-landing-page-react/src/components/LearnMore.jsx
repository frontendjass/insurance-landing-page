import bgPattern from '../images/bg-pattern-how-we-work-mobile.svg';

export default function LearnMore() {
    return (
        <section className="relative bg-slate-800 mx-6 my-36 h-80 flex flex-col items-center justify-center gap-8 px-4  z-0">
            <img src={bgPattern} alt='Pattern' className='absolute inset-y-0 right-0 z-[-1]'/>
            <h2 className="text-white text-4xl text-center ">Find out more about how we work</h2>
            <button className="text-white border py-2 px-6">How we work</button>
        </section>
    );
};