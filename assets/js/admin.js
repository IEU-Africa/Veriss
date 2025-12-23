// Mock admin data and functions for Veriss Payments

const mockAdminData = {
  totalOrganizations: 150,
  totalUsers: 2500,
  totalPayments: 5000,
  recentPayments: [
    { id: 1, orgName: 'Example Org', amount: 5000, date: '2023-01-15', status: 'paid' },
    { id: 2, orgName: 'Another Org', amount: 3000, date: '2023-01-14', status: 'pending' }
  ],
  organizations: [
    { id: 1, name: 'Example Organization', members: 50, status: 'active' },
    { id: 2, name: 'Another Organization', members: 30, status: 'active' }
  ]
};

function getAdminStats() {
  return mockAdminData;
}

function getAllOrganizations() {
  return mockAdminData.organizations;
}

function getRecentPayments() {
  return mockAdminData.recentPayments;
}