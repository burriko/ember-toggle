import Ember from 'ember';

export default Ember.Component.extend({
  toggled: true,

  didInsertElement() {
    this.EventBus.subscribe('toggle_' + this.get('toggle_id'), this, 'toggle');
  },

  toggle() {
    this.set('toggled', !this.get('toggled'));
  }
});
