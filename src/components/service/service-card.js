import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import { LinearProgress } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { green, red, grey } from '@mui/material/colors';
import { useState, useEffect } from 'react'
import { useTheme } from '@emotion/react';

function randomGenerate(min = 0, max = 100) {
  //normalize range
  //const min = 20
  //const max = 100
  const pick = Math.random() * (max - min) + min
  return pick
}

function measureColor(progress) {
  return progress > 90 ? 'error' : 'info'
}

export function ServiceCard({ service, ...rest }) {
  const [metrics, setMetrics] = useState({ cpu: 0, ram: 0 })

  useEffect(() => {
    if (!service.healthy) {
      setMetrics({ cpu: 0, ram: 0 })
      return
    }

    const timer = setInterval(() => {
      const cpu = randomGenerate(0, 50)
      const ram = randomGenerate(70, 100)
      //console.log(pick)
      setMetrics({ cpu, ram })
    }, 1000);
    return () => clearInterval(timer)
  }, [service.healthy])

  //const theme = useTheme()

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {
            service.healthy
              ? <FavoriteIcon sx={{ color: green[400] }} />
              : <HeartBrokenIcon sx={{ color: red[900] }} />
          }
          <Typography
            color={service.healthy ? 'text.primary' : 'text.disabled'}
            display="inline"
            sx={{ pl: 1 }}
            variant="h5"
          >
            {service.title}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ComputerIcon
            color={service.healthy ? 'info' : 'disabled'}
          />
          <Typography
            align="left"
            color={service.healthy ? 'info.dark' : 'text.disabled'}
            variant="subtitle1"
            sx={{ pl: 1 }}
          >
            {service.subtitle}
          </Typography>
        </Grid>

        <Typography
          align="left"
          color="textPrimary"
          variant="body1"
          sx={{ mt: 2 }}
        >
          CPU: {Math.floor(metrics.cpu)}%
        </Typography>
        <Box sx={{ pt: 2 }}>
          <LinearProgress
            color={service.healthy ? measureColor(metrics.cpu) : 'disabled'}
            variant="determinate"
            value={service.healthy ? metrics.cpu ?? 0 : 0}
          />
        </Box>
        <Typography
          align="left"
          color="textPrimary"
          variant="body1"
          sx={{ mt: 2 }}
        >
          RAM: {Math.floor(metrics.ram)}%
        </Typography>
        <Box sx={{ pt: 2 }}>
          <LinearProgress
            color={service.healthy ? measureColor(metrics.ram) : 'disabled'}
            variant="determinate"
            value={service.healthy ? metrics.ram ?? 0 : 0}
          />
        </Box>
      </CardContent>

      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <ClockIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Uptime: {service.uptime}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <DownloadIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              {service.totalDownloads}
              {' '}
              Request rate
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired
};
