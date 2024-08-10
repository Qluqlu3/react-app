import React from 'react'

import DataGrid from 'react-data-grid'
import 'react-data-grid/lib/styles.css'

interface Props {
  rows: any[]
  columns: any[]
}

export const CsvTable: React.FC<Props> = ({ rows, columns }: Props) => {
  return <DataGrid columns={columns} rows={rows} />
}
