# project-01
##Bay Area: Trail Finder
* https://powerful-gorge-38317.herokuapp.com/ 

# Goals
### Site
* Express API Build an Express Application that has both HTML and JSON endpoints.
* RESTful Routes Design your CRUD routes using the REST convention.
* AJAX Leverage AJAX to fetch JSON data from the backend.
* jQuery Use jQuery to add interactivity and render data on the client-side.
* Templating Render the JSON data on the frontend using handlebars templates.
* MongoDB Persist at least two models to a Mongo Database. Use at least one one-to-many or many-to-many relationship between models. You can choose to reference or embed your data.
* Git 50+ commits. Commit early, commit often, and clear commit messages.
* Visual Design Use Twitter Bootstrap, Foundation, Skeleton, or another CSS framework to make your front-end visually pleasing.
* Heroku Deploy your app to Heroku.
### Planning
* Project Plan - https://docs.google.com/drawings/d/1t_dU_ShYptctj8sOF-k3jUxaI9KY12-OxG5Ve2ahP8E/edit
* Clearly defined Minimum Viable Product (MVP) Scope.
Wireframes for every page. These don't have to be pretty; just sketch what the page will include.
* User Stories
* Database Models and ERD Make plans for each resource. Draw an Entity Relationship Diagram to illustrate the relationship(s) between models.
* A Feasibility Check for any bonus feature you'd like to complete.

## Technologies
* Web Hosting @ Heroku.com
* HTML, CSS, javascript, jQuery 3.1.1 CDN, Boostrap 3.3.7 CDN, Handlebars 4.0.6 CDN, Express, Mongoose, MongoDB

## Missed Goals
* PUT route not in working order.
* Code Style Write professional-looking code. Follow the Airbnb Javascript Styleguide.


## API Documentation

| Type | Path         | Description                    |
| :--------: |:------------:| :------------------------------|
| GET        | '/'          | Displays index.html on homepage |
| GET        | '/api '| Redirects to full outline of api routs and descriptions |
| GET        | '/api/trails'| etches trail data for 12 hardcoded trails and any addition trails created |
| POST       | '/api/trails' | Creates new trail objects |
| DELETE     | 'api/trails' | Deletes trail objects |
| PUT        | '/api/comments'  | Not in working order, but designed to add new comments to trail objects by id  |


## Resources
* Express - http://expressjs.com/en/api.html
* Stackoverflow - http://stackoverflow.com/
* Mozilla Developer Network - https://developer.mozilla.org
* jQuery API - http://api.jquery.com/
* Mongoosejs - http://mongoosejs.com/docs/api.html
* Boostrap - http://bootstrapdocs.com/v3.3.6/docs/css/
* Handlebars - http://handlebarsjs.com/
* Heroku set up - https://github.com/SF-WDI-LABS/shared_modules/blob/master/how-to/heroku-mean-stack-deploy.md
* Google Fonts - https://fonts.google.com/
* GoogleDocs (for planning)

## Credits
* https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet
* https://www.heroku.com/
