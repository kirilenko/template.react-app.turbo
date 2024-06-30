import styled from '@emotion/styled'
import tw from 'twin.macro'

export const HelloWorldStyle = styled.span<{ color?: string }>`
  ${tw`m-2 text-xl font-bold text-fun`}
  ${({ color }) => (color ? `color: ${color};` : '')}
`
