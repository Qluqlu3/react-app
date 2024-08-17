import React from 'react'

import DataGrid, { Column } from 'react-data-grid'

import 'react-data-grid/lib/styles.css'
import { Row } from '../../pages'

interface Props {
  rows: Row[]
  columns: Column<Row>[]
}

export const CsvTable: React.FC<Props> = ({ rows, columns }: Props) => {
  return <DataGrid columns={columns} rows={rows} />
}
