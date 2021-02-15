import { setTimeout } from 'timers';
export const getDataCallBack = (callback) => {
  //solicitud API
  const name = 'gerardo gallegos';
  setTimeout(() => {
    callback(name);
  }, 2000);
};

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pablo');
    }, 2000);
  });
};

export const getDataPromiseErr = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error12');
    }, 300);
  });
};
/* getDataPromise()
.then((name) => {
  console.log(name)
  
})
.catch((error) => {
  //error
  console.log(error)
}) */

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/5');
  const user = await res.json();
  return user;
};
