import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
}

export const Image = ({ src, alt, ...rest }: ImageProps) => {
	return <img src={src} alt={alt} {...rest} />;
};
