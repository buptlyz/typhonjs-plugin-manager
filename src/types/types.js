/**
 * @typedef {object} PluginConfig
 *
 * @property {string}   name - Defines the name of the plugin; if no `target` entry is present the name
 *                             doubles as the target (please see target).
 *
 * @property {string}   [target] - Defines the target NPM module to load or defines a local file (full
 *                                 path or relative to current working directory to load.
 *
 * @property {string}   [instance] - Defines an existing object instance to use as the plugin.
 *
 * @property {object}   [options] - Defines an object of options for the plugin.
 */

/**
 * @typedef {object} ManagerOptions
 *
 * @property {boolean}   [noEventAdd] - If true this prevents plugins from being added by `plugin:add` and
 *                                      `plugin:add:all` events forcing direct method invocation for addition.
 *
 * @property {boolean}   [noEventRemoval] - If true this prevents plugins from being removed by `plugin:remove` and
 *                                          `plugin:remove:all` events forcing direct method invocation for removal.
 *
 * @property {boolean}   [throwNoMethod] - If true then when a method fails to be invoked by any plugin an exception
 *                                         will be thrown.
 *
 * @property {boolean}   [throwNoPlugin] - If true then when no plugin is matched to be invoked an exception will be
 *                                         thrown.
 */

/**
 * @external {EventProxy} https://docs.typhonjs.io/typhonjs-backbone-esnext/backbone-esnext-events/class/src/EventProxy.js~EventProxy.html
 */

/**
 * @external {TyphonEvents} https://docs.typhonjs.io/typhonjs-backbone-esnext/backbone-esnext-events/class/src/TyphonEvents.js~TyphonEvents.html
 */
