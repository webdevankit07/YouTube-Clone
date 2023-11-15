import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MenuItems = ({ items, clickHandler, heading }) => {
    const { selectedMenu } = useSelector((state) => state.youtubeApp);
    const navigate = useNavigate();

    return (
        <div>
            {heading && (
                <h2 className='px-2 text-lg font-semibold text-white capitalize'>{heading}</h2>
            )}
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
                        {divider && (
                            <hr className='block my-2 sm:my-3 md:my-4 border-white/[0.2]' />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const LeftNavMenuItem = ({ text, icon, action, className }) => {
    // console.log(iconColor);
    return (
        <div
            className={`text-white text-sm md:text-base mt-2 cursor-pointer px-3 h-10 flex items-center mb-[1px] rounded-lg hover:bg-white/[0.15]  ${className}`}
            onClick={action}
        >
            <span className={`mr-5 text-lg md:text-xl `}>{icon}</span>
            {text}
        </div>
    );
};

MenuItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickHandler: PropTypes.func.isRequired,
    heading: PropTypes.string,
};

LeftNavMenuItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.node,
    action: PropTypes.func,
    className: PropTypes.string,
};

export default MenuItems;
