import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  description = '';

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  createSession(): void {
    if (this.description.trim()) {
      const sessionCode = this.sessionService.generateSessionCode();
      this.sessionService.storeSession(sessionCode, this.description.trim());
      this.router.navigate(['/retro'], { queryParams: { session: sessionCode } });
    }
  }
}
