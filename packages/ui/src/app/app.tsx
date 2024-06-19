import { FC } from 'react'
import { Global } from '@emotion/react'

import { HelloWorld } from '@shared/ui/hello-world'

import './styles/tailwind.css'
import { AppStyle } from './styles/app.style'
import { GlobalStyles } from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <AppStyle>
      <HelloWorld />
    </AppStyle>
  </>
)

export default App
