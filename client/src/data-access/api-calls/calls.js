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

// Use "PUT" method to put a path
const performPut = async (path, body) => {
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
    console.error(response);
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};
// Use "DELETE" method to delete a path
const performDelete = async (path) => {
  const URL = `${window.location.origin}/api/${path}`;
  const encodedURL = encodeURI(URL);

  const response = await fetch(encodedURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        localStorage.getItem("token") === undefined
          ? ""
          : `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    console.error(response);
    throw new Error(`HTTP error! status: ${response.status}\n-->${URL}`);
  }
  const data = await response.json();

  return data;
};

// registering a user

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
// fetching all users
export const fetchUsers = async () => {
  return await performFetch("users/");
};
// fetching all users skills
export const fetchSkills = async () => {
  return await performFetch("users/:userID/skill");
};
