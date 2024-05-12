import React, { useMemo, useState } from 'react';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import {  Button,   Paper, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ProgressBar } from '../components/ProgressBar';
import { useQuery } from '@apollo/client';
import { useAccount } from 'wagmi';


const Dashboard: React.FC = () => {
  const dispatch = useDispatch()
  const { address, isConnecting, isDisconnected } = useAccount()
  const router = useRouter();

  const [tokenId, setTokenId] = useState(0)
  const [propertyId, setPropertyId] = useState(0)
  const stage = useMemo(() => router.query.stage, [router.query.stage])

  return (
    <Layout header footer>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant='h3'>Properties</Typography>
        <Button onClick={() => router.push('/properties/create')}>Add Property</Button>
      </Stack>

      <Paper sx={{ p: 2, display: 'flex' }}>
        <Typography>No properties owned</Typography>
      </Paper>
      <Typography variant='h3'>Offers</Typography>
      <Paper>

      </Paper>
    </Layout>
  )
}

export default Dashboard
