// Dummy todo data
let todos = [
    {
        title: "Go through React Notes",
        description: "Go through React Notes in preparation for the coming weeks",
        dueDate: "2025-08-01",
        createdDate: "2025-08-03",
        assignedTo: "David Mbiydzenyuy",
        attachments: 2
    },
    {
        title: "Check on the Grocery Store",
        description: "Due before tomorrow",
        dueDate: "2025-08-02",
        createdDate: "2025-08-01",
        assignedTo: "David Mbiydzenyuy",
        attachments: 0
    },
    {
        title: "Submit Activity Report",
        description: "Send report to Lexicon",
        dueDate: "2025-08-01",
        createdDate: "2025-08-01-01",
        assignedTo: "David Mbiydzenyuy",
        attachments: 1
    }
];

let filterActive = false;
let sortAscending = true;

const todoList = document.getElementById("todoList");

// Render todos
function renderTodos(list) {
    todoList.innerHTML = "";
    list.forEach(todo => {
        const card = document.createElement("div");
        card.className = "card mb-3 shadow-sm todo-card";
        card.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="card-title mb-1">${todo.title}</h5>
                        <p class="card-text text-muted mb-2">${todo.description}</p>
                        <div class="d-flex align-items-center gap-2">
                            <span class="badge bg-light text-dark border">Due: ${todo.dueDate}</span>
                            <span class="badge bg-info text-dark">${todo.assignedTo}</span>
                            <span class="badge bg-secondary">${todo.attachments} attachments</span>
                        </div>
                    </div>
                    <small class="text-muted">Created: ${todo.createdDate}</small>
                </div>
                <div class="mt-3 d-flex gap-2">
                    <button class="btn btn-success btn-sm" title="Mark as Done">
                        <i class="bi bi-check2"></i>
                    </button>
                    <button class="btn btn-primary btn-sm" title="Edit Todo">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" title="Delete Todo">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
        todoList.appendChild(card);
    });
}

// Filter by assigned person (example: only John Doe)
document.getElementById("filterButton").addEventListener("click", () => {
    filterActive = !filterActive;
    if (filterActive) {
        const filtered = todos.filter(todo => todo.assignedTo === "John Doe");
        renderTodos(filtered);
    } else {
        renderTodos(todos);
