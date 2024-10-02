/** @template {keyof import("../types/ExtendedClientEvents.d.ts").default} Event */
class EventBuilder {
  /** @param {import("../types/EventInterface.d.ts").default<Event>} data */
  constructor(data) {
    Object.assign(this, data);
  }
}

module.exports = EventBuilder;
