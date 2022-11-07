import { logout } from '../api/auth/logout.js';

test('logout return localstorage', () => {
    logout();
    const token = localStorage.getItem('token');
    expect(token).toBeNull();
    console.log(token);
});
