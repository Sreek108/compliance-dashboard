// Dashboard data
const dashboardData = {
  "agent_performance": [
    {
      "Agent": "Agent 1",
      "Avg_Score": 0.85,
      "Total_Calls": 4,
      "Min_Score": 0.85,
      "Max_Score": 0.85,
      "Direct_Response_Avg": 0.04,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.25
    },
    {
      "Agent": "Agent 2",
      "Avg_Score": 0.71,
      "Total_Calls": 4,
      "Min_Score": 0.6,
      "Max_Score": 0.75,
      "Direct_Response_Avg": 0.11,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.0
    },
    {
      "Agent": "Agent 3",
      "Avg_Score": 0.92,
      "Total_Calls": 4,
      "Min_Score": 0.85,
      "Max_Score": 1.0,
      "Direct_Response_Avg": 0.11,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.25
    },
    {
      "Agent": "Agent 4",
      "Avg_Score": 0.69,
      "Total_Calls": 4,
      "Min_Score": 0.6,
      "Max_Score": 0.75,
      "Direct_Response_Avg": 0.11,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.0
    },
    {
      "Agent": "Agent 5",
      "Avg_Score": 0.72,
      "Total_Calls": 4,
      "Min_Score": 0.35,
      "Max_Score": 0.9,
      "Direct_Response_Avg": 0.11,
      "Introduction_Avg": 0.11,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.06
    },
    {
      "Agent": "Agent 6",
      "Avg_Score": 0.87,
      "Total_Calls": 4,
      "Min_Score": 0.75,
      "Max_Score": 1.0,
      "Direct_Response_Avg": 0.08,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.19
    },
    {
      "Agent": "Agent 7",
      "Avg_Score": 0.83,
      "Total_Calls": 4,
      "Min_Score": 0.75,
      "Max_Score": 0.85,
      "Direct_Response_Avg": 0.0,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.25
    },
    {
      "Agent": "Agent 8",
      "Avg_Score": 0.89,
      "Total_Calls": 4,
      "Min_Score": 0.85,
      "Max_Score": 1.0,
      "Direct_Response_Avg": 0.04,
      "Introduction_Avg": 0.15,
      "Policy_Avg": 0.1,
      "Call_Registered_Avg": 0.25
    }
  ],
  "collection_activity": [
    {
      "DPD_Category": "1-30 DPD",
      "Opening_Balance": 15497,
      "Current_Count": 6038.5,
      "SMS_Attempts": 21788.5,
      "Robot_Attempts": 60178.5,
      "Robot_Success": 18849,
      "Robot_Success_Rate": 31.3,
      "NABA_Attempts": 938.5,
      "NABA_Success": 776,
      "NABA_Success_Rate": 82.7,
      "Agent_Attempts": 1341,
      "Agent_Success": 591,
      "Agent_Success_Rate": 44.1
    },
    {
      "DPD_Category": "31-60 DPD",
      "Opening_Balance": 3580.5,
      "Current_Count": 2295.5,
      "SMS_Attempts": 9229,
      "Robot_Attempts": 48016,
      "Robot_Success": 14010,
      "Robot_Success_Rate": 29.2,
      "NABA_Attempts": 540,
      "NABA_Success": 438,
      "NABA_Success_Rate": 81.1,
      "Agent_Attempts": 4573.5,
      "Agent_Success": 1810.5,
      "Agent_Success_Rate": 39.6
    },
    {
      "DPD_Category": "61-90 DPD",
      "Opening_Balance": 1259.5,
      "Current_Count": 832.5,
      "SMS_Attempts": 2589.5,
      "Robot_Attempts": 19191.5,
      "Robot_Success": 4927,
      "Robot_Success_Rate": 25.7,
      "NABA_Attempts": 1409,
      "NABA_Success": 1190.5,
      "NABA_Success_Rate": 84.5,
      "Agent_Attempts": 5687.5,
      "Agent_Success": 1636.5,
      "Agent_Success_Rate": 28.8
    },
    {
      "DPD_Category": ">91 DPD",
      "Opening_Balance": 3405,
      "Current_Count": 3145.5,
      "SMS_Attempts": 8639,
      "Robot_Attempts": 47124.5,
      "Robot_Success": 8753.5,
      "Robot_Success_Rate": 18.6,
      "NABA_Attempts": 5252,
      "NABA_Success": 4080.5,
      "NABA_Success_Rate": 77.7,
      "Agent_Attempts": 10825.5,
      "Agent_Success": 2302,
      "Agent_Success_Rate": 21.3
    },
    {
      "DPD_Category": "Write off",
      "Opening_Balance": 2279.5,
      "Current_Count": 2258.5,
      "SMS_Attempts": 6397,
      "Robot_Attempts": 41141.5,
      "Robot_Success": 6731.5,
      "Robot_Success_Rate": 16.4,
      "NABA_Attempts": 3218.5,
      "NABA_Success": 2378,
      "NABA_Success_Rate": 73.9,
      "Agent_Attempts": 4249.5,
      "Agent_Success": 872,
      "Agent_Success_Rate": 20.5
    }
  ],
  "overview_metrics": {
    "total_calls_analyzed": 35,
    "average_compliance_score": 55.1,
    "success_rate": 62.9,
    "min_compliance": 0,
    "max_compliance": 90
  },
  "call_status_distribution": {
    "SUCCESS": 22,
    "UNRESOLVED": 7,
    "OTHER": 2,
    "UNKNOWN": 4
  },
  "sentiment_distribution": {
    "neutral": 32,
    "positive": 2,
    "negative": 1
  },
  "sample_evaluations": [
    {
      "fileName": "rec310000371570_5239-05 aug 2025.wav",
      "complianceScore": 60,
      "callStatus": "UNRESOLVED",
      "criticalIssues": [
        "No call recording notice was given",
        "WhatsApp data sharing was mentioned"
      ]
    },
    {
      "fileName": "new_rec2.wav",
      "complianceScore": 65,
      "callStatus": "UNRESOLVED",
      "criticalIssues": [
        "Lack of call recording notice",
        "Incomplete call closure"
      ]
    },
    {
      "fileName": "new_rec_5238.wav",
      "complianceScore": 75,
      "callStatus": "SUCCESS",
      "criticalIssues": [
        "No call recording notice was given",
        "No evaluation notice was given"
      ]
    },
    {
      "fileName": "rec308000806773_5224.wav",
      "complianceScore": 85,
      "callStatus": "SUCCESS",
      "criticalIssues": []
    },
    {
      "fileName": "rec300000074685_5289.wav",
      "complianceScore": 85,
      "callStatus": "SUCCESS",
      "criticalIssues": [
        "Lack of organization identification",
        "No call recording disclosure"
      ]
    }
  ],
  "collection_criteria": {
    "Direct Response to Customer": 0.15,
    "Following introduction significantly": 0.15,
    "Following collection policies": 0.1,
    "Re-communicate when needed": 0.1,
    "Transfer customer to evaluation": 0.1,
    "Notify call is recorded": 0.25,
    "Good behavior during communication": 0.15
  },
  "sama_compliance_categories": {
    "Call Introduction": [
      "Courteous Introduction",
      "Identifies Self & Quara",
      "Customer verification",
      "States Call Purpose",
      "Call Recording Notice"
    ],
    "During the Call": [
      "Direct & Proper Response",
      "Active Listening",
      "Policy Compliance",
      "Respectful Behavior",
      "No WhatsApp Data Sharing",
      "Clarifies When Needed"
    ],
    "Customer Handling": [
      "Routes for Evaluation",
      "Accurate Info Provided",
      "Answers All Queries"
    ],
    "Call Closure": [
      "Proper Call Closure",
      "Evaluation Notice Given"
    ]
  },
  "compliance_trends": [
    {
      "month": "July 2025",
      "avg_compliance": 52.3,
      "total_calls": 18,
      "success_rate": 55.6
    },
    {
      "month": "August 2025",
      "avg_compliance": 58.2,
      "total_calls": 17,
      "success_rate": 70.6
    }
  ],
  "critical_issues_summary": {
    "No call recording notice was given": 2,
    "WhatsApp data sharing was mentioned": 1,
    "Lack of call recording notice": 1,
    "Incomplete call closure": 1,
    "No evaluation notice was given": 1,
    "Lack of organization identification": 1,
    "No call recording disclosure": 1
  }
};

