/**
 * Inspecting nested Object uding reduce method
 */
const js = {
  name: "Javascript: All you need to know",
  author: {
    name: "Abdur Rahim",
    email: "rahim@gmail.com",
  },
  contents: {
    video: {
      count: 222,
    },
  },
};
const node = {
  name: "Drive into Node.js",
  author: {
    name: "Abdur Rahim",
    email: "rahim@gmail.com",
  },
  contents: {
    video: {
      count: 234,
    },
  },
};

const react = {
  name: "React: Think in a Ract way",
  author: {
    name: "Abdur Rahim",
    email: "rahim@gmail.com",
  },
  contents: {
    video: {
      count: 135,
    },
    article: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};

// Inspection function
const inspectObject = (obj, path) => {
  return path.split("/").reduce((acc, field) => {
    if (acc) {
      return acc[field];
    } else {
      return 0;
    }
  }, obj);
};

const courses = [js, node, react];

courses.forEach((item) => {
  console.log(
    `${item.name} has Video =  ${inspectObject(item, "contents/video/count")}`,
  );
  console.log(
    `${item.name} has Article =  ${inspectObject(item, "contents/article/count")}`,
  );
  console.log(
    `${item.name} has Quiz =  ${inspectObject(item, "contents/quiz/count")}`,
  );
});
