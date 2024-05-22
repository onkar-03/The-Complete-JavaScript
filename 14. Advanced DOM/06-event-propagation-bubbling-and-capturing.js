// ---- Event Propagation: ----
// 1. Event Generation
// - A click event happens on a link (anchor element)
// - The DOM generates the click event, but not directly at the target element (eg: anchor element)

// 2. Capturing Phase
// - The event is generated at the root of the document (top of the DOM tree)
// - The event travels from the document root down to the target element
// - During this phase, the event passes through all parent elements of the target element (e.g., HTML, body, section, paragraph) this is called the capturing phase

// 3. Target Phase
// - The event reaches the target element (eg: anchor element).
// - Events can be handled directly at the target with event listeners
// - Event listeners attached to the target run their callback functions (e.g., displaying an alert)

// 4. Bubbling Phase
// - After the target phase, the event travels back up to the document root
// - This is known as the bubbling phase
// - During this phase, the event passes through all parent elements again but only the parents, not any sibling elements

// 5. Event Propagation
// - Events can be handled at any parent element as the event bubbles up
// - It is as if the event occurred at each parent element it passes through
// - Event listeners attached to parent elements can also respond to the event

// 6. Event Handling Flexibility
// - By default, events are handled in the target and bubbling phases
// - Event listeners can be set up to listen during the capturing phase if needed
// - Not all events have capturing and bubbling phases some are created directly at the targets