// Utility functions
function getScoreClass(score) {
    const percentage = typeof score === 'number' ? score * 100 : parseFloat(score);
    if (percentage >= 80) return 'high';
    if (percentage >= 60) return 'medium';
    return 'low';
}

function formatPercentage(value) {
    if (typeof value === 'number' && value <= 1) {
        return `${(value * 100).toFixed(1)}%`;
    }
    return `${parseFloat(value).toFixed(1)}%`;
}

function formatNumber(value) {
    return new Intl.NumberFormat().format(value);
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeKPICards();
    initializeCharts();
    initializeAgentTable();
    initializeCollectionTable();
    initializeEvaluations();
    initializeComplianceCategories();
});

// KPI Cards initialization
function initializeKPICards() {
    const metrics = dashboardData.overview_metrics;
    
    document.getElementById('total-calls').textContent = metrics.total_calls_analyzed;
    
    const complianceElement = document.getElementById('avg-compliance');
    complianceElement.textContent = `${metrics.average_compliance_score}%`;
    complianceElement.classList.add(getScoreClass(metrics.average_compliance_score / 100));
    
    document.getElementById('success-rate').textContent = `${metrics.success_rate}%`;
    document.getElementById('active-agents').textContent = dashboardData.agent_performance.length;
}

// Charts initialization
function initializeCharts() {
    createCallStatusChart();
    createSentimentChart();
    createComplianceTrendChart();
    createAgentComparisonChart();
    createDPDSuccessChart();
    createContactMethodChart();
    createCriticalIssuesChart();
}

