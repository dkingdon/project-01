function index(req, res) {
  res.json({
    message: "Welcome to Trail Finder!",
    documentation_url: null,
    base_url: null,
    endpoints: [
<<<<<<< HEAD
      {method: "GET", path: "/api", description: ""},
      {method: "GET", path: "/api/trails", description: ""},
      {method: "POST", path: "/api/trails", description: ""},
      {method: "POST", path: "/api/comments", description: ""},
      {method: "DELETE", path: "/api/trails", description: ""}
=======
      {method: "GET", path: "/api", description: "Availabe endpoints"},
      {method: "GET", path: "/api/trails", description: "All the trails"},
      {method: "POST", path: "/api/comments", description: "All the posted comments by user"}
>>>>>>> 917657ed9586ca83578452c2b90b7ceaed49dbdd
    ]
  });
}

module.exports.index = index;
