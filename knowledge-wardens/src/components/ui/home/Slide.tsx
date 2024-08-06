import Image from 'next/image';

type SlideProps = {
  techName: string;
};

export function Slide({ techName }: SlideProps) {
  return (
    <div className="flex-grow-0 h-64 relative">
      <Image
        className="object-contain"
        src={`/${techName}.svg`}
        fill
        alt={`${techName}'s image`}
      />
    </div>
  );
}
