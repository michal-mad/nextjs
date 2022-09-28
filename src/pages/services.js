import Head from 'next/head';
import { Autocomplete, Box, Container, Grid, Pagination, TextField, Typography, InputAdornment } from '@mui/material';
import { services } from '../__mocks__/services';
import { ServiceCard } from '../components/service/service-card';
import { DashboardLayout } from '../components/dashboard-layout';
import Paper from '@mui/material/Paper'
import { SvgIcon } from '@mui/material'
import { Search as SearchIcon } from '../icons/search'

export default function Page() {
  return (
    <>
      <Head>
        <title>Services |</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Typography
            variant='h4'
            mb={2}>
            Services
          </Typography>
          <Paper elevation={1}>
            <Box
              sx={{
                maxWidth: 500,
                px: 2,
                py: 4,
                backgroundColor: 'background.paper',
                borderRadius: 1
              }}
            >

              <Autocomplete
                freeSolo={true}
                // from extracted titles, remove duplicates by creating set,
                // and deconstruct results back into array using spread operator
                options={
                  [...new Set(services.map(service => service.title))]}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            fontSize="small"
                            color="action"
                          >
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>)
                    }}
                    placeholder="Search"
                  />
                }
              />
            </Box>
          </Paper>
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {services.map((service) => (
                <Grid
                  item
                  key={service.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ServiceCard
                    service={service} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>)
}


Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

//export default Page;
