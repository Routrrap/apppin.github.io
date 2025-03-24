export interface Account {
  email: string;
  password: string;
  status: 'pending' | 'processing' | 'created' | 'error';
  error?: string;
  createdAt?: string;
}

export interface AccountLog {
  timestamp: string;
  action: string;
  email: string;
  details: string;
}

export interface Stats {
  total: number;
  created: number;
  failed: number;
  timeElapsed: number;
}