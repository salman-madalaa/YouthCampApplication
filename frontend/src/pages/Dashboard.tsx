import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import {
  getDashboardStatistics,
  type DashboardStatistics,
} from '../api/dashboardApi';

function Dashboard() {
  const [statistics, setStatistics] =
    useState<DashboardStatistics | null>(null);

  async function loadDashboardStatistics() {
    try {
      const data = await getDashboardStatistics();
      setStatistics(data);
    } catch (error) {
      console.error('Failed to load dashboard statistics', error);
    }
  }

  useEffect(() => {
    loadDashboardStatistics();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Welcome to Youth Camp Registration.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total Registrations"
            value={statistics?.totalRegistrations ?? 0}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Paid Registrations"
            value={statistics?.paidRegistrations ?? 0}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Pending Payments"
            value={statistics?.pendingPayments ?? 0}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Checked In"
            value={statistics?.checkedIn ?? 0}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;