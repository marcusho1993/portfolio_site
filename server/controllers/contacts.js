const Contacts = require('../models/contacts');

module.exports.RequireAuth = (req, res, next) => {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
};

module.exports.DisplayContactsList = (req, res, next) => {
  Contacts.find((err, data) => {
    if (err) {
      console.error(err);
      res.end;
    }

    res.render('business-contacts/business-contacts', {
      title: 'Bueiness Contacts',
      contacts: data,
      displayName: req.user ? req.user.displayName : '',
    });
  }).sort({
    //sorting contacts in alphabetical order by name
    name: 1,
  });
};

module.exports.DisplayAddPage = (req, res, next) => {
  res.render('business-contacts/business-contacts', {
    title: 'Add New Contact',
    displayName: req.user ? req.user.displayName : '',
  });
};

module.exports.ProcessAdd = (req, res, next) => {
  let contact = Contacts({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  Contacts.create(contact, err => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.redirect('/contact-list');
  });
};

module.exports.DisplayEditPage = (req, res, next) => {
  let id = req.params.id;

  Contacts.findById(id, (err, ContactToEdit) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render('business-contacts/business-contacts', {
      title: 'Edit Contact',
      data: ContactToEdit,
      displayName: req.user ? req.user.displayName : '',
    });
  });
};

module.exports.ProcessEdit = (req, res, next) => {
  let id = req.params.id;

  Contacts.findById(id, (err, CompentToEdit) => {
    let updatedContact = Contacts({
      _id: id,
      name: req.bodyname,
      number: req.body.number,
      email: req.body.email,
    });

    Contacts.updateOne(
      {
        _id: id,
      },
      updatedContact,
      err => {
        if (err) {
          console.error(err);
          res.end(err);
        }

        res.redirect('/contact-list');
      }
    );
  });
};

module.exports.PerformDelete = (req, res, next) => {
  let id = req.params.id;

  Contacts.remove(
    {
      _id: id,
    },
    err => {
      if (err) {
        console.error(err);
        res.end(err);
      }

      res.redirect('/contact-list');
    }
  );
};
