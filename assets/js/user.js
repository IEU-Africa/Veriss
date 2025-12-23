// Mock user data and functions for Veriss Payments

const mockPayments = [
  {
    id: 1,
    userId: 1,
    orgId: 1,
    dueId: 1,
    amount: 5000,
    status: 'paid',
    paymentDate: '2023-01-15',
    transactionId: 'TXN123456'
  },
  {
    id: 2,
    userId: 1,
    orgId: 1,
    dueId: 1,
    amount: 5000,
    status: 'pending',
    paymentDate: null,
    transactionId: null
  }
];

function getUserPayments(userId) {
  return mockPayments.filter(p => p.userId === userId);
}

function getDueByEmail(email) {
  // Mock search for dues by email
  const user = { email }; // In real app, find user by email
  const org = getOrganization(1); // Assume org 1 for demo
  return org ? org.dues : [];
}

function makePayment(paymentData) {
  // Mock payment processing
  const newPayment = {
    ...paymentData,
    id: Date.now(),
    status: 'paid',
    paymentDate: new Date().toISOString().split('T')[0],
    transactionId: 'TXN' + Date.now()
  };
  mockPayments.push(newPayment);
  return newPayment;
}

function getPaymentRecords(userId) {
  return getUserPayments(userId);
}