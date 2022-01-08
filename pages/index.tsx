import React, { useState } from "react"
import type { NextPage } from "next"

import { Form } from "components/modules/PerakLink/Form"
import { Result } from "components/modules/PerakLink/Result"

const Home: NextPage = () => {
  const [response, setResponse] = useState<any>(null)

  return (
    <div className="bg-black-300 pb-16 min-h-screen pt-20 flex flex-col space-y-8 justify-center items-center">
      <Form setResponse={setResponse} />
      {response && <Result response={response} />}
    </div>
  )
}

export default Home
