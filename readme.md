# Directus M2M Updation Error

## Issue Description

I am facing a permission error when trying to update a many-to-many relationship field (`conflicts`) in the `schedule` collection connected to the `classes` collection. However, updating through the junction table works as expected.

## Steps to Run the Project

1. Clone this repository:
   git clone https://github.com/ty-kunal/directus_m2m_updation_error.git

2. Install Directus globally if not already:
   npm install -g directus

3. Initialize a new Directus project if needed:
   npx directus init

4. Navigate into your Directus project directory:
   cd your-directus-project

5. Apply the schema from the cloned repository:
   npx directus schema apply --yes --file ../directus_m2m_updation_error/staging.yaml

6. Start Directus:
   npx directus start

Ensure your database is configured correctly in the .env file before applying the schema.
