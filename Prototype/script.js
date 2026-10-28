
const pages = ["home", "plan", "resources", "activity"];

const navigation = document.getElementById("navigation");
const toast = document.getElementById("toast");

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function showPage(page) {
    if (!pages.includes(page)) return;

    document.querySelectorAll(".page").forEach(section => {
        section.classList.toggle("active", section.id === page);
    });

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.toggle("active", button.dataset.page === page);
    });

    navigation.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        showPage(button.dataset.page);
    });
});

document.getElementById("menuToggle").addEventListener("click", () => {
    navigation.classList.toggle("open");
});

document.querySelectorAll("[data-generate]").forEach(button => {
    button.addEventListener("click", () => {
        showPage("plan");
        showToast("Demo study plan is ready!");
    });
});

// Resource search and category filtering
const resourceSearch = document.getElementById("resourceSearch");
const categorySelect = document.getElementById("category");
const resourceCards = [...document.querySelectorAll(".resource")];

let activeCategory = "All";

function filterResources() {
    const query = resourceSearch.value.trim().toLowerCase();

    const category = categorySelect.value !== "All"
        ? categorySelect.value
        : activeCategory;

    let count = 0;

    resourceCards.forEach(card => {
        const matchesText = card.textContent.toLowerCase().includes(query);
        const matchesCategory =
            category === "All" || card.dataset.category === category;

        const visible = matchesText && matchesCategory;

        card.classList.toggle("hidden", !visible);

        if (visible) count++;
    });

    document.getElementById("resultCount").textContent =
        `${count} resource${count === 1 ? "" : "s"} found`;

    document.getElementById("noResources")
        .classList.toggle("hidden", count !== 0);

    document.querySelectorAll("[data-category]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });
}

resourceSearch.addEventListener("input", filterResources);

document.getElementById("searchBtn").addEventListener("click", filterResources);

categorySelect.addEventListener("change", () => {
    activeCategory = "All";
    filterResources();
});

document.querySelectorAll(".category-filters [data-category]").forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        categorySelect.value = "All";
        filterResources();
    });
});

// Task filtering
const taskTable = document.getElementById("taskTable");

document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        taskTable.querySelectorAll("tr").forEach(row => {
            const visible =
                filter === "All" || row.dataset.period === filter;

            row.classList.toggle("hidden", !visible);
        });
    });
});

// Task sorting
document.getElementById("sortTasks").addEventListener("change", event => {
    const rows = [...taskTable.querySelectorAll("tr")];

    rows.sort((a, b) => {
        if (event.target.value === "date") {
            return a.dataset.date.localeCompare(b.dataset.date);
        }

        return Number(a.dataset.priority) - Number(b.dataset.priority);
    });

    rows.forEach(row => taskTable.appendChild(row));
});

// Mark tasks as completed
taskTable.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const row = checkbox.closest("tr");
        const status = row.querySelector(".status");

        if (checkbox.checked) {
            status.textContent = "Completed";
            status.className = "status completed";

            showToast("Task marked as completed!");
        } else {
            status.textContent = "Not Started";
            status.className = "status pending";

            showToast("Task marked as not started.");
        }
    });
});

// Activity filtering
document.querySelectorAll("[data-activity]").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll("[data-activity]").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.activity;

        document.querySelectorAll(".session").forEach(session => {
            const visible =
                filter === "All" || session.dataset.status === filter;

            session.classList.toggle("hidden", !visible);
        });
    });
});

// Like or unlike the motivational quote
document.getElementById("likeQuote").addEventListener("click", event => {
    const button = event.currentTarget;
    const liked = button.textContent.trim() === "♥";

    button.textContent = liked ? "♡" : "♥";

    showToast(liked
        ? "Quote removed from favourites."
        : "Quote added to favourites.");
});

filterResources();
