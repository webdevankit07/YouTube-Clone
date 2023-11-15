import { useDispatch, useSelector } from 'react-redux';
import { setFooterCreativeSection } from '../../features/YouTube/youtubeSlice';
import { TfiClose } from 'react-icons/tfi';
import { SiGradleplaypublisher } from 'react-icons/si';
import { LiaUploadSolid } from 'react-icons/lia';
import { HiMiniSignal } from 'react-icons/hi2';
import { PiNotePencilDuotone } from 'react-icons/pi';

const CreativeSection = () => {
    const { footerCreativeSection } = useSelector((state) => state.youtubeApp);
    const dispatch = useDispatch();

    return (
        footerCreativeSection && (
            <div
                className='absolute top-0 left-0 w-full h-[100vh] flex items-end text-white bg-black/[0.7]'
                onClick={() => dispatch(setFooterCreativeSection(false))}
            >
                <div className='w-full bg-gray-950 rounded-t-2xl'>
                    <div className='flex items-center justify-between px-3 py-4'>
                        <h1 className='text-lg font-semibold'>Create</h1>
                        <TfiClose className='text-xl' />
                    </div>
                    <div className='flex flex-col justify-center gap-5 px-3 mb-5'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-white/[0.1] rounded-full'>
                                <SiGradleplaypublisher className='text-xl' />
                            </div>
                            <p className='text-base font-normal'>Create a Short</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-white/[0.1] rounded-full'>
                                <LiaUploadSolid className='text-xl' />
                            </div>
                            <p className='text-base font-normal'>Upload a video</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-white/[0.1] rounded-full'>
                                <HiMiniSignal className='text-xl' />
                            </div>
                            <p className='text-base font-normal'>Go Live</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-white/[0.1] rounded-full'>
                                <PiNotePencilDuotone className='text-xl' />
                            </div>
                            <p className='text-base font-normal'>Create a Post</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default CreativeSection;
