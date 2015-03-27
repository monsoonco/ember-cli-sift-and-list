import Ember from 'ember';
import layout from '../templates/components/sift-and-list';
/*global Sifter*/


export default Ember.Component.extend({
  layout: layout,
  sifter: function(){
    var list = this.get('list');
    return new Sifter(list);
  }.property('list'),
  _fields: function(){
    let sortBy = this.get('sortBy');
    let fields = this.get('fields');
    if (sortBy) {
      return [sortBy];
    }
    if (fields) {
      return fields;
    }
  }.property('sortBy', 'fields'),
  sort: function(){
    return this.get('_fields').map(f => {
      return {
        field: f,
        direction: 'asc',
      };
    });
  }.property('fields', 'sortBy'),
  changeResults: function(){
    let searchField = this.get('searchInput');
    let fields = this.get('_fields');
    let sort = this.get('_sort');
    let sifter = this.get('sifter');
    let list = this.get('list');

    let results = sifter.search(searchField, {
      fields: fields,
      sort: sort
    }).items.map(i => list[i.id]);

    this.set('results', results);
  }.on('willInsertElement').observes('searchInput')
});
