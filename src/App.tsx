import { ChangeEvent, useState } from 'react'
import './App.css'
import { Input, Container } from '@chakra-ui/react'
import { parseFiles } from './lib'
import Table from './Table'
import InsertManager from './InsertManager'

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
        <InsertManager records={records} headers={headers} />
      </Container>
    </>
  )
}

export default App
