import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';

export const PropertyCard: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)

  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  

  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <Typography textAlign='start' variant='h4'>Property {counter}</Typography>
          <Stack gap={2} mt={1}>
            <TextField value={startTime} onChange={(e) => setStartTime(Number(e.currentTarget.value))} id="startTime" label="Start" variant="outlined" />
            <TextField value={endTime} onChange={(e) => setEndTime(Number(e.currentTarget.value))} id="endTime" label="End" variant="outlined" />
            {/* <TextField id="outlined-basic" label="Address" variant="outlined" />
            <TextField id="outlined-basic" label="Address" variant="outlined" /> */}
            {/* <Button onClick={handleClick} variant='contained' color='primary'> click me </Button> */}
            {/* <ActionButton config={config} title='List property' /> */}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
