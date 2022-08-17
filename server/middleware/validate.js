const validate = {};

// helpers
const lengthFilter = (input) => {
  return input.length < 25 && input.length > 6
}

// User
//email
const validEmail = (email) => {
  const valid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/; 
  return email.match(valid) && lengthFilter(email);
}

// password
const validPassword = (password) => {
  // requires at least one of each of lower and uppercase letters, digits and special characters
  const lower = /[a-z]/.test(password) ? 1 : 0;
  const upper = /[A-Z]/.test(password) ? 1 : 0;
  const digit = /\d/.test(password) ? 1 : 0;
  const special = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password) ? 1 : 0;
  const res = lower + upper + digit + special;
  return res >= 4 && lengthFilter(password);
}

// need to add for other user inputs


// organization
const validOrgName = (orgName) => {
  return lengthFilter(orgName);
}

const validOrgType = (orgType) => {
  return orgType === 'Institution' || orgType === 'Corporation';
}


//Edit profile
const fields = ['id', 'firstname', 'lastname', 'email', 'password', 'organization_id', 'type', 'location', 'interests', 'bio', 'img_url', 'orgname'];

validate.validEditFields = (editFields) => {
  const editFieldKeys = Object.keys(editFields);

  for(i=0; i<fields.length; i++) {
    if(editFieldKeys.indexOf(fields[i]) < 0)
      return false;
    }
    
  return true
}

module.exports = validate;