'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PropTypes from 'prop-types';

const DotLottieNext = ({ src }) => {
	return <DotLottieReact src={src} loop autoplay />;
};

DotLottieNext.propTypes = {
	src: PropTypes.string.isRequired,
};

export default DotLottieNext;
