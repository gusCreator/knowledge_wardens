import Image from "next/image";

type UserInfoProps = {
  name: string;
  image: string;
  email: string;
}

export function UserInfo({ name, image, email }: UserInfoProps) {
  return (
    <article className="flex gap-2">
      <div>
        <Image className="rounded-full" width={90} height={90} quality={100} src={image} alt={`${name}'s avatar`} />
      </div>
      <div className="flex flex-1 flex-col self-center gap-2">
        <h5 className="font-semibold text-l">{name}</h5>
        <h6 className="italic text-s">{email}</h6>
      </div>
    </article>
  )
}