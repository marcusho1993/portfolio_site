const passport = require("passport");

module.exports.DisplayHomePage = (req, res) => {
  res.render('index', {
    title: 'Home',
    content: 'welcome.ejs',
    displayName: req.user ? req.user.displayName : ''
  });
}

module.exports.DisplayAboutPage = (req, res) => {
  res.render('index', {
    title: "About",
    content: "about.ejs",
    displayName: req.user ? req.user.displayName : ''
  })
}

module.exports.DisplayProjectsPage = (req, res) => {
  res.render('index', {
    title: "Projects",
    content: "projects.ejs",
    displayName: req.user ? req.user.displayName : ''
  })
}

module.exports.DisplayServicesPage = (req, res) => {
  res.render('index', {
    title: "Services",
    content: "services.ejs",
    displayName: req.user ? req.user.displayName : ''
  })
}

module.exports.DisplayContactMePage = (req, res) => {
  res.render('contact', {
    title: "Contact",
    displayName: req.user ? req.user.displayName : ''
  })
}

module.exports.DisplayLoginPage = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('auth/login', {
    title: 'Login',
    messages: req.flash('loginMessage'),
    DisplayName: req.user ? req.user.displayName : ''
  })
}

module.exports.ProcessLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }

    // login err?
    if (!user) {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }

    req.login(user, (err) => {
      // db server err?
      if (err) {
        return next(err);
      }
      res.redirect('/contact-list');
    });
  })(req, res, next);
}

module.exports.PerformLogout = (req, res) => {
  req.logout();
  res.redirect('/');
}