function telephoneCheck(str) {
  // Define the regular expression for valid US phone numbers
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the input string against the regular expression
  return phoneRegex.test(str);
}

// Test the function
console.log(telephoneCheck("555-555-5555")); // Output: true