function createCallStatusChart() {
    const ctx = document.getElementById('callStatusChart').getContext('2d');
    const data = dashboardData.call_status_distribution;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20
                    }
                }
            }
        }
    });
}

function createSentimentChart() {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    const data = dashboardData.sentiment_distribution;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Count',
                data: Object.values(data),
                backgroundColor: ['#5D878F', '#1FB8CD', '#B4413C'],
                borderColor: ['#5D878F', '#1FB8CD', '#B4413C'],
                borderWidth: 1
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
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function createComplianceTrendChart() {
    const ctx = document.getElementById('complianceTrendChart').getContext('2d');
    const trends = dashboardData.compliance_trends;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trends.map(t => t.month),
            datasets: [{
                label: 'Compliance Score (%)',
                data: trends.map(t => t.avg_compliance),
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Success Rate (%)',
                data: trends.map(t => t.success_rate),
                borderColor: '#FFC185',
                backgroundColor: 'rgba(255, 193, 133, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function createAgentComparisonChart() {
    const ctx = document.getElementById('agentComparisonChart').getContext('2d');
    const agents = dashboardData.agent_performance;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: agents.map(a => a.Agent),
            datasets: [{
                label: 'Average Score',
                data: agents.map(a => a.Avg_Score * 100),
                backgroundColor: agents.map(a => {
                    const score = a.Avg_Score;
                    if (score >= 0.8) return '#1FB8CD';
                    if (score >= 0.6) return '#FFC185';
                    return '#B4413C';
                }),
                borderWidth: 1
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
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Score (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Agents'
                    }
                }
            }
        }
    });
}

function createDPDSuccessChart() {
    const ctx = document.getElementById('dpdSuccessChart').getContext('2d');
    const data = dashboardData.collection_activity;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.DPD_Category),
            datasets: [{
                label: 'Robot Success Rate',
                data: data.map(d => d.Robot_Success_Rate),
                backgroundColor: '#1FB8CD'
            }, {
                label: 'NABA Success Rate',
                data: data.map(d => d.NABA_Success_Rate),
                backgroundColor: '#FFC185'
            }, {
                label: 'Agent Success Rate',
                data: data.map(d => d.Agent_Success_Rate),
                backgroundColor: '#B4413C'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Success Rate (%)'
                    }
                }
            }
        }
    });
}

function createContactMethodChart() {
    const ctx = document.getElementById('contactMethodChart').getContext('2d');
    const data = dashboardData.collection_activity;
    
    // Calculate average success rates for each method
    const robotAvg = data.reduce((sum, d) => sum + d.Robot_Success_Rate, 0) / data.length;
    const nabaAvg = data.reduce((sum, d) => sum + d.NABA_Success_Rate, 0) / data.length;
    const agentAvg = data.reduce((sum, d) => sum + d.Agent_Success_Rate, 0) / data.length;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Robot Calls', 'NABA Calls', 'Agent Calls'],
            datasets: [{
                data: [robotAvg, nabaAvg, agentAvg],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20
                    }
                }
            }
        }
    });
}

