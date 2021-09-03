function graduate(credential) {
  return function (fullName) {
    return fullName + credential;
  };
}

const medicalSchool = graduate(', M.D.');
const lawSchool = graduate(', Esq.');

medicalSchool('Daniel Hong,');
lawSchool('Daniel Hong,');
