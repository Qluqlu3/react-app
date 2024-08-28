import React, { useCallback } from 'react'

import { parse } from 'papaparse'
import { Column } from 'react-data-grid'

import { Row } from '../../pages'

interface Props {
  onCsvParsed: (csvDate: { columns: Column<Row>[]; rows: Row[] }) => void
}

export const CsvImport: React.FC<Props> = ({ onCsvParsed }: Props) => {
  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files == null) return
      const file = event.target.files[0]
      parse(file, {
        header: true,
        complete: (results) => {
          // const { data } = results
          console.log(results.data)
          console.log(onCsvParsed)

          // const headerColumns = Object.keys(data[0] || {}).map((key) => ({
          //   key,
          //   name: key,
          //   editable: false,
          // }))

          // onCsvParsed({ columns: headerColumns, rows: data.map((row, index) => ({ id: index, ...(row as []) })) })
        },
        error(error, file) {
          console.error('Error parsing CSV:', error, file)
        },
      })
    },
    [onCsvParsed],
  )

  return (
    <div>
      <h2 className='my-5 text-2xl'>CSVアップロード</h2>
      <input accept='.csv' type='file' onChange={handleFileUpload} />
    </div>
  )
}
