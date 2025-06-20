import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RetroComponent } from './retro/retro.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([
          { path: 'index', component: IndexComponent },
          { path: 'retro', component: RetroComponent },
          { path: '', redirectTo: 'index', pathMatch: 'full' }
        ])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'spike-on-it-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spike-on-it-app');
  });

  it('should render navigation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.textContent).toContain('Index');
    expect(compiled.querySelector('nav')?.textContent).toContain('Retro');
  });

  it('should have working navigation links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const indexLink = compiled.querySelector('a[routerlink="/index"]') as HTMLAnchorElement;
    const retroLink = compiled.querySelector('a[routerlink="/retro"]') as HTMLAnchorElement;
    
    expect(indexLink).toBeTruthy();
    expect(retroLink).toBeTruthy();
    expect(indexLink.textContent?.trim()).toBe('Index');
    expect(retroLink.textContent?.trim()).toBe('Retro');
  });
});
