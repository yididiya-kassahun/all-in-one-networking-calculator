exports.generatorPage = (req, res, next) => {
    res.render("passGenerator", {
      pageTitle: "password generator page",
    });
  };
  