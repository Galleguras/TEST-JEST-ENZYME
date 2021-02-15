import {
  getDataCallBack,
  getDataPromise,
  getDataPromiseErr,
  getUsers,
} from './../utils/async';

describe('Haciendo test a operaciones asincronas', () => {
  test('Haciendo test a callback', (done) => {
    getDataCallBack((name) => {
      expect(name).toBe('gerardo gallegos');
      done();
    });
  });
  test('Haciendo test a promesa', (done) => {
    getDataPromise().then((name) => {
      expect(name).toBe('Pablo');
      done();
    });
  });

  test('Haciendo test a promesa con expect', () => {
    return expect(getDataPromise()).resolves.toBe('Pablo');
  });
  test('Haciendo test a promesa rechazada', (done) => {
    getDataPromiseErr().catch((error) => {
      expect(error).toBe('error12');
      done();
    });
  });

  test('Haciendo test a promesa rechazada con expect', () => {
    return expect(getDataPromiseErr()).rejects.toBe('error12');
  });

  test('Haciendo test a promesa con async await', async () => {
    const name = await getDataPromise();
    expect(name).toBe('Pablo');
  });

  test('Haciendo test a promesa rechazada con async await', async () => {
    try {
      const name = await getDataPromiseErr();
      expect(name).toBe('Pablo');
    } catch (error) {
      expect(error).toBe('error12');
    }
  });
  test('Probando promesa con solicitud HTTP', async () => {
    const user = await getUsers();
    expect(user).toHaveProperty('username');
    expect(user).toMatchObject({ id: 5 });
  });
});
