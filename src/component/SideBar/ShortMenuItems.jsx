import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShortMenuItems = ({ clickHandler, items }) => {
    const { selectedMenu } = useSelector((state) => state.youtubeApp);
    const navigate = useNavigate();

    return (
        <div>
            {items.map((item, i) => {
                const { name, icon, type, divider } = item;
                return (
                    <div key={i}>
                        <LeftNavMenuItem
                            text={name === 'New' ? 'Home' : name}
                            icon={icon}
                            action={() => {
                                clickHandler(type, name);
                                navigate('/');
                            }}
                            className={`${selectedMenu === name ? 'bg-white/[0.15]' : ''}`}
                        />
                        {divider && <hr className='my-5 border-white/[0.2]' />}
                    </div>
                );
            })}
        </div>
    );
};

const LeftNavMenuItem = ({ text, icon, action, className }) => {
    return (
        <div
            className={`text-white text-base mt-1 cursor-pointer px-1 py-5 flex flex-col items-center justify-center gap-2 mb-1 rounded-lg hover:bg-white/[0.15]  ${className}`}
            onClick={action}
        >
            <span className='text-xl'>{icon}</span>
            <span className='text-xs'>{text}</span>
        </div>
    );
};

ShortMenuItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickHandler: PropTypes.func.isRequired,
};

LeftNavMenuItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.node,
    action: PropTypes.func,
    className: PropTypes.string,
};

export default ShortMenuItems;
