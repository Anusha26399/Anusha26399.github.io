const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'SQL', 'ML/AI', 'Tableau', 'Power BI', 'GIS', 'JS/React'],
        datasets: [{
            label: 'Skill Proficiency (%)',
            data: [90, 85, 80, 85, 80, 75, 70],
            backgroundColor: '#1F4E79'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
