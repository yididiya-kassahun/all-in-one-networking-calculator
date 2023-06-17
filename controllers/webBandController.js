exports.webBandPage = (req, res, next) => {
    res.render("webBandwidthCalc", {
      pageTitle: "Web bandwidth calculator page",
    });
  };
  