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
// update user profile
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
// update user languages
export const updateUserLanguages = async (languages) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/language`, {
      languages,
   });
};
// update user user skills
export const updateUserSkills = async (skills) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/skill`, {
      skills,
   });
};
// update user types
export const updateUserTypes = async (types) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/type`, {
      types,
   });
};
// update user picture profile
export const updatePicture = async (ProfilePicture) => {
   const id = localStorage.getItem("userId");
   return await performUpdate(`users/${id}/picture`, {
      ProfilePicture,
   });
};
// fetching all user
export const fetchUsers = async () => {
   return await performFetch("users");
};
// fetching user by id
export const fetchUserById = async (userId) => {
   return await performFetch(`users/${userId}`);
};
// fetching all languages
export const fetchAllLanguages = async () => {
   return await performFetch("languages");
};

// fetching all classes
export const fetchAllClasses = async () => {
   return await performFetch("classes");
};
// fetching all regions
export const fetchAllRegions = async () => {
   return await performFetch("regions");
};
// fetching all nationalities
export const fetchAllNationalities = async () => {
   return await performFetch("nationalities");
};
// fetching all types of user
export const fetchAllTypes = async () => {
   return await performFetch("types");
};
// fetching all skills
export const fetchAllSkills = async () => {
   return await performFetch("skills");
};
// fetching all types of a user
export const fetchUserTypes = async (userId) => {
   return await performFetch(`users/${userId}/type`);
};
// fetching all skills of a user
export const fetchUserSkills = async (userId) => {
   return await performFetch(`users/${userId}/skill`);
};
// fetching all languages of a user
export const fetchUserLanguages = async (userId) => {
   return await performFetch(`users/${userId}/language`);
};
// fetching all projects
export const fetchProjects = async () => {
   return await performFetch("projects/");
};

// fetching projects by Id
export const fetchProjectById = async (projectId) => {
   return await performFetch(`projects/${projectId}`);
};

// fetching all members from project
export const fetchAllProjectUsers = async (projectId) => {
   return await performFetch(`projects/${projectId}/users`);
};

// fetching all projects of a member
export const fetchUserProjects = async (userId) => {
   return await performFetch(`users/${userId}/projects`);
};
// create project
export const createProject = async (
   Title,
   WebsiteURL,
   GithubURL,
   Description,
   Thumbnail
) => {
   return await performPost("projects/", {
      Title,
      WebsiteURL,
      GithubURL,
      Description,
      Thumbnail,
   });
};
// update members of a project
export const updateProjectUsers = async (projectId, users) => {
   return await performUpdate(`projects/${projectId}/users`, {
      users,
   });
};

// update project
export const updateProject = async (
   projectId,
   Title,
   Description,
   GithubURL,
   WebsiteURL
) => {
   return await performPost(`projects/${projectId}`, {
      Title,
      Description,
      GithubURL,
      WebsiteURL,
   });
};

//update thumbnail from project

export const updateProjectThumbnail = async (projectId, projectThumbnail) => {
   return await performUpdate(`projects/${projectId}/thumbnail`, {
      projectThumbnail,
   });
};
