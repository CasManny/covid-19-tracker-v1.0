import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './Cards.module.css'
import CountUp from "react-countup";
import cx from 'classnames'

const Cards = ({data}) => {
    return (
      <>
        <div className={styles.container}>
          <Grid container spacing={3} justify="center" className={styles.gridcontainer}>
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.infected)}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Infected:{" "}
                  <CountUp
                    end={data.confirmed.value}
                    duration={5}
                    start={0}
                    separator=","
                  />
                </Typography>
                <Typography variant="h5" color="initial">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  Number of Active cases of covid 19
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              component={Card}
              className={cx(styles.recovered, styles.card)}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Recovered:{" "}
                  <CountUp
                    end={data.recovered.value}
                    duration={5}
                    start={0}
                    separator=","
                  />
                </Typography>
                <Typography variant="h5" color="initial">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Number of Recovered Cases
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              component={Card}
              className={cx(styles.card, styles.deaths)}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Deaths:{" "}
                  <CountUp
                    end={data.deaths.value}
                    duration={5}
                    start={0}
                    separator=","
                  />
                </Typography>
                <Typography variant="h5" color="initial">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" color="textSecondary"></Typography>
                <Typography variant="body2" color="textSecondary">
                  Number of Active cases of covid 19
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      </>
    );
}

export default Cards