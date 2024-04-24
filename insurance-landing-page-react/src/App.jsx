import KeyFeatures from './components/KeyFeatures';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import LearnMore from './components/LearnMore';
import FooterNav from './components/FooterNav';
import './index.css';
import Socials from './components/Socials';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <KeyFeatures />
        <LearnMore />
      </main>
      <footer className='bg-stone-50'>
        <Socials />
        <FooterNav
          title='Our company'
          links={['How we work', 'Why Insure?', 'View plans']}
        />
        <FooterNav
          title='FAQ'
          links={['Terms of use', 'Privacy policy', 'Cookies']}
        />
        <FooterNav title='Contact' links={['Sales', 'Support', 'Live chat']} />
        <FooterNav title='Others' links={['Careers', 'Press', 'Licenses']} />

        <div>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Jass</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
