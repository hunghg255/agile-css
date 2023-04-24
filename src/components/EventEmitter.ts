class EventEmitter {
  public id: any;
  public events: any;

  constructor() {
    this.id = 0;
    this.events = {};
  }

  on(eventType: string, listener: any) {
    let _extends2: any;

    this.id++;
    this.events = Object.assign(
      {},
      this.events,
      ((_extends2 = {}),
      (_extends2[eventType] = [].concat(this.events[eventType] || [], [
        //@ts-ignore
        {
          listener: listener,
          id: this.id,
        },
      ])),
      _extends2)
    );
    return this.id;
  }

  off(id: any) {
    for (let eventType in this.events) {
      let _extends3: any;
      this.events = Object.assign(
        {},
        this.events,
        ((_extends3 = {}),
        (_extends3[eventType] = this.events[eventType].filter(function(item: any) {
          return item.id !== id;
        })),
        _extends3)
      );
    }
  }

  emit(eventType: any, data: any) {
    if (this.events[eventType]) {
      this.events[eventType].forEach(function(_ref: any) {
        let listener = _ref.listener;
        listener(data);
      });
    }
  }
}

export default EventEmitter;
