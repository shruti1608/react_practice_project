import axios from "axios";

let token = "";

export const signupcall = ([age, name, email, password]) => {
  axios
    .post("http://34.208.44.89:3006/auth/signup", {
      age: parseInt(age),
      name: name,
      email: email,
      password: password,
    })
    .then((res) => console.log(res.data));
};

export const sigincall = ([email, password]) => {
  axios
    .post("http://34.208.44.89:3006/auth/login", {
      username: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data.token);
      token = res.data.token;
    });
};

// export const getmoviescall = () => {
//   axios
//     .get("http://34.208.44.89:3006/movies", {
//       params:{limit: limit,
//         sort: sortData,
//         sortOrder: sortOrder,
//         searchText: searchText,
//         skip: skipData},
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((res) => console.log(res.data));
// };

export const getusercall = () => {
 return axios.get("http://34.208.44.89:3006/user/currentuser", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => console.log(res.data));
}








// const instance = axios.create((config) => ({
// baseURL: process.env.REACT_APP_API_URL,
// headers: {
// Authorization: token ? `Bearer $(token)` : null,
// },
// }));
// export const storeJwt = (token) => {
// instance.interceptors.request.use((req) => {
// req.headers.Authorization = `Bearer ${token}`;
// return req;
// });
// };
