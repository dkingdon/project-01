function index(req, res) {
  res.json({
    message: "Welcome to Trail Finder!",
    documentation_url: null,
    base_url: null,
    endpoints: [
      {method: "GET", path: "/api", description: "Availabe endpoints"},
      {method: "GET", path: "/api/trails", description: "All the trails"},
      {method: "POST", path: "/api/comments", description: "All the posted comments by user"}
    ]
  });
}

module.exports.index = index;
