import Ember from 'ember';

export default Ember.GlimmerComponent.extend({
  toggled: true,

  didInsertElement() {
    this.EventBus.subscribe('toggle_' + this.attrs.toggle_id, this, 'toggle');
  },

  toggle() {
    this.set('toggled', !this.get('toggled'));
  }
});
