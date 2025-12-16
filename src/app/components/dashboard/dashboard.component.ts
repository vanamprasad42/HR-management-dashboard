import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    stats = [
        { title: 'Total Employees', value: '1,250', change: '+5%', icon: 'group', color: 'blue' },
        { title: 'New Joiners', value: '45', change: '+12%', icon: 'person_add', color: 'green' },
        { title: 'On Leave', value: '15', change: '-2%', icon: 'flight_takeoff', color: 'orange' },
        { title: 'Open Positions', value: '8', change: '+3', icon: 'work_outline', color: 'purple' }
    ];

    recentActivities = [
        { user: 'Sarah Wilson', action: 'applied for leave', time: '2 mins ago', avatar: 'assets/avatar1.png' },
        { user: 'Mike Brown', action: 'submitted performance review', time: '15 mins ago', avatar: 'assets/avatar2.png' },
        { user: 'Emily Davis', action: 'completed onboarding', time: '1 hour ago', avatar: 'assets/avatar3.png' }
    ];

    employees = [
        { id: '#EMP001', name: 'John Doe', role: 'Software Engineer', department: 'Engineering', status: 'Active' },
        { id: '#EMP002', name: 'Jane Smith', role: 'Product Manager', department: 'Product', status: 'Active' },
        { id: '#EMP003', name: 'Robert Johnson', role: 'Designer', department: 'Design', status: 'On Leave' },
        { id: '#EMP004', name: 'Maria Garcia', role: 'HR Specialist', department: 'HR', status: 'Active' },
        { id: '#EMP005', name: 'David Lee', role: 'Marketing Lead', department: 'Marketing', status: 'Remote' }
    ];

    // Chart Configuration
    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Employee Performance',
                fill: true,
                tension: 0.5,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)'
            }
        ]
    };
    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        maintainAspectRatio: false
    };
    public lineChartLegend = false;

    constructor() { }

    ngOnInit(): void {
    }

    getStatusClass(status: string): string {
        switch (status.toLowerCase()) {
            case 'active': return 'status-active';
            case 'on leave': return 'status-warning';
            case 'remote': return 'status-info';
            default: return 'status-default';
        }
    }
}
