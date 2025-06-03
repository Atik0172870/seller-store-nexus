
export const addAffiliate = (affiliateData: any) => {
  console.log('Adding new affiliate:', affiliateData);
  return Promise.resolve({ 
    success: true, 
    id: `A${Date.now()}`, 
    ...affiliateData,
    createdAt: new Date().toISOString()
  });
};

export const editAffiliate = (affiliateId: string, updates: any) => {
  console.log(`Editing affiliate ${affiliateId}:`, updates);
  return Promise.resolve({ success: true, affiliateId, updates });
};

export const payAffiliate = (affiliateId: string, amount: number) => {
  console.log(`Processing payment for affiliate ${affiliateId}: $${amount}`);
  return Promise.resolve({ 
    success: true, 
    affiliateId, 
    amount, 
    transactionId: `TXN${Date.now()}`,
    paidAt: new Date().toISOString()
  });
};

export const suspendAffiliate = (affiliateId: string, reason?: string) => {
  console.log(`Suspending affiliate ${affiliateId}${reason ? ` - Reason: ${reason}` : ''}`);
  return Promise.resolve({ success: true, affiliateId, suspended: true, reason });
};

export const generateSubdomain = (companyName: string) => {
  const cleanName = companyName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `www.amarproduct.com/${cleanName}`;
};
