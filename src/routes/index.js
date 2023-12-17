const newRouter = require('./news');

function route(app) {
  // lấy url trang mặc định
  app.use('/news', newRouter);
  
  app.get("/", (req, res) => {
    res.render("home");
  });

//   app.get("/news", (req, res) => {
//     res.render("news");
//   });


  app.get("/search", (req, res) => {
    res.render("search");
  });
  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("Thành công");
  });
}

module.exports = route;
