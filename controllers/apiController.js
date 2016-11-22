function index(req, res) {
  res.json({
    message: "Welcome to Trail Finder!",
    documentation_url: null,
    base_url: null,
    endpoints: [
      {method: "GET", path: "/api", description: "Api description"},
      {method: "GET", path: "/api/trails", description: "Fetches trail data for 12 hardcoded trails and any addition trails created"},
      {method: "POST", path: "/api/trails", description: "Creates new trail object"},
      {method: "PUT", path: "/api/comments", description: "Updates trail object comments array"},
      {method: "DELETE", path: "/api/trails", description: "Deletes trail objects"}
    ]
  });
}

module.exports.index = index;
