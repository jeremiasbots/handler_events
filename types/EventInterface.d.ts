import ExtendedClientEvents from "./ExtendedClientEvents";

export default interface EventInterface<
  Event extends keyof ExtendedClientEvents
> {
  name: Event;
  execute: (...args: ExtendedClientEvents[Event]) => Awaitable<void>;
}
