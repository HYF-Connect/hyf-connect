export const performFetch = async (path) => {
   const URL = `${window.location.origin}/api/${path}`;

   const encodedURL = encodeURI(URL);
   const response = await fetch(encodedURL, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization:
            localStorage.getItem("token") === undefined
               ? ""
               : `Bearer ${localStorage.getItem("token")}`,
      },
   });
   if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}\n-> ${URL}`);
   }
   const data = await response.json();
   return data;
};
export const performPost = async (path, body) => {
   const URL = `${window.location.origin}/api/${path}`;
   const encodedURL = encodeURI(URL);
   const response = await fetch(encodedURL, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization:
            localStorage.getItem("token") === undefined
               ? ""
               : `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
   });
   if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}\n-> ${URL}`);
   }
   const data = await response.json();

   return data;
};
export const registerUser = async (firstName, lastName, email, password) => {
   return await performPost("users/register", {
      firstName,
      lastName,
      email,
      password,
   });
};
// login into the app
export const loginUser = async (Email, Password) => {
   return await performPost("users/login", {
      Email,
      Password,
   });
};
