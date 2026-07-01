/**
 * Creating HTML list using link array
 */

const links = [
  { name: "Facebook", url: "https://www.facebook.com/" },
  { name: "Youtube", url: "https://www.youtube.com/" },
  { name: "Instagram", url: "https://www.instagram.com/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/" },
];

let template = `<ul>{{links}}</ul>`;
let linklist = links.reduce((acc, cur) => {
  acc += `\n<li><a href="${cur.url}">${cur.name}</a></li>`;
  return acc;
}, "");
template = template.replace("{{links}}", linklist + "\n");
console.log(template);
