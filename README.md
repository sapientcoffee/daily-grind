```
/*
Copyright 2025 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
```
<a href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2Fsapientcoffee%2Fdaily-grind">
  <img
    height="32"
    alt="Continue in IDX"
    src="https://cdn.idx.dev/btn/continue_light_32.svg">
</a>

# The Daily Grind



## frontend

npm install -g @angular/cli


## backend
npm install genkit @genkit-ai/googleai

npm install -D genkit-cli

npx genkit init brew --template typescript

npx genkit flow:run menuSuggestionFlow '"French"'

LatteArt
brew - be


# 🔧 Development
To get started with development, follow these steps:

Install the required dependencies:

```
npm install
```
Authenticate with Google Cloud:

```
gcloud init
gcloud auth application-default login
```

[OPTIONAL] Setup local environemnt for firebase, select emulators (auth, firesotre)

```
firebase init
```
Start Firebase emulators to allow you to develop the appliction locally
```
firebase emulators:start
```
Start application
GenKit is used to orchestrate interactions with LLMs. To run the application locally with GenKit:
```
npm run dev
```

# Deploy

1st time

```
firebase login
firebase apphosting:backends:get --project cymbal-daily-grind latteart --location us-central1
```