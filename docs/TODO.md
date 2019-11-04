# Project Planning

This markdown contains an initial time plan for the dashboard. The goal is to finish the first prototype of the dashboard before the beginning of the revision time, ie before Christmas.
The christmas holiday will then be used for testing.

## Dash visualisation templates in Dash

- [ ] Build a timeseries visualisation
- [ ] Build a network visualisation
- [ ] Think about the mapping from the visualisations to the views
  - Each view can receive some data as input as well as other parameters
  - How to best specify this in a json file?

## Sidebar <-> Mainview communication

- Create a component that can manage the global state, maybe use the context provider https://reactjs.org/docs/context.html
  - Use multiple contexts if required to pass down the states
  - Create a Storage component that handles the datasets that are loaded in, the modifications that have been made to this data and the annotations, handles the views that are currently open
  - A seperate context can be used to handle the views

## Sidebar

- Connect the add button to create new widgets or views

## Data importing and annotation database
