import { ChangeEvent } from 'react'
import { TextField } from '@mui/material'

type TextInputProps = {
    multiline?: boolean,
    rows?: string,
    type?: string,
    label: string,
    value: string | undefined,
    setValue: (value: string) => void
}

function TextInput({multiline,rows,type,label,value,setValue}: TextInputProps) {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);


    return (
        <TextField
            fullWidth
            multiline={multiline}
            rows={rows}
            required
            id='outlined-basic'
            variant='outlined'
            margin="none"
            type={type}
            label={label}
            value={value}
            onChange={handleChange}
            error={value === "" ? true : false}
            helperText={value === "" ? `${label} cannot be empty` : null}
        />
    )
}

export default TextInput