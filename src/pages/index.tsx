import Painel from "@/components/painel"
import TextInput from "@/components/textInput"
import axios from "axios"
import { GetServerSideProps } from "next"
import { useState } from "react"

interface Props {
  text: string
}

export const getServerSideProps = (async () => {
  const url = 'https://loripsum.net/generate.php?p=2&l=long'
  const text = await axios.get(url).then(res => (res.data).replaceAll(/(<([^>]+)>)/gi, '').replaceAll('\n', ''))

  return { props: { text } }
}) satisfies GetServerSideProps

export default function Home(props: Props) {
  const [chars, setChars] = useState(props.text.split(''))
  const [score, setScore] = useState <Array<number>>([])
  const [position, setPosition] = useState(0)

  const handleOnInputText = (value: string) => {
    let array = score

    if (chars[position] === value) {
      array.push(0)
    } else {
      array.push(1)
    }

    console.log(array[array.length - 1])
    setScore(array)
    setPosition(position + 1)
  }

  return (
    <main>
      <Painel text={props.text} />
      <TextInput onChangeValue={handleOnInputText} />
    </main>
  )
}
