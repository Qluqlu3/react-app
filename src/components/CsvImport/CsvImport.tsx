import React, { useCallback } from 'react'

import { parse } from 'papaparse'
// import { Column } from 'react-data-grid';

interface Props {
  onCsvParsed: (csvDate: { columns: any[]; rows: any[] }) => void
}

export const CsvImport: React.FC<Props> = ({ onCsvParsed }: Props) => {
  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files == null) return
      const file = event.target.files[0]
      parse(file, {
        header: true,
        complete: (results) => {
          const { data } = results
          console.log(results.data)

          const headerColumns = Object.keys(data[0] || {}).map((key) => ({
            key,
            name: key,
            editable: false,
          }))

          onCsvParsed({ columns: headerColumns, rows: data.map((row, index) => ({ id: index, ...(row as []) })) })
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
      <input type='file' accept='.csv' onChange={handleFileUpload} />
    </div>
  )
}
