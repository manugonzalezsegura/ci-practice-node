export interface HealthResponse {
  status: string;
  message: string;
}

export function getHealthResponse(): HealthResponse {
  return {
    status: 'oki',
    message: 'CI practice API is running',
  };
}