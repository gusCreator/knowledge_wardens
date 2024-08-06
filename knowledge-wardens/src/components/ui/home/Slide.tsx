import Image from 'next/image';

type SlideProps = {
  techName: string;
};

export function Slide({ techName }: SlideProps) {
  return (
    <div className="relative">
      <Image
        className="w-full h-full"
        src={`/${techName}.svg`}
        width={200}
        height={100}
        alt={`${techName}'s image`}
      />
    </div>
  );
}
