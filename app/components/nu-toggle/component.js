import Ember from 'ember';

export default Ember.GlimmerComponent.extend({
  click() {
    this.EventBus.publish('toggle_' + this.attrs.toggle_id);
  }
});
