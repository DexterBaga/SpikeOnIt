import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-retro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retro.component.html',
  styleUrl: './retro.component.css'
})
export class RetroComponent implements OnInit {
  sessionCode: string | null = null;
  description: string | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.sessionCode = this.route.snapshot.queryParamMap.get('session');
    if (this.sessionCode) {
      this.description = this.sessionService.getSession(this.sessionCode);
    }
  }
}
