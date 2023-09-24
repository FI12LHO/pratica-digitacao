import CharContainer from "@/components/charContainer"
import Painel from "@/components/painel"
import TextInput from "@/components/textInput"
import axios from "axios"
import { GetServerSideProps } from "next"
import { useState } from "react"

interface Props {
  text: string
}

export const getServerSideProps = (async () => {
  const url = `https://loripsum.net/generate.php?p=${3}&l=mendium`
  const text = await axios.get(url).then(
    res => (res.data).replaceAll(/(<([^>]+)>)/gi, '')
      .replaceAll('\n', '')
      .replaceAll('  ', '')
  )

  return { props: { text } }
}) satisfies GetServerSideProps

export default function Home(props: Props) {
  const [chars, setChars] = useState(props.text.split(''))
  const [score, setScore] = useState <Array<number>>([])
  const [position, setPosition] = useState(0)
  const [colors, setColors] = useState<Array<"text-green-600" | "text-red-600" | "text-black">>([])

  const handleOnInputText = (value: string) => {
    let array = score
    let array2 = colors

    if (chars[position] === value) {
      array.push(0)
      array2.push("text-green-600")

    } else {
      array.push(1)
      array2.push("text-red-600")
    }

    setColors(array2)
    setScore(array)
    setPosition(position + 1)
  }

  return (
    <main>
      <Painel htmlFor="input-chars">
        {
          chars.map((item, index) => <CharContainer char={item} color={colors[index] ? colors[index] : "text-black"} key={index} />)
        }
      </Painel>

      <TextInput id="input-chars" onChangeValue={handleOnInputText} />
    </main>
  )
}
