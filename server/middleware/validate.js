const validEmail = (email) => {
  const valid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/; 
  return email.match(valid) && email.length < 25 && email.length > 6;
}

const validPassword = (password) => {
  const lower = /[a-z]/.test(password) ? 1 : 0;
  const upper = /[A-Z]/.test(password) ? 1 : 0;
  const digit = /\d/.test(password) ? 1 : 0;
  const special = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password) ? 1 : 0;
  return lower + upper + digit + special >= 4;
}

const validOrgName = (orgName) => {
  return orgName.length < 25 && orgName.length > 6;
}

const validOrgType = (orgType) => {
  return orgType === 'Institution' || orgType === 'Corporation';
}

