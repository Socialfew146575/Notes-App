exports.homepage = async (req, res) => {
  console.log("Homepage controller called");
  const locals = {
    title: "NodeJS Notes",
    description: "Free NodeJs Notes App",
  };

  res.render('index', { locals, layout: '../views/layouts/front-page' });
};

exports.about = async (req, res) => {
  console.log("About controller called");
  const locals = {
    title: "About - NodeJS Notes",
    description: "Free NodeJs Notes App",
  };

  res.render('about', locals);
};
