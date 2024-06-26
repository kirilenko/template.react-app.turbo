import { FC } from 'react'
import { Global } from '@emotion/react'

import { env } from '@app/config'
import viteLogo from '@public/vite.svg'
import { HelloWorld } from '@repo/ui'
import { log } from '@repo/vanilla-sample'

import './styles/tailwind.css'
import { AppStyle } from './styles/app.style'
import { GlobalStyles } from './styles/global.style'

const App: FC = () => {
  log('Hello from vanilla-sample')

  return (
    <>
      <Global styles={GlobalStyles} />
      <AppStyle>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <HelloWorld />
      </AppStyle>
      <span className="hidden">{env.VITE_TIMESTAMP}</span>
      <span className="hidden">{env.VITE_LOCAL_KEY}</span>
      <span className="hidden">{env.VITE_GLOBAL_KEY}</span>
      <span className="hidden">{env.VITE_GLOBAL_KEY_FROM_ADDITIONAL_ENV}</span>
    </>
  )
}

export default App
