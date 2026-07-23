/**
 * 1. find user by username
 * 2. find post by userId
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the latest commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

// function get(path, callback) {
//   const data = {};
//   return callback();
// }

// function getUserNameFromComment(username) {
//   get(`https://jsonplaceholder.typicode.com/users?username=${username}`, (user) => {
//     get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, (post)=>{
//         get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, (comments)=>{
//             get(`https://jsonplaceholder.typicode.com/users?comment`)
//         })
//     })
//   });
// }

// const isResolved = false;

// const promise = new Promise((resolve, reject) => {
//   if (isResolved) {
//     return resolve("Promise has been resolved successfully.");
//   } else {
//     return reject("Promise has been rejected.");
//   }
// });

// // promise.then((res) => console.log(res)).catch((e) => console.log(e));
// console.log(promise);

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments";

const axios = require("axios");

async function getCommentFromUser(username) {
  try {
    const { data: user } = await axios.get(
      `${USER_URL}?username =${username}`,
      {
        timeout: 10000,
      },
    );
    const { data: posts } = await axios.get(`${POST_URL}?userId=${user[0].id}`);
    const { data: comment } = await axios.get(
      `${COMMENT_URL}?postId=${posts[0].id}`,
    );
    const { data: userfromComment } = await axios.get(
      `${COMMENT_URL}?id=${comment[0].id}`,
    );
    return userfromComment;
  } catch (e) {
    console.log(e.config.url);
  }
}

const getUser = getCommentFromUser("Bret");
getUser
  .then((result) => result[0])
  .then((response) => console.log(response.name))
  .catch((e) => console.log("Something went wrong:", e.message));