function createCriticalIssuesChart() {
    const ctx = document.getElementById('criticalIssuesChart').getContext('2d');
    const issues = dashboardData.critical_issues_summary;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(issues),
            datasets: [{
                label: 'Occurrences',
                data: Object.values(issues),
                backgroundColor: '#B4413C',
                borderColor: '#B4413C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Agent table initialization
function initializeAgentTable() {
    const tbody = document.getElementById('agentTableBody');
    const filterInput = document.getElementById('agentFilter');
    
    function renderAgentTable(agents = dashboardData.agent_performance) {
        tbody.innerHTML = '';
        
        agents.forEach(agent => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${agent.Agent}</td>
                <td class="score-cell ${getScoreClass(agent.Avg_Score)}">${formatPercentage(agent.Avg_Score)}</td>
                <td>${agent.Total_Calls}</td>
                <td class="score-cell ${getScoreClass(agent.Min_Score)}">${formatPercentage(agent.Min_Score)}</td>
                <td class="score-cell ${getScoreClass(agent.Max_Score)}">${formatPercentage(agent.Max_Score)}</td>
                <td class="score-cell ${getScoreClass(agent.Call_Registered_Avg)}">${formatPercentage(agent.Call_Registered_Avg)}</td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Initial render
    renderAgentTable();
    
    // Filter functionality
    filterInput.addEventListener('input', function() {
        const filterValue = this.value.toLowerCase();
        const filteredAgents = dashboardData.agent_performance.filter(agent =>
            agent.Agent.toLowerCase().includes(filterValue)
        );
        renderAgentTable(filteredAgents);
    });
    
    // Sort functionality
    document.querySelectorAll('#agentTable th[data-sort]').forEach(header => {
        header.addEventListener('click', function() {
            const sortKey = this.dataset.sort;
            const currentOrder = this.dataset.order || 'asc';
            const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
            
            // Reset all headers
            document.querySelectorAll('#agentTable th[data-sort]').forEach(h => {
                h.dataset.order = '';
                h.textContent = h.textContent.replace(' ↑', '').replace(' ↓', '');
            });
            
            // Set current header
            this.dataset.order = newOrder;
            this.textContent += newOrder === 'asc' ? ' ↑' : ' ↓';
            
            // Sort data
            const sortedAgents = [...dashboardData.agent_performance].sort((a, b) => {
                let aVal, bVal;
                
                switch(sortKey) {
                    case 'agent':
                        aVal = a.Agent;
                        bVal = b.Agent;
                        break;
                    case 'avg_score':
                        aVal = a.Avg_Score;
                        bVal = b.Avg_Score;
                        break;
                    case 'total_calls':
                        aVal = a.Total_Calls;
                        bVal = b.Total_Calls;
                        break;
                    case 'min_score':
                        aVal = a.Min_Score;
                        bVal = b.Min_Score;
                        break;
                    case 'max_score':
                        aVal = a.Max_Score;
                        bVal = b.Max_Score;
                        break;
                    case 'call_registered':
                        aVal = a.Call_Registered_Avg;
                        bVal = b.Call_Registered_Avg;
                        break;
                    default:
                        return 0;
                }
                
                if (typeof aVal === 'string') {
                    return newOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
                } else {
                    return newOrder === 'asc' ? aVal - bVal : bVal - aVal;
                }
            });
            
            renderAgentTable(sortedAgents);
        });
    });
}

// Collection table initialization
function initializeCollectionTable() {
    const tbody = document.getElementById('collectionTableBody');
    
    dashboardData.collection_activity.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.DPD_Category}</td>
            <td>${formatNumber(item.Opening_Balance)}</td>
            <td>${formatNumber(item.Current_Count)}</td>
            <td class="score-cell ${getScoreClass(item.Robot_Success_Rate / 100)}">${item.Robot_Success_Rate}%</td>
            <td class="score-cell ${getScoreClass(item.NABA_Success_Rate / 100)}">${item.NABA_Success_Rate}%</td>
            <td class="score-cell ${getScoreClass(item.Agent_Success_Rate / 100)}">${item.Agent_Success_Rate}%</td>
        `;
        tbody.appendChild(row);
    });
}

// Evaluations initialization
function initializeEvaluations() {
    const container = document.getElementById('evaluationsList');
    
    dashboardData.sample_evaluations.forEach(evaluation => {
        const item = document.createElement('div');
        item.className = 'evaluation-item';
        
        const scoreClass = getScoreClass(evaluation.complianceScore / 100);
        const hasIssues = evaluation.criticalIssues.length > 0;
        
        item.innerHTML = `
            <div class="evaluation-header">
                <div class="evaluation-filename" title="${evaluation.fileName}">${evaluation.fileName}</div>
                <div class="evaluation-score ${scoreClass}">${evaluation.complianceScore}%</div>
            </div>
            <div class="evaluation-status">Status: ${evaluation.callStatus}</div>
            ${hasIssues ? `
                <div class="evaluation-issues">
                    ${evaluation.criticalIssues.map(issue => `<div class="issue-item">${issue}</div>`).join('')}
                </div>
            ` : '<div class="evaluation-issues"><div style="color: var(--color-success); font-style: italic;">No critical issues found</div></div>'}
        `;
        
        if (hasIssues) {
            item.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        }
        
        container.appendChild(item);
    });
}

// Compliance categories initialization
function initializeComplianceCategories() {
    const container = document.getElementById('complianceCategories');
    
    Object.entries(dashboardData.sama_compliance_categories).forEach(([category, criteria]) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'compliance-category';
        
        categoryElement.innerHTML = `
            <div class="category-header">
                <span>${category}</span>
                <span>+</span>
            </div>
            <div class="category-content">
                <ul class="criteria-list">
                    ${criteria.map(criterion => `<li class="criteria-item">${criterion}</li>`).join('')}
                </ul>
            </div>
        `;
        
        const header = categoryElement.querySelector('.category-header');
        const toggleIcon = header.querySelector('span:last-child');
        
        header.addEventListener('click', function() {
            categoryElement.classList.toggle('expanded');
            toggleIcon.textContent = categoryElement.classList.contains('expanded') ? '−' : '+';
        });
        
        container.appendChild(categoryElement);
    });
}