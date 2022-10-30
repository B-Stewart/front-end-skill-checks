# [Front-End Skill Checks](https://front-end-skill-checks.onrender.com)

## General Guidelines

You can implement these projects in any framework with any style library or pattern. This repo's examples are done using React and Material UI mostly.

Ideally you should be able to just look at these urls and not have to use the source code to "re-implement" them. If you want to look at the solution you can look at the project folder to see how the React component was built.

## Projects

### [1. Counter](https://front-end-skill-checks.onrender.com/projects/counter)

#### Instructions

Create a counter that can increment and decrement.

#### Extra Credit

Persist the data across reloads so that when you refresh the page it loads the previous counted value.

### [2. Thermometer](https://front-end-skill-checks.onrender.com/projects/thermometer)

#### Instructions

Create a weather thermometer app that can show the data of city's weather conditions.

This is meant to be an API interaction, you can use the local API like this repo, or another weather alternative if you'd like.

#### Extra Credit

Cache / Memoize the data returned from the API such that when you load "London" for example, then click to another city, when you return to "London" it doesn't refetch the API, but uses the previous value.

### [3. Card UI](https://front-end-skill-checks.onrender.com/projects/card-ui)

#### Instructions

Create a repeating layout of images and text that have a "card" style look.

This should be a responsive design so that it looks good no matter what size screen you have.

#### Extra Credit

Handle the case where if the image takes too long to load there is a "jump" of the layout once the image loads. This can be mocked by adding network delay in chrome dev tools. Suggestion would be to add a skeleton layout or loading animation.
