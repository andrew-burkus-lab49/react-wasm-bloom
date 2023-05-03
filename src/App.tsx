import { ChangeEvent, useState } from 'react'
import './App.css'
import { Input, Container } from '@chakra-ui/react'
import { parseFiles } from './lib'
import Table from './Table'

function App() {
  const [records, setRecords] = useState<Record<string, string>[]>([])
  const [headers, setHeaders] = useState<string[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files) {
      parseFiles(files, setHeaders, setRecords)
    }
  }

  return (
    <>
      <Container>
        <Input onChange={handleChange} type="file" accept=".csv" />
        <Table headers={headers} records={records} />
      </Container>
    </>
  )
}

export default App
