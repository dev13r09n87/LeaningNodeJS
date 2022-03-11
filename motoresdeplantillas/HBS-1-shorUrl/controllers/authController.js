
const loginForm = (req, res) => {
    res.render('login');
};
const resgisterForms = (req, res) => {
    res.render('register');
};

module.exports = {
    loginForm,
    resgisterForms,
};