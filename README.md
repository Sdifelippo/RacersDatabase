# RacersDatabase

Using our Race project from this morning, please complete the following:
Add a few more runner records to the database using the INSERT statement at the bottom of the setup.sql file. This is so you have a few more records to work with when testing your index page.
Modify the / GET endpoint in app.js such that it shows all runner records in a pretty HTML page, rather than just showing the first record as JSON. This means you'll need to install Mustache as a dependency and create a template file where you iterate over each runner record and create a card or other UI presentation to show each runner in a list.
Create a new GET endpoint that uses the bib_id column from the runner table to show the details about a single runner. Again, create a mustache template that shows the runner data in a pleasing format. The user will navigate to this page by clicking on an individual runner on the main page. HINT: you'll also need a new function in the db/index.js file to fetch runners based on bib_id from Postgres.
Create new GET and POST endpoints to show and process a form to that collects data about a new runner the user wants to add to the database. Once the runner has been added to Postgres (again, with a new function you create inside db/index.js), redirect the user to the / page and show all the runners.
To submit your homework. just send a slack message to Brian or I with your GitHub repo link.
