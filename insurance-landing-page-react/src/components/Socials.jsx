import logoSVG from '../images/logo.svg';
import fbLogo from '../images/icon-facebook.svg';
import twitterLogo from '../images/icon-twitter.svg';
import pinterestLogo from '../images/icon-pinterest.svg';
import instaLogo from '../images/icon-instagram.svg';
import bgPattern from '../images/bg-pattern-footer-mobile.svg';

export default function Socials() {
    return (
        <section className='flex flex-col gap-4 justify-center items-center h-44 relative'>
            <img src={bgPattern} alt='Pattern' className='absolute inset-x-0 top-0'/>
            <img src={logoSVG} alt='Logo' className='z-0'/>
            <ul className='flex gap-4 z-0'>
                <li><img src={fbLogo} alt='Social media logo'/></li>
                <li><img src={twitterLogo} alt='Social media logo'/></li>
                <li><img src={pinterestLogo} alt='Social media logo'/></li>
                <li><img src={instaLogo} alt='Social media logo'/></li>
            </ul>
            <hr />
        </section>
    )
}