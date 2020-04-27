# Pokemon S3 Lab

## Starting the app

### API

1. Require starting MongoDB
2. Create `api/.env` add MONGO_URL
3. Run `npm install` to install the dependency
4. Add one Pokemon into the database manually following the `api/sampleData/pokemon.js` file.
5. Sample images are in the `api/sampleData` folder
6. Run `npm start` to start the app locally on PORT 5000

### UI

1. Run `npm install` to install the dependency
2. Run `npm start` to start the app on PORT 3000

## Lab

1. Create an S3 Bucket to host Pokemon images

   - ensure that images is not accessible by public first
   - add a bucket policy to allow read only permission

2. Update the Pokemon data in the database to display images on React App. The express app should return the data with s3 URL for images.
3. Create a Policy for write permission `putObject`
4. Create a Group in IAM and add the newly created Policy
5. Create a User and add user to the Created Code.
6. Install the `aws sdk` on node js
7. add environment vairable `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `BUCKET_NAME`. Be sure not to commit the environment variables and NOT to share it.
8. Create a function to get `presignedUrl` from s3.
9. Create a route that returns the `presignedUrl`
10. On React, upload the image to S3 and get back the URL in `config.url` use `axios.put` method
11. Call `axios.post` to create a Pokemon with the image URL.
12. Try Creating new Pokemon, verify the image is on S3 and verify the Pokemon are showing in the gallery.
