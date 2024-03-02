import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
	return (
		// <div id="image_container" >
		<img src={src} alt={alt} {...rest} />
		// </div>
	);
};
