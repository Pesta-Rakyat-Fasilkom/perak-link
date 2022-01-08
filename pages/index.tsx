import React, { useState } from "react"
import type { NextPage } from "next"

import { Button, Header, Paragraph, Tabs, TextField, Clipboard } from "components/elements"
import { useForm, Controller } from "react-hook-form"
import { useSnackbar } from "notistack"

const Home: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [response, setResponse] = useState<any>(null)
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
  })

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/addLink", {
      method: "POST",
      body: new URLSearchParams({
        newLink: data.shortUrl,
        url: data.longUrl,
      }),
    })

    const apiData = await res.json()
    if (!res.ok) {
      enqueueSnackbar(apiData?.message, { variant: "error" })
    } else {
      enqueueSnackbar("Anda berhasil membuat PERAK.Link baru!", { variant: "success" })
      setResponse(apiData)
    }
  }

  return (
    <div className="bg-black-300 pb-16 min-h-screen pt-20 flex flex-col space-y-8 justify-center items-center">
      <div className="flex flex-col items-center max-w-sm w-full space-y-8 p-8 sm:p-0">
        <div className="text-center">
          <Header size="desktop" className="text-lemon text-shadow-salmon">
            PERAK.Link
          </Header>
          <Paragraph type="bold" size="md" className="text-white">
            Salin. Generate. Bagikan
          </Paragraph>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
            <Controller
              name="longUrl"
              control={control}
              rules={{
                required: "Anda harus memasukkan URL untuk diperpendek.",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Link harus berupa URL valid.",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
                return (
                  <div onBlur={onBlur}>
                    <TextField
                      error={Boolean(error)}
                      message={error?.message}
                      value={value}
                      onChange={onChange}
                      label="Masukkan URL"
                    ></TextField>
                  </div>
                )
              }}
            />
            <Controller
              name="shortUrl"
              control={control}
              rules={{
                required: "Anda harus memasukkan URL pendek.",
                pattern: {
                  value: /^[a-zA-Z0-9_-]*$/,
                  message: "Link pendek hanya bisa terdiri dari huruf dan angka.",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { invalid, isTouched, isDirty, error },
              }) => {
                return (
                  <div onBlur={onBlur}>
                    <TextField
                      error={Boolean(error)}
                      message={error?.message}
                      value={value}
                      onChange={onChange}
                      label="perak.link/"
                    ></TextField>
                  </div>
                )
              }}
            />
            <Button
              variant="variant3"
              className="w-full flex items-center justify-center space-x-2"
              type="submit"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 11.9976C14.5 9.5059 12.183 7 9.35714 7C9.02241 7 7.91904 7.00001 7.64286 7.00001C4.80254 7.00001 2.5 9.23752 2.5 11.9976C2.5 14.376 4.20973 16.3664 6.5 16.8714C6.86756 16.9525 7.25006 16.9952 7.64286 16.9952"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 11.9976C10.5 14.4893 12.817 16.9952 15.6429 16.9952C15.9776 16.9952 17.081 16.9952 17.3571 16.9952C20.1975 16.9952 22.5 14.7577 22.5 11.9976C22.5 9.6192 20.7903 7.62884 18.5 7.12383C18.1324 7.04278 17.7499 6.99999 17.3571 6.99999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Generate PERAK.Link</span>
            </Button>
          </form>
        </div>
      </div>
      {response && (
        <div className="w-full max-w-md">
          <div className="w-full space-y-4">
            <Header size="sm" className="text-lemon text-shadow-salmon text-center">
              PERAK.link mu
            </Header>
            <div className="border border-white rounded-lg px-4 py-2 flex justify-between items-center">
              <div>
                <Paragraph size="md" type="bold" className="text-lemon">
                  perak.link/{response?.data?.newLink}
                </Paragraph>
                <Paragraph size="md" type="bold" className="text-white">
                  {response?.data?.url}
                </Paragraph>
              </div>
              <div
                className="text-lemon cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/${response?.data?.newLink}`
                  )
                  enqueueSnackbar("Link telah di-copy ke clipboard.", { variant: "info" })
                }}
              >
                <Clipboard />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
