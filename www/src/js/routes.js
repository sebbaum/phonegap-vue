/**
 * Definition of routes and instantiation of the VueRouter.
 *
 * @returns {VueRouter}
 */

import VueRouter from 'vue-router'

export default function routes() {

    // These can be imported from other files
    const Foo = { template: '<div>foo</div>' };
    const Bar = { template: '<div>bar</div>' };

    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ];

    return new VueRouter({
        routes // short for routes: routes
    });
}