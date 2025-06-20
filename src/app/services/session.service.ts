import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessions = new Map<string, string>();

  generateSessionCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  storeSession(sessionCode: string, description: string): void {
    this.sessions.set(sessionCode, description);
  }

  getSession(sessionCode: string): string | undefined {
    return this.sessions.get(sessionCode);
  }
}