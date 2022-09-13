import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { FC } from 'react'

export interface SelectData {
  value: string
  name: string
}
interface SelectInputProps {
  title: string
  value: string | string[]
  selectData: SelectData[]
  onChange(val: string | (string | string[])[]): void
  multiple?: boolean
}
export const SelectInput: FC<SelectInputProps> = props => {
  const { title = '请选择', value, selectData, onChange, multiple } = props
  return (
    <>
      <FormControl fullWidth variant='standard'>
        <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
        <Select defaultValue='' multiple={multiple} onChange={event => onChange(event.target.value)} value={value}>
          {selectData?.map((select, idx) => (
            <MenuItem key={idx} value={select.value}>
              {select.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
