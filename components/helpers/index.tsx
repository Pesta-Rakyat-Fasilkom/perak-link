export const getNickName = (name: string) => {
  return name.split(" ")[0]
}

export const getSize = (type: "text" | "spacing", size: string) => {
  const sizes: any = {
    text: {
      desktop: "text-[36px]",
      tablet: "text-[30px]",
      mobile: "text-[24px]",
      xxs: "text-[12px]",
      xs: "text-[16px]",
      sm: "text-[24px]",
      md: "text-[30px]",
      lg: "text-[36px]",
      xl: "text-[48px]",
      xxl: "text-[64px]",
    },
    spacing: {
      desktop: "w-[36px] h-[36px]",
      tablet: "w-[30px] h-[30px]",
      mobile: "w-[24px] h-[24px]",
      xxs: "w-[12px] h-[12px]",
      xs: "w-[16px] h-[16px]",
      sm: "w-[24px] h-[24px]",
      md: "w-[30px] h-[30px]",
      lg: "w-[36px] h-[36px]",
      xl: "w-[48px] h-[48px]",
      xxl: "w-[64px] h-[64px]",
    },
  }

  return sizes[type][size]
}

export const generateCapacityTag = (value: any) => {
  try {
    const { minimumPlayer, maximumPlayer } = value?.attributes
    return maximumPlayer === 0 || !maximumPlayer
      ? minimumPlayer
      : `${minimumPlayer}-${maximumPlayer}`
  } catch {
    return ""
  }
}

export const gamesFilter = (currentTab: number, a: any) => {
  switch (currentTab) {
    case 0:
      return true
    case 1:
      return a?.attributes.tipe === "competitiveGame"
    case 2:
      return a?.attributes.tipe === "familyGame"
  }
}

export const gameMap: any = {
  competitiveGame: "Competitive Game",
  familyGame: "Family Game",
}

export const getDateString = (value: string, withTime: boolean = false) => {
  if (withTime) {
    return new Date(value).toLocaleTimeString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  } else {
    return new Date(value).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }
}

export const toLowerCaseAndCapitalize = (value: string) => {
  if (!value) return ""
  const splitString = value.split(" ")
  return splitString
    .map((item) => {
      const lowerCase = item.toLowerCase()
      return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    })
    .join(" ")
}
