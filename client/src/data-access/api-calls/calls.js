import { state } from "../state/state.js";

export const performFetch = async (path) => {
   const URL = `${window.location.origin}/api/${path}`;

   const encodedURL = encodeURI(URL);
   const response = await fetch(encodedURL, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization:
            state.token === undefined ? "" : `Bearer ${state.token}`,
         Username: state.username === undefined ? "" : state.username,
      },
   });
   if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}\n-> ${URL}`);
      const data = await response.json();
      throw new Error(data.message);
   }
   const data = await response.json();
   
   return data;
};

export const performPost = async (path, body) => {
   console.log(JSON.stringify(body));
   const URL = `${window.location.origin}/api/${path}`;
   const encodedURL = encodeURI(URL);
   const response = await fetch(encodedURL, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization:
            state.token === undefined ? "" : `Bearer ${state.token}`,
         Username: state.username === undefined ? "" : state.username,
      },
      body: JSON.stringify(body),
   });
   if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}\n-> ${URL}`);
      const data = await response.json();
      throw new Error(data.message);
   }
   const data = await response.json();
   return data;
};
export const registerUser = async (FirstName, LastName, Email, Password) => {
   return await performPost("users/register", {
      FirstName,
      LastName,
      Email,
      Password,
   });
};
// login into the app
export const loginUser = async (Email, Password) => {
   return await performPost("users/login", {
      Email,
      Password,
      
   });
};


