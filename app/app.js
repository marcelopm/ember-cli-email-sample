import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    rootElement: '.example-output',
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver,
    // Basic logging, e.g. "Transitioned into 'post'"
    //LOG_TRANSITIONS: true,
    // Extremely detailed logging, highlighting every internal
    // step made while transitioning into a route, including
    // `beforeModel`, `model`, and `afterModel` hooks, and
    // information about redirects and aborted transitions
    //LOG_TRANSITIONS_INTERNAL: true
});

loadInitializers(App, config.modulePrefix);

export default App;
