# Plagnosis - Plant Diagnosis Web Service

![Plagnosis Logo](https://plantscan-9d081.web.app/asset/images/favicon.ico)

Plagnosis is a web service that simplifies the process of identifying plants. Whether you are a gardening enthusiast, a botanist, or simply curious about the flora around you, Plagnosis can help you discover the scientific name, commonly used name, and family of a plant in just a few seconds.

## Table of Contents

- [Introduction](#plagnosis---plant-diagnosis-web-service)
- [How It Works](#how-it-works)
- [Why Plagnosis](#why-plagnosis)
- [Getting Started](#getting-started)
  - [Firebase Deployment](#firebase-deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## How It Works

Plagnosis is a web-based plant identification service that leverages advanced image recognition algorithms to identify plants based on pictures provided by the user. The basic algorithm is as follows:

1. **Input Picture**: I created this service to allow users to take a picture of a plant using their device's camera or upload an existing image.

2. **Send it to Pl@net.net API**: The input picture is sent to the Pl@net.net API, where it is processed using machine learning models and image recognition technology.

3. **Get Result**: The API returns the plant's scientific name, commonly used name, and family.

4. **Show it to People**: The results are displayed on the web page for the user to see.

I continuously strive to improve and expand the plant database and image recognition capabilities, making Plagnosis an invaluable tool for plant enthusiasts.

## Why Plagnosis

Plagnosis was born out of my desire to simplify plant identification. As a member of the "Plants Lover Club," I noticed the challenge of identifying plants within the club. With a wide variety of plants, each having its own unique characteristics, identifying them accurately was often a time-consuming and frustrating task. Plagnosis aims to bridge this gap and make plant identification quick and easy for everyone.

## Getting Started

### Firebase Deployment

1. Clone the Plagnosis repository to your local machine:

   ```bash
   git clone https://github.com/cocomon3448/plagnosis.git
   ```

2. Navigate to the project directory:

   ```bash
   cd plagnosis
   ```

3. Make sure you have the Firebase CLI installed. If not, you can install it with:

   ```bash
   npm install -g firebase-tools
   ```

4. Log in to your Firebase account or create one if you haven't already:

   ```bash
   firebase login
   ```

5. Initialize a Firebase project:

   ```bash
   firebase init
   ```

   - Select the Firebase features you want to use. In your case, you will need Hosting.
   - Choose an existing project or create a new one on the [Firebase console](https://firebase.google.com).
   - Set the public directory to the location where your web application is located (usually a "public" directory).
   - Configure - It is not single page app

6. Before you deploy:

   - In file [index.html](public/index.html) line 182, you should change the API key to yours. ([Visit Pl@nt Net Dev page](https://my.plantnet.org))
   - Then visit again to Pl@ntNet API dev page, go mypage -> settings, and then add your domain. (BEWARE OF THIS. API WILL NEVER SHOW RESULT IF YOU FORGET THIS)
   

8. Deploy your Plagnosis web service to Firebase:

   ```bash
   firebase deploy
   ```

9. Once the deployment is complete, Firebase will provide you with a hosting URL where your Plagnosis web service is accessible.

## Usage

1. Open the Plagnosis web service.

2. Click the "Upload Image" button or use your device's camera to take a picture of the plant.

3. Wait a few seconds for the image to be processed and identified.

4. The results, including the scientific name, commonly used name, and family of the plant, will be displayed on the screen.

5. Explore the world of plants and become a better plant enthusiast!

## Web Demo for Everyone

This is the link for the web-demo.
I am currently on Free Option(so, one day limit is 500 request)
https://plantscan-9d081.web.app

## Contributing

I welcome contributions from the community to improve and expand Plagnosis.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

I would like to express my gratitude to the Pl@net.net team for their support and expertise in plant identification technology. Additionally, I want to thank the "Plants Lover Club" for inspiring this project and providing valuable feedback during its development. I hope Plagnosis helps plant enthusiasts and botanists alike in their quest to identify and learn more about the plant world. In addition, this web is in the demo state, meaning that not whole parts of the project are smooth and clear. (The result may turned out to be wrong.)