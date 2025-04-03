// Data for different time periods
const dashboardData = {
    sales: {
        week: {
            value: '$3,077.00',
            volume: '450',
            change: '+20.00%'
        },
        month: {
            value: '$12,450.00',
            volume: '1,850',
            change: '+18.50%'
        },
        year: {
            value: '$145,320.00',
            volume: '22,150',
            change: '+22.30%'
        }
    },
    customers: {
        week: {
            value: '1,250',
            change: '+15.80%',
            active: '1,180',
            activePercent: '85%'
        },
        month: {
            value: '5,320',
            change: '+12.40%',
            active: '4,980',
            activePercent: '82%'
        },
        year: {
            value: '62,450',
            change: '+18.20%',
            active: '58,150',
            activePercent: '87%'
        }
    },
    orders: {
        week: {
            value: '450',
            pending: '5',
            completed: '445'
        },
        month: {
            value: '1,850',
            pending: '18',
            completed: '1,832'
        },
        year: {
            value: '22,150',
            pending: '125',
            completed: '22,025'
        }
    }
};

// Function to update dashboard data based on selected period
function updateDashboardData() {
    // Update Sales data
    const salesPeriod = document.getElementById('sales-period-select').value;
    document.getElementById('sales-value').textContent = dashboardData.sales[salesPeriod].value;
    document.getElementById('sales-volume').textContent = dashboardData.sales[salesPeriod].volume;
    document.getElementById('sales-change').textContent = dashboardData.sales[salesPeriod].change;
    
    // Update Customers data
    const customersPeriod = document.getElementById('customers-period-select').value;
    document.getElementById('customers-value').textContent = dashboardData.customers[customersPeriod].value;
    document.getElementById('customers-change').textContent = dashboardData.customers[customersPeriod].change;
    document.getElementById('customers-active').textContent = dashboardData.customers[customersPeriod].active;
    document.getElementById('customers-active-percent').textContent = dashboardData.customers[customersPeriod].activePercent;
    
    // Update Orders data
    const ordersPeriod = document.getElementById('orders-period-select').value;
    document.getElementById('orders-value').textContent = dashboardData.orders[ordersPeriod].value;
    document.getElementById('orders-pending').textContent = dashboardData.orders[ordersPeriod].pending;
    document.getElementById('orders-completed').textContent = dashboardData.orders[ordersPeriod].completed;
}

// Add event listeners to dropdowns
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to period selectors
    document.getElementById('sales-period-select').addEventListener('change', updateDashboardData);
    document.getElementById('customers-period-select').addEventListener('change', updateDashboardData);
    document.getElementById('orders-period-select').addEventListener('change', updateDashboardData);
    
    // Initialize with default values
    updateDashboardData();
});

// Marketing Donut Chart
const marketingCtx = document.getElementById('marketingChart').getContext('2d');
const marketingChart = new Chart(marketingCtx, {
    type: 'doughnut',
    data: {
        labels: ['Acquisition', 'Purchase', 'Retention'],
        datasets: [{
            data: [35, 45, 20],
            backgroundColor: ['#4F46E5', '#818CF8', '#E5E7EB'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        cutout: '75%',
        animation: {
            animateRotate: true,
            animateScale: false,
            duration: 1500,
            easing: 'easeOutCubic'
        }
    }
});

// Initialize with zero angles
marketingChart.options.circumference = 0;
marketingChart.update('none');

// Animate to full circle
setTimeout(() => {
    marketingChart.options.circumference = 360;
    marketingChart.update();
}, 100);

// Sales Bar Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesCtx, {
    type: 'bar',
    data: {
        labels: ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'],
        datasets: [{
            data: [80, 40, 60, 20, 60, 40, 60],
            backgroundColor: '#4F46E5',
            borderRadius: 8,
            barThickness: 16,
            maxBarThickness: 20
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 0,
                right: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#F3F4F6'
                },
                ticks: {
                    stepSize: 20,
                    callback: function(value) {
                        return value + '%';
                    },
                    padding: 10
                },
                max: 100,
                border: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    padding: 5
                },
                border: {
                    display: false
                }
            }
        }
    }
}); 