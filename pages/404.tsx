import { Button, Header, Paragraph } from "@elements"
import type { NextPage } from "next"
import { useRouter } from "next/router"

const NotFound: NextPage = () => {
  const router = useRouter()
  return (
    <div className="bg-black-300 pb-16 min-h-screen pt-20 flex flex-col items-center justify-center space-y-4">
      <img src="/assets/pixel-character.svg" />
      <Header size="xl" className="text-lemon text-shadow-salmon">
        Upss..
      </Header>
      <Paragraph size="md" className="text-white text-center">
        Sepertinya laman yang kamu cari tidak ditemukan.
        <br />
        Kembali ke beranda dan temukan keseruan lainnya di PERAK 2022
      </Paragraph>
      <div className="flex">
        <Button variant="variant2" onClick={() => router.push("/")}>
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  )
}

export default NotFound
