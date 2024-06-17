import { FC } from 'react'
import { Global } from '@emotion/react'

import { env } from '@app/config'
import viteLogo from '@public/vite.svg'

import './styles/tailwind.css'
import { AppStyle } from './styles/app.style'
import { GlobalStyles } from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <AppStyle>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <span>
        template.<span className="text-fun">react</span>-app.turbo
      </span>
    </AppStyle>
    <span className="hidden">{env.VITE_TIMESTAMP}</span>
    <span className="hidden">{env.VITE_LOCAL_KEY}</span>
    <span className="hidden">{env.VITE_GLOBAL_KEY}</span>
    <span className="hidden">{env.VITE_GLOBAL_KEY_FROM_ADDITIONAL_ENV}</span>
  </>
)

export default App
