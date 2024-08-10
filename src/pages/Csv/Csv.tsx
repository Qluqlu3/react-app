import React, { useCallback, useState } from 'react'

import { CsvImport, CsvTable } from '../../components'

export const Csv: React.FC = () => {
  const [rows, setRows] = useState<any[]>([])
  const [columns, setColumns] = useState<any[]>([])

  const handleOnCsvParsed = useCallback((csvData: { columns: any[]; rows: any[] }) => {
    const { columns, rows } = csvData
    setColumns(columns)
    setRows(rows)
    console.log('handleOnCsvParsed')
  }, [])

  return (
    <div>
      <h1 className='mb-3 border-b-2 border-green-700 text-6xl'>CSV</h1>
      <CsvImport onCsvParsed={handleOnCsvParsed} />
      <CsvTable rows={rows} columns={columns} />
    </div>
  )
}
