import axios from "axios";

let token = "";
const axiosUrl = axios.create({
  //baseURL : "http://34.208.44.89:3006"
  baseURL: process.env.REACT_APP_API_URL
})

export const signupcall = ([age, name, email, password]) => {
  axiosUrl
    .post("/auth/signup", {
      age: parseInt(age),
      name: name,
      email: email,
      password: password,
    })
    .then((res) => console.log(res.data));
};

export const sigincall = ([email, password]) => {
  axiosUrl
    .post("/auth/login", {
      username: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data.token);
      token = res.data.token;
    });
};

// export const getmoviescall = () => {
 
//   return axiosUrl
//     .get("/movies", {
//       headers: { Authorization: `Bearer ${token}` },
//       params:{
//         sort:"genres",sortOrder:"asc"
//       }
      
//     })
    
// };

export const updateuser = ([name,password,age]) => {
const vname = { name:name,password:password,age:parseInt(age)}
  return axiosUrl.put('/user',vname, {
    headers: { Authorization: `Bearer ${token}` },
    
      })
}



// export const getmoviescall = ({
//   limit,
//   sortData = "genres",
//   sortOrder = "asc",
//   searchText = "",
//   skipData,
// }) => {
//   const params = { sort: sortData, sortOrder: sortOrder };
//   if (limit) params["limit"] = limit;
//   if (searchText) params["searchText"] = searchText;
//   if (skipData) params["skip"] = skipData;
//   return axiosUrl
//     .get("/movies", {
//       headers: { Authorization: `Bearer ${token}` },
//       params,
//     })
    
// };

export const getmoviescall = ({
  limit,
  sortData ="genres",
  sortOrder = "asc",
  searchText,
  skipData,
}) => {
  console.log(limit,sortData,sortOrder,searchText,skipData)
  const params = { sort: sortData, sortOrder: sortOrder };
  if (limit) params["limit"] = limit;
  if (searchText) params["searchText"] = searchText;
  if (skipData) params["skip"] = skipData;
  return axiosUrl
    .get("/movies", {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    
};


export const getusercall = () => {
  return axiosUrl.get("/user/currentuser", {
     headers: { Authorization: `Bearer ${token}` },
   })
 }

