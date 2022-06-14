# Front-End Skill Checks

## General Guidelines

You can implement these projects in any framework with any style library or pattern. This repo's examples are done using React and Material UI mostly.

Ideally you should be able to just look at these urls and not have to use the source code to "re-implement" them. If you want to look at the solution you can look at the project folder to see how the React component was built.

## Projects

### [1. Counter](https://b-stewart.github.io/front-end-skill-checks/projects/counter)

#### Instructions

Create a counter that can increment and decrement.

#### Extra Credit

Persist the data across reloads so that when you refresh the page it loads the previous counted value.

### [2. Thermometer](https://b-stewart.github.io/front-end-skill-checks/projects/thermometer)

#### Instructions

Create a weather thermometer app that can show the data of city's weather conditions.

This is meant to be an API interaction, you can use [WeatherDBI](https://weatherdbi.herokuapp.com/documentation/v1) or another alternative if you'd like.

#### Extra Credit

Cache / Memoize the data returned from the API such that when you load "London" for example, then click to another city, when you return to "London" it doesn't refetch the API, but uses the previous value.
