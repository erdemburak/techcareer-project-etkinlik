import { Box, MenuItem, TextField } from '@mui/material'
import { DatePicker, DateTimeField, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'

const etkinlikType = [
    {
        value: 'KONSER',
        label: 'Konser',
    },
    {
        value: 'SINEMA',
        label: 'Sinema',
    },
    {
        value: 'TIYATRO',
        label: 'Tiyatro',
    },
    {
        value: 'SEMINER',
        label: 'Seminer',
    },
];

function CreateEtkinlik() {
    const [value, setValue] = React.useState();

    return (<>
        <div style={{ marginLeft: '2%' }}>
            <div style={{ marginTop: '5%', marginLeft: '2%' }}>
                <h3>Etkinlik Oluştur</h3>
                <p>***Tüm alanları eksiksiz doldurduğunuzdan emin olun.</p>
            </div>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField id="outlined-basic" label="Konum" variant="outlined" size='small' />
                    <TextField id="outlined-basic" label="Adres" variant="outlined" size='small' />
                    <TextField id="outlined-basic" label="Açıklama" variant="outlined" size='small' />
                    <TextField
                        id="outlined-select-etkinlikType"
                        select
                        label="Etkinlik Türü"
                        defaultValue="Konser"
                        size='small'
                    >
                        {etkinlikType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimeField
                            label="Format without meridiem"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                            format="L HH:mm"
                        />
                        <DatePicker label="Başlangıç Tarihi" slotProps={{ textField: { size: 'small' } }} />
                        <DatePicker label="Bitiş Tarihi" slotProps={{ textField: { size: 'small' } }} />
                        <TimePicker views={['hours', 'minutes']} format="HH:mm" />

                    </LocalizationProvider>
                    <TextField id="outlined-basic" label="Etkinlik Türü" variant="outlined" size='small' />
                </div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
            </Box>
        </div>
    </>)
}

export default CreateEtkinlik