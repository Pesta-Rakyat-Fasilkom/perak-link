import React, { useState } from "react"
import type { NextPage } from "next"

import { Button, Header, Paragraph, Tabs, TextField } from "components/elements"
import { Data } from "@api/addLink"

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>("")
  const [newLink, setNewLink] = useState<string>("")
  const [isFailed, setIsFailed] = useState<boolean>(false)

  const generateLink = () => {
    fetch(`http://${process.env.HOST || "localhost:3000"}/api/addLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newLink: newLink,
        url: url,
      }),
    }).then((res) => {
      res.json().then((d: Data) => {
        if (d.message === "failed") setIsFailed(true)
      })
    })
  }

  return (
    <div className="bg-black-300 pb-16 min-h-screen pt-20 flex justify-center items-center">
      <div className="flex flex-col items-center max-w-sm w-full space-y-4">
        <div className="text-center">
          <Header size="desktop" className="text-lemon text-shadow-salmon">
            PERAK.Link
          </Header>
          <Paragraph type="bold" size="md" className="text-white">
            Salin. Generate. Bagikan
          </Paragraph>
        </div>

        <div className="w-full space-y-3">
          <TextField
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            label="Masukkan URL"
          ></TextField>
          <TextField
            onChange={(e) => setNewLink(e.target.value)}
            value={newLink}
            label="perak.link/"
          ></TextField>
          <Button
            onClick={generateLink}
            variant="variant3"
            className="w-full flex items-center justify-center space-x-2"
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
        </div>
      </div>
    </div>
  )
}

export default Home
