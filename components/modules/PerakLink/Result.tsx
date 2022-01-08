import React, { useState } from "react"
import type { NextPage } from "next"

import { Header, Paragraph, Clipboard } from "components/elements"
import { useSnackbar } from "notistack"
import { Form } from "components/modules/PerakLink/Form"

export const Result: React.FC<{ response: any }> = ({ response }) => {
  const { enqueueSnackbar } = useSnackbar()

  return (
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
  )
}
