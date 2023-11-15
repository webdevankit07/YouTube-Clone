import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({ src, className, alt }) => {
    return <LazyLoadImage className={className} src={src} alt={alt || ''} effect='blur' />;
};

Img.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
};

export default Img;
