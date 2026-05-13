import { describe, expect, it } from 'vitest';
import { getHealthResponse } from './health.js';

describe('getHealthResponse', () => {
  it('should return API health status', () => {
    const result = getHealthResponse();

    expect(result).toEqual({
      status: 'fail',
      message: 'CI practice API is running',
    });
  });
});