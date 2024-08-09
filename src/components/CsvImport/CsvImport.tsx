import React, { useCallback } from 'react'

import { parse } from 'papaparse'

export const CsvImport: React.FC = () => {
  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) return
    const file = event.target.files[0]
    parse(file, {
      header: true,
      complete: (results) => {
        console.log(results.data)
      },
    })
  }, [])

  return (
    <div>
      <h2 className='my-5 text-2xl'>CSVアップロード</h2>
      <input type='file' accept='.csv' onChange={handleOnChange} />
    </div>
  )
}
