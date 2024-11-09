const GameEvent = {
    System: 'system',
    End: 'gameEnd',
    Start: 'gameStart',
  };
  
  class EventMessage {
    constructor(from, type, value) {
      this.from = from;
      this.type = type;
      this.value = value;
    }
  }
  
  class GameEventNotifier {
    events = [];
    handlers = [];
  
    constructor() {
      // Simulate chat messages that will eventually come over WebSocket
      setInterval(() => {
        const score = Math.floor(Math.random() * 3000);
        const date = new Date().toLocaleDateString();
        const userName = 'Eich';
        this.broadcastEvent(userName, GameEvent.End, { name: userName, score: score, date: date });
      }, 5000);
    }
  
    broadcastEvent(from, type, value) {
      const event = new EventMessage(from, type, value);
      this.receiveEvent(event);
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers = this.handlers.filter((h) => h !== handler); // Reassigned the filtered array
    }
  
    receiveEvent(event) {
      this.events.push(event);
  
      this.handlers.forEach((handler) => {
        handler(event); // Call each handler with the new event only
      });
    }
  }
  
  const GameNotifier = new GameEventNotifier();
  export { GameEvent, GameNotifier };
  