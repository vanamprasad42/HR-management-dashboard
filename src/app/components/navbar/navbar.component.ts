import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    notifications = [
        { id: 1, title: 'New Leave Request', time: '5m ago', read: false },
        { id: 2, title: 'Meeting Reminder', time: '1h ago', read: false },
        { id: 3, title: 'Payroll Processed', time: '1d ago', read: true }
    ];

    showNotifications = false;
    showProfileMenu = false;
    @Output() toggleSidebar = new EventEmitter<void>();

    onToggleSidebar() {
        this.toggleSidebar.emit();
    }

    toggleNotifications() {
        this.showNotifications = !this.showNotifications;
        this.showProfileMenu = false;
    }

    toggleProfileMenu() {
        this.showProfileMenu = !this.showProfileMenu;
        this.showNotifications = false;
    }
}
