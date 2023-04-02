import Image, { ImageProps } from 'next/image';

export interface SajuImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  sajuNo: string;
}

function SajuImage({ sajuNo, ...props }: SajuImageProps) {
  const src = sajuNo
    ? `/images/${String(parseInt(sajuNo) + 1).padStart(2, '0')}@3x.png`
    : undefined;
  if (!src) return <></>;
  return (
    <Image width={320} height={320} {...props} src={src} alt="사주 이미지" />
  );
}

export default SajuImage;
