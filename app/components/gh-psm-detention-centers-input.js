import Component from '@ember/component';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

export default Component.extend({

    store: service(),

    // public attrs
    selectedDetentionCenters: null,
    tagName: '',
    triggerId: '',

    // internal attrs
    availableDetentionCenters: null,

    // closure actions
    updateDetentionCenters() {},

    availableAuthorNames: computed('availableDetentionCenters.@each.name', function () {
        return this.get('availableDetentionCenters').map(dc => dc.get('name').toLowerCase());
    }),

    init() {
        this._super(...arguments);
        // perform a background query to fetch all users and set `availableDetentionCenters`
        // to a live-query that will be immediately populated with what's in the
        // store and be updated when the above query returns
        this.store.query('detention-center', {limit: 'all'});
        this.set('availableDetentionCenters', this.store.peekAll('detention-center'));
    },

    actions: {
        updateDetentionCenters(newDcs) {
            this.updateDetentionCenters(newDcs);
        }
    }

});
