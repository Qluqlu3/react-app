import React from 'react'

import { CsvImport } from '../../components'

export const Csv: React.FC = () => {
  return (
    <div>
      <h1 className='mb-3 border-b-2 border-green-700 text-6xl'>CSV</h1>
      <CsvImport />
    </div>
  )
}
