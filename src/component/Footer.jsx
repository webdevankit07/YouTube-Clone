import { footerLinks, footerLinks2 } from '../utils/constants';

const Footer = () => {
    return (
        <div className='mb-1 sm:mb-5'>
            <div className='flex-wrap hidden mb-4 sm:flex md:text-sm'>
                {footerLinks.map(({ name, link }, i) => (
                    <div key={i}>
                        <a
                            href={link}
                            className='mx-1 text-xs font-semibold md:text-sm md:mx-2'
                            target='_blank'
                            rel='noreferrer'
                        >
                            {name}
                        </a>
                    </div>
                ))}
            </div>
            <div className='flex-wrap hidden mb-4 sm:flex'>
                {footerLinks2.map(({ name, link }, i) => (
                    <div key={i}>
                        <a
                            href={link}
                            className='mx-1 text-xs font-semibold md:text-sm md:mx-2 '
                            target='_blank'
                            rel='noreferrer'
                        >
                            {name}
                        </a>
                    </div>
                ))}
            </div>
            <p className='mx-2 text-[12px]'>&copy; {new Date().getFullYear()} Google LLC</p>
        </div>
    );
};

export default Footer;
