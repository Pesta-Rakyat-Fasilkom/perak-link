import { FC } from "react"
import Image from "next/image"

interface AvatarProps {
  className?: string
  src: string
}

export const Avatar: FC<AvatarProps> = ({ className, src }) => {
  return (
    <div className={`${className} relative aspect-square border-2 border-fanta rounded`}>
      <Image className="rounded-sm" src={src} alt="Avatar" layout="fill" objectFit="cover" />
    </div>
  )
}
