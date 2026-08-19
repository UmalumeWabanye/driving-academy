import React from 'react';

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export function ImageWithFallback({
  src,
  alt,
  ...props
}: ImageWithFallbackProps) {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
    />
  );
}
