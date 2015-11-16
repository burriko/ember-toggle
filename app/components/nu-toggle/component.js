import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle() {
      this.EventBus.publish('toggle_' + this.get('toggle_id'));
    }
  }
});
