import NextImage, { ImageProps } from "next/image";

const basePath = process.env.BASE_PATH || "";

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const normalizedSrc =
    typeof src === "string" && src.startsWith("/") ? src.slice(1) : src;

  return <NextImage src={`${basePath}/${normalizedSrc}`} {...props} />;
};
