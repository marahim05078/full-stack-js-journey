const sendMail = (subject) => (greeting) => (name) =>
  `${greeting} Mr. ${name}, ${subject}`;
const welcomeMail = sendMail("Welcome to the WRINON store!");
const greetingName = welcomeMail("Hello")("Abdur Rahim");
console.log(welcomeMail);
console.log(greetingName);
