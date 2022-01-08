import { FC, Fragment } from "react"

import { Dialog, Transition } from "@headlessui/react"
import { IconButton } from "@mui/material"
import { Button, Cancel, Header, Paragraph } from "@elements"
import { ModalProps } from "./interface"

export const Modal: FC<ModalProps> = ({
  className,
  title,
  message,
  show,
  onClose = () => {},
  primary,
  primaryClicked = () => {},
  secondary,
  secondaryClicked = () => {},
  children,
  canClose = true,
}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" onClose={onClose}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75 pointer-events-none" />

        <div className="min-h-screen px-4 text-center">
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`inline-block w-full max-w-[300px] md:max-w-[500px] lg:max-w-[800px] p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-black border-2 border-lemon shadow-xl rounded-[4px] ${className}`}
            >
              <div className="flex flex-row items-center justify-between">
                <Dialog.Title as={Header} size="xs" className="text-lemon">
                  {title}
                </Dialog.Title>

                {canClose && (
                  <IconButton className="p-0" onClick={onClose}>
                    <Cancel stroke={"stroke-white"} />
                  </IconButton>
                )}
              </div>

              {message ? (
                <Paragraph size="m" className="mt-5 text-white">
                  {message}
                </Paragraph>
              ) : (
                children
              )}

              <div className={`flex flex-col md:flex-row-reverse gap-4 mt-5`}>
                {primary && (
                  <Button variant="variant3" onClick={primaryClicked}>
                    {primary}
                  </Button>
                )}
                {secondary && (
                  <Button variant="variant2" onClick={secondaryClicked}>
                    {secondary}
                  </Button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
