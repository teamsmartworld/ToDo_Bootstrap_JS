// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Dummy todo data
    let todos = [
        {
            title: "Go through React Notes",
            description: "Ensure that I go through the React Notes before the classes begin on React",
            dueDate: "2025-08-03",
            createdDate: "2025-08-01",
            assignedTo: "David Mbiydzenyuy",
            attachments: 2
        }
    ];

    // Basic functionality for the existing static todo
    const todoCard = document.querySelector('.todo-card');
    
    if (todoCard) {
        const buttons = todoCard.querySelectorAll('button');
        
        // Mark as done
        buttons[0].addEventListener('click', function() {
            todoCard.style.opacity = '0.5';
            this.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
            this.disabled = true;
        });
        
        // Edit todo (placeholder)
        buttons[1].addEventListener('click', function() {
            alert('Edit functionality would go here');
        });
        
        // Delete todo
        buttons[2].addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this todo?')) {
                todoCard.remove();
            }
        });
    }
});
