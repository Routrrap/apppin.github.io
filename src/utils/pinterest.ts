export interface PinterestAccount {
  email: string;
  password: string;
  businessName?: string;
}

export const createPinterestAccount = async (
  account: PinterestAccount,
  proxy?: string
): Promise<boolean> => {
  try {
    // Simulate account creation process
    // In a real implementation, this would use browser automation
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulated success rate of 80%
    const success = Math.random() > 0.2;
    if (!success) {
      throw new Error('Account creation failed');
    }

    return true;
  } catch (error) {
    console.error('Error creating Pinterest account:', error);
    throw error;
  }
};

export const validateProxy = (proxy: string): boolean => {
  const proxyRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):\d{1,5}$/;
  return proxyRegex.test(proxy);
};