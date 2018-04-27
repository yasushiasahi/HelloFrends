import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'


const frends = ['ぼうし', 'サーバル', 'トキ']

const HelloFrends = () => {
  const greetings = frends.map(frend => {
    return <Cover>{`こんちは、${frend}ちゃん`}</Cover>
  })
  return <div>{greetings}</div>
}

const Cover = styled.h1`
background: pink;
`

ReactDom.render(
  <HelloFrends />,
  document.body
)
