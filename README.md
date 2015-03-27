# Ember-cli-sift-and-list

[![Build Status](https://travis-ci.org/soulim/ember-cli-bootstrap-datepicker.svg?branch=master&style=flat)](https://travis-ci.org/soulim/ember-cli-bootstrap-datepicker)

The add-on provides you a date input component based on amazing bootstrap-datepicker library. It supports popup and inline mode, and can be used in Ember CLI applications.

[Online demo](http://sul.im/ember-cli-bootstrap-datepicker)

## Installation

If you are using Ember CLI 0.1.5 and higher, just run within your project directory:

```bash
ember install:addon ember-cli-bootstrap-datepicker
```

When your Ember CLI version is below 0.1.5, please run within your project directory:

```bash
npm install --save-dev ember-cli-bootstrap-datepicker
ember generate bootstrap-datepicker
```

## Usage

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
