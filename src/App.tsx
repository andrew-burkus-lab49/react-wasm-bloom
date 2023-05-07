import { ChangeEvent, useState } from 'react'
import { Input, Container, Text } from '@chakra-ui/react'
import { parseFiles } from './lib'
import Table from './Table'
import InsertManager from './InsertManager'
import useFilter from './useFilter'
import Search from './Search'

function App() {
  const [records, setRecords] = useState<Record<string, string>[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const filter = useFilter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files) {
      parseFiles(files, setHeaders, setRecords)
    }
  }

  return (
    <Container padding={5} maxWidth='4xl'>
      <Text fontSize='3xl'>
        WASM + Rust + React + TypeScript BloomFilter
      </Text>
      <Table headers={headers} records={records} />
      <InsertManager filter={filter} records={records} headers={headers} />
      <Search filter={filter} />
      <Input maxWidth="2xl" padding={1} onChange={handleChange} type="file" accept=".csv" />
    </Container>
  )
}

export default App
