//! ............ React Icons ...........................
import { AiOutlineFlag, AiOutlinePlaySquare } from 'react-icons/ai';
import { MdLocalFireDepartment, MdOutlineVideoLibrary, MdPodcasts } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm, FiShoppingBag } from 'react-icons/fi';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';
import {
    SiGradleplaypublisher,
    SiYoutubegaming,
    SiYoutubemusic,
    SiYoutubestudio,
} from 'react-icons/si';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import { PiUserRectangle } from 'react-icons/pi';
import { GoHistory } from 'react-icons/go';
import { HiSignal } from 'react-icons/hi2';
import { BsYoutube } from 'react-icons/bs';
import { TbBrandYoutubeKids } from 'react-icons/tb';
import { GoHomeFill } from 'react-icons/go';

export const homeSection = [
    { name: 'New', icon: <GoHomeFill />, type: 'category' },
    { name: 'Shorts', icon: <SiGradleplaypublisher />, type: 'category' },
    { name: 'Subscription', icon: <MdOutlineSubscriptions />, divider: true },
];
export const mySection = [
    { name: 'Your Channel', icon: <PiUserRectangle /> },
    { name: 'History', icon: <GoHistory /> },
    { name: 'Your Videos', icon: <AiOutlinePlaySquare /> },
    { name: 'Watch Later', icon: <IoMdTime />, divider: true },
];
export const exploreSection = [
    { name: 'Trending', icon: <MdLocalFireDepartment />, type: 'category' },
    { name: 'Shopping', icon: <FiShoppingBag />, type: 'category' },
    { name: 'Music', icon: <CgMusicNote />, type: 'category' },
    { name: 'Films', icon: <FiFilm />, type: 'category' },
    { name: 'Live', icon: <HiSignal />, type: 'category' },
    { name: 'Gaming', icon: <SiYoutubegaming />, type: 'category' },
    { name: 'News', icon: <ImNewspaper />, type: 'category' },
    { name: 'Sports', icon: <GiDiamondTrophy />, type: 'category' },
    { name: 'Learning', icon: <RiLightbulbLine />, type: 'category' },
    { name: 'Fashion & beauty', icon: <GiEclipse />, type: 'category' },
    {
        name: 'Podcast',
        icon: <MdPodcasts />,
        type: 'category',
        divider: true,
    },
];

export const settingsSection = [
    { name: 'Settings', icon: <FiSettings />, type: 'menu' },
    { name: 'Report History', icon: <AiOutlineFlag />, type: 'menu' },
    { name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
    { name: 'Send feedback', icon: <RiFeedbackLine />, type: 'menu', divider: true },
];

export const moreSection = [
    { name: 'YouTube Premium', icon: <BsYoutube className='text-red-600' />, iconColor: true },
    { name: 'YouTube Studio', icon: <SiYoutubestudio className='text-red-600' />, iconColor: true },
    { name: 'YouTube Music', icon: <SiYoutubemusic className='text-red-600' />, iconColor: true },
    {
        name: 'YouTube Kids',
        icon: <TbBrandYoutubeKids className='text-red-600' />,
        iconColor: true,
        divider: true,
    },
];

export const shortSideBar = [
    { name: 'New', icon: <GoHomeFill />, type: 'category' },
    { name: 'Shorts', icon: <SiGradleplaypublisher />, type: 'category' },
    { name: 'Subscription', icon: <MdOutlineSubscriptions />, type: 'menu' },
    { name: 'You', icon: <MdOutlineVideoLibrary />, type: 'menu' },
];

export const footerLinks = [
    { name: 'About', link: 'https://about.youtube/' },
    { name: 'Press', link: 'https://blog.youtube/' },
    { name: 'Copyright', link: 'https://www.youtube.com/howyoutubeworks/policies/copyright/' },
    { name: 'Contact Us', link: 'https://www.youtube.com/t/contact_us/' },
    { name: 'Creator', link: 'https://www.youtube.com/creators/' },
    { name: 'Advertise', link: 'https://youtube.com/ads/' },
    { name: 'Developers', link: 'https://developers.google.com/youtube' },
];

export const footerLinks2 = [
    { name: 'Terms', link: 'https://www.youtube.com/t/terms' },
    { name: 'Privacy', link: 'https://policies.google.com/privacy?hl=en-GB' },
    {
        name: 'Policy & Safety',
        link: 'https://www.youtube.com/howyoutubeworks/policies/community-guidelines/',
    },
    {
        name: 'How YouTube works',
        link: 'https://www.youtube.com/howyoutubeworks/',
    },
    { name: 'Test new features', link: 'https://www.youtube.com/new' },
];

export const selectSearchTerms = [
    'All',
    'Live',
    'Factorious World',
    'JavaScript',
    'ReactJs',
    'Web Development',
    'Thapa Technical',
    'CWH Javascript',
    'Algorithms',
    'Music',
    'Vlog',
    'Movies',
    'BollyWood Movies',
    'HollyWood Movies',
    'Gaming',
    'New to you',
];
