// use GET method to fetch a path
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

// use POST method to post a path
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
   FirstName,
   LastName,
   Email,
   Nationality,
   Region,
   JobTitle,
   Class,
   GithubURL,
   WebsiteURL,
   LinkedinURL,
   Bio
) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/profile`, {
      FirstName,
      LastName,
      Email,
      Nationality,
      Region,
      JobTitle,
      Class,
      GithubURL,
      WebsiteURL,
      LinkedinURL,
      Bio,
   });
};
export const updateUserLanguages = async (languages) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/language`, {
      languages,
   });
};
export const updateUserSkills = async (skills) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/skill`, {
      skills,
   });
};
export const updateUserTypes = async (types) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/type`, {
      types,
   });
};

export const updatePicture = async (ProfilePicture) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/picture`, {
      ProfilePicture,
   });
};
export const fetchUsers = async () => {
   return await performFetch("users");
};

export const fetchUserById = async (userId) => {
   return await performFetch(`users/${userId}`);
};

export const fetchAllLanguages = async () => {
   return await performFetch("languages");
};

export const fetchAllClasses = async () => {
   return await performFetch("classes");
};

export const fetchAllRegions = async () => {
   return await performFetch("regions");
};
export const fetchAllNationalities = async () => {
   return await performFetch("nationalities");
};

export const fetchAllTypes = async () => {
   return await performFetch("types");
};
export const fetchAllSkills = async () => {
   return await performFetch("skills");
};
export const fetchUserTypes = async (userId) => {
   return await performFetch(`users/${userId}/type`);
};
export const fetchUserSkills = async (userId) => {
   return await performFetch(`users/${userId}/skill`);
};
export const fetchUserLanguages = async (userId) => {
   return await performFetch(`users/${userId}/language`);
};
// create project
export const createProject = async (
   Title,
   Description,
   GithubURL,
   WebsiteURL,
   Thumbnail
) => {
   return await performPost("project", {
      Title,
      Description,
      GithubURL,
      WebsiteURL,
      Thumbnail,
   });
};

// fetching all projects
export const fetchProjects = async () => {
   return await performFetch("projects/");
};
