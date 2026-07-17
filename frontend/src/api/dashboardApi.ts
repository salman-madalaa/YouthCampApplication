import api from './axios';

export interface DashboardStatistics {
  totalRegistrations: number;
  paidRegistrations: number;
  pendingPayments: number;
  checkedIn: number;
}

export async function getDashboardStatistics() {
  const response = await api.get<DashboardStatistics>(
    '/api/registrations/dashboard/statistics',
  );

  return response.data;
}