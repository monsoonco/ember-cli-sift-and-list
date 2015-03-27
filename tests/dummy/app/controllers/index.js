import Ember from 'ember';

export default Ember.Controller.extend({
  list:[
    {title: 'Annapurna I', location: 'Nepal', continent: 'Asia'},
    {title: 'Annapurna II', location: 'Nepal', continent: 'Asia'},
    {title: 'Annapurna III', location: 'Nepal', continent: 'Asia'},
    {title: 'Eiger', location: 'Switzerland', continent: 'Europe'},
    {title: 'Everest', location: 'Nepal', continent: 'Asia'},
    {title: 'Gannett', location: 'Wyoming', continent: 'North America'},
    {title: 'Denali', location: 'Alaska', continent: 'North America'}
  ],
  results: []
});
