import { ChangeEvent, useState } from 'react'
import { Input, Container, Text, Box } from '@chakra-ui/react'
import { parseFiles } from './lib'
import Table from './Table'
import InsertManager from './InsertManager'
import useFilter from './useFilter'
import Search from './Search'

function App() {
  const [records, setRecords] = useState<Record<string, string>[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const [filter, filterSize] = useFilter(records.length)

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

      <InsertManager filter={filter} records={records} headers={headers} />
      <Search filter={filter} />
      <Box>
        Filter size: {filterSize} bytes ({Math.floor(filterSize / 1000)} kB)
      </Box>
      <Input
        maxWidth="2xl"
        padding={1}
        onChange={handleChange}
        type="file"
        accept=".csv"
      />
      <Table headers={headers} records={records} />
    </Container>
  )
}

export default App
