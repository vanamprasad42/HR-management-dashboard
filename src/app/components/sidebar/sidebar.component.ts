import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    @Input() isCollapsed = false;
    @Output() toggleSidebar = new EventEmitter<void>();

    menuItems = [
        { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
        { icon: 'people', label: 'Employees', route: '/employees' },
        { icon: 'event_note', label: 'Attendance', route: '/attendance' },
        { icon: 'work', label: 'Recruitment', route: '/recruitment' },
        { icon: 'payments', label: 'Payroll', route: '/payroll' },
        { icon: 'settings', label: 'Settings', route: '/settings' }
    ];

    onToggle() {
        this.toggleSidebar.emit();
    }
}
