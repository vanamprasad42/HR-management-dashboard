import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'hr-management-dashboard';
    isSidebarCollapsed = false;
    isMobile = false;

    constructor() {
        this.checkScreenSize();
        window.addEventListener('resize', () => this.checkScreenSize());
    }

    checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
        if (!this.isMobile) {
            this.isSidebarCollapsed = false;
        } else {
            // Close sidebar by default on mobile
            // usage: isSidebarCollapsed on mobile means OPEN (based on previous logic check)
            // Let's re-verify logic:
            // Desktop: isCollapsed=false -> Width 260px (Open). isCollapsed=true -> Width 70px (Closed).
            // Mobile: isCollapsed=false -> Hidden (-100%). isCollapsed=true -> Open (0).

            // Ideally we should fix this naming confusion.
            // Let's stick to current logic: 
            // Default mobile state: We want it hidden. Hidden is isCollapsed=false.
        }
    }

    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
}
