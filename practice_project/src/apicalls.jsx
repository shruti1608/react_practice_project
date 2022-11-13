import axios from "axios";

let token = "";
const axiosUrl = axios.create({
  //baseURL : "http://34.208.44.89:3006"
  baseURL: process.env.REACT_APP_API_URL
})

export const signupcall = ([age, name, email, password]) => {
 return axiosUrl
    .post("/auth/signup", {
      age: parseInt(age),
      name: name,
      email: email,
      password: password,
    })
    .then((res) => console.log(res.data));
};

export const sigincall = ([email, password]) => {
 return axiosUrl
    .post("/auth/login", {
      username: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data.token);
      token = res.data.token;
    });
};


export const updateuser = ([name,password,age]) => {
const vname = { name:name,password:password,age:parseInt(age)}
  return axiosUrl.put('/user',vname, {
    headers: { Authorization: `Bearer ${token}` },
    
      })
}


export const getusercall = () => {

  return axiosUrl.get("/user/currentuser", {
     headers: { Authorization: `Bearer ${token}` },
   })
 }

 export const getmoviescall = ({
  queryKey: [
    ,
    { limit, sortData = "genres", sortOrder = "asc", searchText = "", skipData },
  ],
}) => {
 
  return axiosUrl
    .get("/movies", {
      headers: { Authorization: `Bearer ${token}` },
      params:{limit : limit ?? 12,
      sort: sortData || 'genres',
      sortOrder: sortOrder || 'asc',
      searchText: searchText || undefined,
      skip:skipData },
    })
    
};

 