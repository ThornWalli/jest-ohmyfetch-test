
import { fetch } from 'ohmyfetch';

describe('ohmyfetch', () => {
  it('github api returns 200 status', async () => {
    const response = await fetch('https://api.github.com');
    expect(response.status).toBe(200);
  });
})

