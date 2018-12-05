import { Injectable } from '@angular/core';

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 16.10.2018
 * Message Service
 */
@Injectable()
export class MessageService {
  /**
   * Nachrichten
   */
  messages: string[] = [];

  /**
   * fügt eine Nachricht hinzu
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * löscht alle Nachrichten
   */
  clear() {
    this.messages = [];
  }
}
