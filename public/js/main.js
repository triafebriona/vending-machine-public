// vending-machine-dashboard/public/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Auto-dismiss alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert:not(.alert-permanent)');
    alerts.forEach(alert => {
        setTimeout(() => {
            if (alert) {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }
        }, 5000);
    });

    // Form validation enhancement
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Date formatting helper
    window.formatDate = function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Copy to clipboard function
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Berhasil disalin ke clipboard!', 'success');
        }).catch(err => {
            console.error('Gagal menyalin: ', err);
            showToast('Gagal menyalin ke clipboard', 'error');
        });
    };

    // Toast notification function
    window.showToast = function(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container') || createToastContainer();
        const toastId = 'toast-' + Date.now();
        
        const toastHTML = `
            <div id="${toastId}" class="toast align-items-center text-bg-${type} border-0" role="alert">
                <div class="d-flex">
                    <div class="toast-body">
                        ${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        `;
        
        toastContainer.innerHTML += toastHTML;
        const toastElement = document.getElementById(toastId);
        const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
        toast.show();
        
        toastElement.addEventListener('hidden.bs.toast', function () {
            this.remove();
        });
    };

    function createToastContainer() {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'position-fixed bottom-0 end-0 p-3';
        container.style.zIndex = '1050';
        document.body.appendChild(container);
        return container;
    }

    // Load machine status
    loadMachineStatus();

    // Refresh data every 30 seconds if on dashboard
    if (window.location.pathname === '/dashboard') {
        setInterval(loadMachineStatus, 30000);
    }
});

// Load machine status from API
async function loadMachineStatus() {
    try {
        const response = await fetch('/api/dashboard');
        if (response.ok) {
            const data = await response.json();
            updateDashboardStats(data.data);
        }
    } catch (error) {
        console.error('Failed to load machine status:', error);
    }
}

// Update dashboard statistics
function updateDashboardStats(data) {
    // You can implement real-time updates here
    // For example, update counters with animation
    const counters = {
        'total-machines': data.summary.totalMachines,
        'online-machines': data.summary.onlineMachines,
        'total-transactions': data.summary.totalTransactions,
        'active-alerts': data.summary.activeAlerts
    };

    for (const [id, value] of Object.entries(counters)) {
        const element = document.getElementById(id);
        if (element) {
            animateCounter(element, value);
        }
    }
}

// Animate counter
function animateCounter(element, target) {
    const current = parseInt(element.textContent);
    if (current === target) return;

    const increment = target > current ? 1 : -1;
    let currentValue = current;

    const timer = setInterval(() => {
        currentValue += increment;
        element.textContent = currentValue;
        
        if (currentValue === target) {
            clearInterval(timer);
        }
    }, 50);
}

// Export data function
function exportData(format = 'csv') {
    const table = document.querySelector('table');
    if (!table) return;

    let data = [];
    const headers = [];
    const rows = table.querySelectorAll('tr');

    // Get headers
    rows[0].querySelectorAll('th').forEach(th => {
        headers.push(th.innerText.trim());
    });

    // Get rows data
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const rowData = [];
        row.querySelectorAll('td').forEach(td => {
            rowData.push(td.innerText.trim());
        });
        data.push(rowData);
    }

    // Create CSV
    if (format === 'csv') {
        let csvContent = headers.join(',') + '\n';
        data.forEach(row => {
            csvContent += row.join(',') + '\n';
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vending-data-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    }
}