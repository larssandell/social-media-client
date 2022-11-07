import { login } from '../api/auth/login.js';

test('login returns token', async () => {
    await login('ronjatester@noroff.no', 'lars123456');
    const token = localStorage.getItem('token');
    expect(token).toBeDefined();
    console.log(token);
    console.log(localStorage);
});
