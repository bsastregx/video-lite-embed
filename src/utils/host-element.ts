export function hostElement(comp: HTMLElement, config: hostElement) {
  type eventsBuffer = {
    eventType: string;
    eventListener: string;
  };

  const eventsBuffer: eventsBuffer[] = [];

  if (config.attributes) {
    const attributes = Object.entries(config.attributes);

    attributes.forEach(attr => {
      // The attribute is defined
      if (attr[1] || attr[1] === "") {
        comp.setAttribute(attr[0], attr[1]);
      } else {
        comp.removeAttribute(attr[0]);
      }
    });
  }

  if (config.classes) {
    const cssClasses = Object.entries(config.classes);

    cssClasses.forEach(cssClass => {
      // The class should be set
      if (cssClass[1]) {
        comp.classList.add(cssClass[0]);
      } else {
        comp.classList.remove(cssClass[0]);
      }
    });
  }

  if (config.styles) {
    const styles = Object.entries(config.styles);

    styles.forEach(style => {
      // The style is defined
      if (style[1]) {
        comp.style.setProperty(style[0], style[1]);
      } else {
        comp.style.removeProperty(style[0]);
      }
    });
  }

  if (config.events) {
    const events = Object.entries(config.events);

    events.forEach(event => {
      console.log("holaaaaaa");
      // The event is defined
      if (event[1]) {
        /* Save event type, and event listener (in case it doesn't exists already)
        in events object in case we need to remove it, or change it later*/
        const eventFound = eventsBuffer.find(
          eventBuffer => eventBuffer["eventType"] === event[0]
        );
        if (eventFound) {
          /* remove previous handler*/
          comp.removeEventListener(event[0], event[1]);
        }
        comp.addEventListener(event[0], event[1]);
        eventsBuffer.push({
          eventType: event[0],
          eventListener: event[1].name
        });
        console.log("eventFound", eventFound);
        console.log("eventsBuffer", eventsBuffer);
        console.log("=============================");
      }
    });
  }
}

export interface hostElement {
  readonly attributes?: { [key: string]: string | null | undefined };
  readonly classes?: { [key: string]: boolean | string | null | undefined };
  readonly styles?: { [key: string]: string | null | undefined };
  readonly events?: {
    [key: string]:
      | ((event?: Event | undefined) => void | null | undefined)
      | undefined;
  };
}
