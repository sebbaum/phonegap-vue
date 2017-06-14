/**
 * main.js is the App's main entry point.
 * The Phonegap app is initialized here.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var phonegap = {
    /**
     * Application Constructor
     */
    initialize: function() {
        this.bindEvents();
    },

    /**
     * Bind Event Listeners
     *
     * Bind any events that are required on startup. Common events are:
     * 'load', 'deviceready', 'offline', and 'online'.
     */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    /**
     * deviceready Event Handler
     *
     * The scope of 'this' is the event. In order to call the 'receivedEvent'
     * function, we must explicitly call 'app.receivedEvent(...);'
     */
    onDeviceReady: function() {
        // phonegap.receivedEvent('deviceready');
        console.log('Device is ready');
        phonegap.initVue();
    },

    /**
     * Start vuejs
     */
    initVue: function() {

        // These can be imported from other files
        const Foo = { template: '<div>foo</div>' };
        const Bar = { template: '<div>bar</div>' };

        const routes = [
            { path: '/foo', component: Foo },
            { path: '/bar', component: Bar }
        ];

        const router = new VueRouter({
            routes // short for routes: routes
        });

        console.log('Starting vuejs');
        new Vue({
            router,
            el: '#app',
            data: {
                message: 'vue is working'
            }
        })
    }
};


// Initilize phonegap app
phonegap.initialize();
