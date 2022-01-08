import { Instagram, Youtube, Twitter } from "@icons"
import { SocialMediaProps } from "./interface"

export const socialMedia: SocialMediaProps[] = [
  {
    title: "@perakfasilkom",
    link: "https://www.instagram.com/perakfasilkom/",
    icon: <Instagram className="stroke-current" fill="fill-none" />,
    placement: "left",
  },
  {
    title: "Pesta Rakyat Fasilkom",
    link: "https://www.youtube.com/c/PestaRakyatKomputer",
    icon: <Youtube className="stroke-current" fill="fill-none" />,
    placement: "top",
  },
  {
    title: "@perakfasilkom",
    link: "https://twitter.com/perakfasilkom",
    icon: <Twitter className="stroke-current" fill="fill-none" />,
    placement: "right",
  },
]
