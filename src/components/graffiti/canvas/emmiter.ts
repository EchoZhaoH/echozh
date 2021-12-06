export type Listener<P = any, R = void> = (p: P) => R;

export class Emitter {
  private listeners: Record<string, Listener[]>
  constructor() {
    this.listeners = {};
  }

  on<T, P = void>(key: string, fn: Listener<T, P>) {
    if (!this.listeners[key]) {
      this.listeners[key] = [fn];
    } else {
      this.listeners[key].push(fn);
    }
  }

  emit<P>(key: string, p?: P) {
    const listener = this.listeners[key];
    if (!listener) {
      return
    }
    listener.forEach(fn => fn(p));
  }

  off(key: string) {
    const listener = this.listeners[key];
    if (!listener) {
      return
    }
    this.listeners[key] = [];
  }
}