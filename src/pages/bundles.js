import { Box, Container } from '@mui/system';
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => {

  return (
    <>
      <Head>
        <title>Bundle |</title>
      </Head>

      <Box component='main'
        sx={{
          flexGrow: 1,
          py: 8
        }}>
        <Container maxWidth={false}>
          <h1>Bundle</h1>

        </Container>
      </Box>

    </>
  )
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default Page;