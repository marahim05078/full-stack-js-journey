// Utility function to generate a random integer in a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility function to pick a random item from an array
function getRandomItem(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

// Function to generate a random phone number
function generatePhoneNumber() {
  return `+1-${getRandomInt(200, 999)}-${getRandomInt(200, 999)}-${getRandomInt(1000, 9999)}`;
}

// Function to generate a random email
function generateEmail(firstName, lastName) {
  const domains = ["example.com", "mail.com", "test.org", "demo.net"];
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${getRandomItem(domains)}`;
}

// Function to generate a random contact object
function generateRandomContact() {
  const firstNames = [
    "John",
    "Jane",
    "Alex",
    "Emily",
    "Chris",
    "Sophia",
    "Liam",
    "Olivia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Taylor",
    "Anderson",
    "Lee",
    "Walker",
    "Harris",
  ];
  const streets = [
    "Main St",
    "High St",
    "Broadway",
    "Maple Ave",
    "Oak St",
    "Pine Rd",
  ];
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Seattle",
  ];
  const states = ["NY", "CA", "IL", "TX", "AZ", "WA"];

  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);

  return {
    id: getRandomInt(1000, 9999),
    name: firstName + " " + lastName,
    email: generateEmail(firstName, lastName),
    phone: generatePhoneNumber(),
  };
}

// Example: Generate 5 random contacts
const contacts = Array.from({ length: 50 }, generateRandomContact);
console.log(contacts);
