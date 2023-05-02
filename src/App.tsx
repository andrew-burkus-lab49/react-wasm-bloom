import { ChangeEvent, useState } from 'react'
import './App.css'
import { Button, Input, Container } from '@chakra-ui/react'

function App() {
  const [file, setFile] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const reader = new FileReader()

    reader.addEventListener('load', e => {
      const { result } = e.target as FileReader

      if (result && typeof result == 'string') {
        const b64 = result.substring(result.lastIndexOf(',') + 1)
        const parsed = atob(b64)
        setFile(parsed)
      }
    })

    if (files && files.length > 0 && files[0]) {
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <>
      <Container>
        <Input onChange={handleChange} type="file" accept=".csv" />
        <Button>Submit</Button>
      </Container>
    </>
  )
}

export default App
