import React, { useCallback, useState } from 'react'

import { Column } from 'react-data-grid'

import { CsvImport, CsvTable, HeaderText } from '../../components'

export interface Row {
  id: string
  data1: string
  data2: string
  data3: string
}

export const Csv: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([])
  const [columns, setColumns] = useState<Column<Row>[]>([])

  const handleOnCsvParsed = useCallback((csvData: { columns: Column<Row>[]; rows: Row[] }) => {
    const { columns, rows } = csvData
    setColumns(columns)
    setRows(rows)
    console.log('handleOnCsvParsed')
  }, [])

  return (
    <div>
      <HeaderText>CSV</HeaderText>
      <CsvImport onCsvParsed={handleOnCsvParsed} />
      <CsvTable rows={rows} columns={columns} />
    </div>
  )
}
