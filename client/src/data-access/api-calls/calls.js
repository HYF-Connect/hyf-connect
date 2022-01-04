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
            localStorage.getItem("token") === undefined
               ? ""
               : `Bearer ${localStorage.getItem("token")}`,
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

export const performUpdate = async (path, body) => {
   console.log(JSON.stringify(body));
   const URL = `${window.location.origin}/api/${path}`;
   const encodedURL = encodeURI(URL);
   const response = await fetch(encodedURL, {
      method: "PUT",
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
export const updateUserProfile = async (
   Nationality,
   ProfilePicture,
   Bio,
   GithubURL,
   LinkedinURL,
   WebsiteURL,
   Class,
   JobTitle,
   Region
) => {
   return await performUpdate("users/:userId/profile", {
      Nationality,
      ProfilePicture,
      Bio,
      GithubURL,
      LinkedinURL,
      WebsiteURL,
      Class,
      JobTitle,
      Region,
   });
};
export const userLanguage = async (LanguageID, Level) => {
   return await performPost("users/:userId/skill", {
      LanguageID,
      Level,
   });
};
export const userSkill = async (SkillID, Level, SelectedSkill) => {
   return await performPost("users/:userId/language", {
      SkillID,
      Level,
      SelectedSkill,
   });
};
export const userType = async (TypeID) => {
   return await performPost("users/:userId/type", {
      TypeID,
   });
};
