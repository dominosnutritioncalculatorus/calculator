// State management
let orderItems = [];
let orderIdCounter = 0;

// DOM Elements
const categorySelect = document.getElementById('category');
const itemSelect = document.getElementById('item');
const sizeSelect = document.getElementById('size');
const quantityInput = document.getElementById('quantity');
const addItemBtn = document.getElementById('addItem');
const resetOrderBtn = document.getElementById('resetOrder');
const orderItemsContainer = document.getElementById('orderItems');
const themeToggle = document.getElementById('themeToggle');
const shareResultsBtn = document.getElementById('shareResults');
const toast = document.getElementById('toast');

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Theme toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Populate items based on category
categorySelect.addEventListener('change', (e) => {
    const category = e.target.value;
    itemSelect.innerHTML = '<option value="">Select an item</option>';
    
    if (category && nutritionData[category]) {
        itemSelect.disabled = false;
        nutritionData[category].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item.name;
            itemSelect.appendChild(option);
        });
    } else {
        itemSelect.disabled = true;
    }
});

// Add item to order
addItemBtn.addEventListener('click', () => {
    const category = categorySelect.value;
    const itemIndex = itemSelect.value;
    const size = sizeSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (!category || itemIndex === '') {
        showToast('Please select a category and item', 'error');
        return;
    }

    if (quantity < 1 || quantity > 20) {
        showToast('Quantity must be between 1 and 20', 'error');
        return;
    }

    const item = nutritionData[category][itemIndex];
    const nutrition = item.nutrition[size];

    const orderItem = {
        id: orderIdCounter++,
        name: item.name,
        category: category,
        size: size,
        quantity: quantity,
        nutrition: {
            calories: nutrition.calories * quantity,
            carbs: nutrition.carbs * quantity,
            fat: nutrition.fat * quantity,
            protein: nutrition.protein * quantity
        },
        unitNutrition: nutrition
    };

    orderItems.push(orderItem);
    renderOrder();
    updateTotals();
    showToast('Item added to order! 🎉', 'success');

    // Reset form
    quantityInput.value = 1;
});

// Remove item from order
function removeItem(id) {
    orderItems = orderItems.filter(item => item.id !== id);
    renderOrder();
    updateTotals();
    showToast('Item removed from order', 'info');
}

// Reset order
resetOrderBtn.addEventListener('click', () => {
    if (orderItems.length === 0) {
        showToast('Order is already empty', 'info');
        return;
    }
    
    if (confirm('Are you sure you want to reset your order?')) {
        orderItems = [];
        renderOrder();
        updateTotals();
        showToast('Order reset', 'info');
    }
});

// Render order items
function renderOrder() {
    if (orderItems.length === 0) {
        orderItemsContainer.innerHTML = '<p class="empty-order">No items added yet. Start building your order!</p>';
        return;
    }

    orderItemsContainer.innerHTML = orderItems.map(item => `
        <div class="order-item">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-meta">${capitalizeFirst(item.size)} | Qty: ${item.quantity}</div>
                <div class="item-nutrition">
                    <span>🔥 ${item.nutrition.calories} cal</span>
                    <span>🍞 ${item.nutrition.carbs}g carbs</span>
                    <span>🥑 ${item.nutrition.fat}g fat</span>
                    <span>💪 ${item.nutrition.protein}g protein</span>
                </div>
            </div>
            <div class="item-actions">
                <button class="btn-remove" onclick="removeItem(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

// Update nutrition totals
function updateTotals() {
    const totals = orderItems.reduce((acc, item) => {
        acc.calories += item.nutrition.calories;
        acc.carbs += item.nutrition.carbs;
        acc.fat += item.nutrition.fat;
        acc.protein += item.nutrition.protein;
        return acc;
    }, { calories: 0, carbs: 0, fat: 0, protein: 0 });

    document.getElementById('totalCalories').textContent = totals.calories;
    document.getElementById('totalCarbs').textContent = totals.carbs + 'g';
    document.getElementById('totalFat').textContent = totals.fat + 'g';
    document.getElementById('totalProtein').textContent = totals.protein + 'g';
}

// Share/Copy results
shareResultsBtn.addEventListener('click', () => {
    if (orderItems.length === 0) {
        showToast('Add items to your order first', 'error');
        return;
    }

    const totals = {
        calories: parseInt(document.getElementById('totalCalories').textContent),
        carbs: parseInt(document.getElementById('totalCarbs').textContent),
        fat: parseInt(document.getElementById('totalFat').textContent),
        protein: parseInt(document.getElementById('totalProtein').textContent)
    };

    let text = "🍕 My Domino's Order Nutrition:\n\n";
    
    orderItems.forEach(item => {
        text += `${item.name} (${capitalizeFirst(item.size)}) x${item.quantity}\n`;
    });
    
    text += `\n📊 Total Nutrition:\n`;
    text += `Calories: ${totals.calories}\n`;
    text += `Carbs: ${totals.carbs}g\n`;
    text += `Fat: ${totals.fat}g\n`;
    text += `Protein: ${totals.protein}g\n\n`;
    text += `Calculated at: https://dominosnutritioncalculator.us/`;

    navigator.clipboard.writeText(text).then(() => {
        showToast('Results copied to clipboard! 📋', 'success');
    }).catch(() => {
        showToast('Failed to copy. Please try again.', 'error');
    });
});

// Show toast notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = 'toast show';
    
    if (type === 'error') {
        toast.style.background = '#e74c3c';
    } else if (type === 'info') {
        toast.style.background = '#3498db';
    } else {
        toast.style.background = '#27ae60';
    }

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize app
initTheme();
renderOrder();
updateTotals();

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + A to add item
    if (e.altKey && e.key === 'a') {
        e.preventDefault();
        addItemBtn.click();
    }
    
    // Alt + R to reset
    if (e.altKey && e.key === 'r') {
        e.preventDefault();
        resetOrderBtn.click();
    }
    
    // Alt + C to copy results
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        shareResultsBtn.click();
    }
});

// Accessibility improvements
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});

console.log('🍕 Domino\'s Nutrition Calculator loaded successfully!');
console.log('Keyboard shortcuts: Alt+A (Add), Alt+R (Reset), Alt+C (Copy)');
