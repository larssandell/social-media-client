import { createPost } from '../api/posts/create';
import { login } from '../api/auth/login';

it('check creat post', async () => {
    await login('ronjatester@noroff.no', 'lars123456');
    const response = await createPost('MyTitle', 'This is my post');
    expect(response.title).toEqual('MyTitle');
    console.log(response.title);
});
