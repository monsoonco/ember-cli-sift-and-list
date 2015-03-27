# Ember-cli-sift-and-list

Here's the basic interface of this component:

```handlebars

{{input value=searchInput}}
<ul>
{{#sift-and-list
  sortBy="title"
  list=list
  searchInput=searchInput
  results=results as |result|
}}
  <li>{{result.title}}</li>
{{/sift-and-list}}
</ul>

```

# Collaborating

This outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
