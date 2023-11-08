import { Box, Button, MenuItem, TextField } from '@mui/material'
import { DatePicker, DateTimeField, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { Fragment } from 'react'

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
                <TextField id="outlined-basic" label="Konum" variant="outlined" size='small' />
                <TextField id="outlined-basic" label="Adres" variant="outlined" size='small' />
                <TextField
                    id="fullWidth"
                    label="Açıklama"
                    style={{ width: 500 }}
                    multiline
                    rows={4}
                    defaultValue=""
                />
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
                        label="Başlangıç Tarihi - Saati"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        format="L HH:mm"
                        slotProps={{ textField: { size: 'small' } }}
                    />
                    <DateTimeField
                        label="Bitiş Tarihi - Saati"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        format="L HH:mm"
                        slotProps={{ textField: { size: 'small' } }}
                    />
                </LocalizationProvider>
                <TextField id="outlined-basic" label="Etkinlik Türü" variant="outlined" size='small' />
                <div >
                    <TextField id="kategori-1" label="Kategori-1" variant="outlined" size='small' />
                    <TextField id="kategori-2" label="Kategori-2" variant="outlined" size='small' />
                    <TextField id="kategori-3" label="Kategori-3" variant="outlined" size='small' />
                    <TextField id="kategori-4" label="Kategori-4" variant="outlined" size='small' />
                    <TextField id="kategori-5" label="Kategori-5" variant="outlined" size='small' />
                </div>



            </Box >
        </div >
    </>)
}

export default CreateEtkinlik