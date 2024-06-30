import { FC } from 'react'

import { HelloWorldStyle } from './hello-world.style'

type Props = {
  color?: string
}

export const HelloWorld: FC<Props> = ({ color }) => (
  <HelloWorldStyle {...{ color }}>Hello, World!</HelloWorldStyle>
)
