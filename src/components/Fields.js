import React from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Fields = ({ name, email, index }) => {
    return (
        <div className='showData'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Stack>
                <Button variant="outlined" color="error"><DeleteForeverIcon /></Button>
            </Stack>
        </div>
    )
}

export default Fields