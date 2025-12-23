// Mock organization data and functions for Veriss Payments

const mockOrganizations = [
  {
    id: 1,
    name: 'Example Organization',
    paymentTypes: ['dues', 'fines'],
    bankingDetails: { accountNumber: '1234567890', bankName: 'Example Bank' },
    adminOfficer: { name: 'Jane Smith', email: 'admin@org.com', phone: '123-456-7890' },
    members: [
      { id: 1, name: 'John Doe', email: 'user@example.com', status: 'active' },
      { id: 2, name: 'Alice Johnson', email: 'alice@org.com', status: 'active' }
    ],
    dues: [
      {
        id: 1,
        title: 'Monthly Dues',
        amount: 5000,
        subDeductions: [
          { name: 'Security', amount: 1000 },
          { name: 'Maintenance', amount: 2000 }
        ],
        excludedMembers: [],
        createdAt: '2023-01-01'
      }
    ]
  }
];

function getOrganization(orgId) {
  return mockOrganizations.find(org => org.id === orgId);
}

function createOrganization(orgData) {
  const newOrg = { ...orgData, id: Date.now(), members: [], dues: [] };
  mockOrganizations.push(newOrg);
  return newOrg;
}

function updateOrganization(orgId, updates) {
  const org = mockOrganizations.find(o => o.id === orgId);
  if (org) {
    Object.assign(org, updates);
  }
  return org;
}

function addMember(orgId, memberData) {
  const org = mockOrganizations.find(o => o.id === orgId);
  if (org) {
    const newMember = { ...memberData, id: Date.now(), status: 'active' };
    org.members.push(newMember);
    return newMember;
  }
}

function createDue(orgId, dueData) {
  const org = mockOrganizations.find(o => o.id === orgId);
  if (org) {
    const newDue = { ...dueData, id: Date.now(), createdAt: new Date().toISOString().split('T')[0] };
    org.dues.push(newDue);
    return newDue;
  }
}

function getDues(orgId) {
  const org = mockOrganizations.find(o => o.id === orgId);
  return org ? org.dues : [];
}