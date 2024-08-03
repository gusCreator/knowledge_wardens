import Image from "next/image";

type UserInfoProps = {
  name: string;
  image: string;
  email: string;
}

export function UserInfo({ name, image, email }: UserInfoProps) {
  return (
    <article className="flex gap-2">
      <div className="relative rounded-full w-36 h-36 overflow-hidden flex-shrink-0">
        <Image
          className="object-cover object-center"
          sizes="11rem, 176px"
          priority
          fill
          src={image}
          alt={`${name}'s avatar`} />
      </div>
      <div className="flex flex-1 flex-col self-center gap-2">
        <h5 className="font-semibold text-l">{name}</h5>
        <h6 className="italic text-s">{email}</h6>
      </div>
    </article>
  )
}