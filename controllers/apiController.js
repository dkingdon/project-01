function index(req, res) {
  res.json({
    message: "Welcome to Trail Finder!",
    documentation_url: null,
    base_url: null,
    endpoints: [
      {method: "GET", path: "/api", description: ""},
      {method: "GET", path: "/api/trails", description: ""},
      {method: "POST", path: "/api/trails", description: ""},
      {method: "PUT", path: "/api/comments", description: ""},
      {method: "DELETE", path: "/api/trails", description: ""}
    ]
  });
}

module.exports.index = index;
