// Comprehensive nutrition data for Domino's menu items
const nutritionData = {
    pizzas: [
        {
            name: "Cheese Pizza",
            nutrition: {
                small: { calories: 200, carbs: 26, fat: 7, protein: 8 },
                medium: { calories: 280, carbs: 36, fat: 10, protein: 12 },
                large: { calories: 380, carbs: 48, fat: 14, protein: 16 }
            }
        },
        {
            name: "Pepperoni Pizza",
            nutrition: {
                small: { calories: 230, carbs: 26, fat: 10, protein: 10 },
                medium: { calories: 320, carbs: 36, fat: 14, protein: 14 },
                large: { calories: 420, carbs: 48, fat: 18, protein: 18 }
            }
        },
        {
            name: "Supreme Pizza",
            nutrition: {
                small: { calories: 260, carbs: 28, fat: 12, protein: 11 },
                medium: { calories: 360, carbs: 38, fat: 16, protein: 15 },
                large: { calories: 460, carbs: 50, fat: 21, protein: 19 }
            }
        },
        {
            name: "Hawaiian Pizza",
            nutrition: {
                small: { calories: 220, carbs: 28, fat: 8, protein: 9 },
                medium: { calories: 310, carbs: 38, fat: 11, protein: 13 },
                large: { calories: 400, carbs: 50, fat: 15, protein: 17 }
            }
        },
        {
            name: "MeatZZa Pizza",
            nutrition: {
                small: { calories: 280, carbs: 27, fat: 14, protein: 13 },
                medium: { calories: 380, carbs: 37, fat: 19, protein: 17 },
                large: { calories: 490, carbs: 49, fat: 25, protein: 22 }
            }
        },
        {
            name: "ExtravaganZZa Pizza",
            nutrition: {
                small: { calories: 270, carbs: 28, fat: 13, protein: 12 },
                medium: { calories: 370, carbs: 38, fat: 17, protein: 16 },
                large: { calories: 480, carbs: 50, fat: 23, protein: 20 }
            }
        },
        {
            name: "Philly Cheese Steak Pizza",
            nutrition: {
                small: { calories: 250, carbs: 27, fat: 11, protein: 12 },
                medium: { calories: 340, carbs: 37, fat: 15, protein: 16 },
                large: { calories: 440, carbs: 49, fat: 20, protein: 20 }
            }
        },
        {
            name: "Pacific Veggie Pizza",
            nutrition: {
                small: { calories: 210, carbs: 28, fat: 7, protein: 9 },
                medium: { calories: 290, carbs: 38, fat: 10, protein: 12 },
                large: { calories: 380, carbs: 50, fat: 13, protein: 15 }
            }
        },
        {
            name: "Buffalo Chicken Pizza",
            nutrition: {
                small: { calories: 240, carbs: 27, fat: 10, protein: 12 },
                medium: { calories: 330, carbs: 37, fat: 14, protein: 16 },
                large: { calories: 430, carbs: 49, fat: 18, protein: 21 }
            }
        },
        {
            name: "BBQ Chicken Pizza",
            nutrition: {
                small: { calories: 235, carbs: 29, fat: 9, protein: 11 },
                medium: { calories: 325, carbs: 39, fat: 12, protein: 15 },
                large: { calories: 425, carbs: 51, fat: 16, protein: 19 }
            }
        }
    ],
    sides: [
        {
            name: "Breadsticks (1 stick)",
            nutrition: {
                small: { calories: 110, carbs: 18, fat: 3, protein: 3 },
                medium: { calories: 110, carbs: 18, fat: 3, protein: 3 },
                large: { calories: 110, carbs: 18, fat: 3, protein: 3 }
            }
        },
        {
            name: "Cheesy Bread (1 piece)",
            nutrition: {
                small: { calories: 140, carbs: 17, fat: 6, protein: 5 },
                medium: { calories: 140, carbs: 17, fat: 6, protein: 5 },
                large: { calories: 140, carbs: 17, fat: 6, protein: 5 }
            }
        },
        {
            name: "Stuffed Cheesy Bread (1 piece)",
            nutrition: {
                small: { calories: 160, carbs: 18, fat: 7, protein: 6 },
                medium: { calories: 160, carbs: 18, fat: 7, protein: 6 },
                large: { calories: 160, carbs: 18, fat: 7, protein: 6 }
            }
        },
        {
            name: "Chicken Wings (1 wing)",
            nutrition: {
                small: { calories: 80, carbs: 1, fat: 5, protein: 7 },
                medium: { calories: 80, carbs: 1, fat: 5, protein: 7 },
                large: { calories: 80, carbs: 1, fat: 5, protein: 7 }
            }
        },
        {
            name: "Boneless Chicken (1 piece)",
            nutrition: {
                small: { calories: 90, carbs: 6, fat: 4, protein: 8 },
                medium: { calories: 90, carbs: 6, fat: 4, protein: 8 },
                large: { calories: 90, carbs: 6, fat: 4, protein: 8 }
            }
        },
        {
            name: "Parmesan Bread Bites (1 bite)",
            nutrition: {
                small: { calories: 45, carbs: 6, fat: 2, protein: 1 },
                medium: { calories: 45, carbs: 6, fat: 2, protein: 1 },
                large: { calories: 45, carbs: 6, fat: 2, protein: 1 }
            }
        },
        {
            name: "Potato Tots (10 pieces)",
            nutrition: {
                small: { calories: 280, carbs: 33, fat: 14, protein: 3 },
                medium: { calories: 280, carbs: 33, fat: 14, protein: 3 },
                large: { calories: 280, carbs: 33, fat: 14, protein: 3 }
            }
        },
        {
            name: "Garden Salad",
            nutrition: {
                small: { calories: 70, carbs: 7, fat: 4, protein: 3 },
                medium: { calories: 70, carbs: 7, fat: 4, protein: 3 },
                large: { calories: 70, carbs: 7, fat: 4, protein: 3 }
            }
        },
        {
            name: "Caesar Salad",
            nutrition: {
                small: { calories: 90, carbs: 8, fat: 5, protein: 4 },
                medium: { calories: 90, carbs: 8, fat: 5, protein: 4 },
                large: { calories: 90, carbs: 8, fat: 5, protein: 4 }
            }
        },
        {
            name: "Garlic Dipping Sauce",
            nutrition: {
                small: { calories: 250, carbs: 2, fat: 28, protein: 0 },
                medium: { calories: 250, carbs: 2, fat: 28, protein: 0 },
                large: { calories: 250, carbs: 2, fat: 28, protein: 0 }
            }
        }
    ],
    desserts: [
        {
            name: "Chocolate Lava Crunch Cake",
            nutrition: {
                small: { calories: 350, carbs: 47, fat: 17, protein: 4 },
                medium: { calories: 350, carbs: 47, fat: 17, protein: 4 },
                large: { calories: 350, carbs: 47, fat: 17, protein: 4 }
            }
        },
        {
            name: "Marbled Cookie Brownie",
            nutrition: {
                small: { calories: 200, carbs: 30, fat: 8, protein: 2 },
                medium: { calories: 200, carbs: 30, fat: 8, protein: 2 },
                large: { calories: 200, carbs: 30, fat: 8, protein: 2 }
            }
        },
        {
            name: "Cinnamon Bread Twists (1 twist)",
            nutrition: {
                small: { calories: 120, carbs: 19, fat: 4, protein: 2 },
                medium: { calories: 120, carbs: 19, fat: 4, protein: 2 },
                large: { calories: 120, carbs: 19, fat: 4, protein: 2 }
            }
        },
        {
            name: "Apple Dipping Sauce",
            nutrition: {
                small: { calories: 200, carbs: 50, fat: 0, protein: 0 },
                medium: { calories: 200, carbs: 50, fat: 0, protein: 0 },
                large: { calories: 200, carbs: 50, fat: 0, protein: 0 }
            }
        }
    ],
    drinks: [
        {
            name: "Coca-Cola",
            nutrition: {
                small: { calories: 120, carbs: 33, fat: 0, protein: 0 },
                medium: { calories: 180, carbs: 49, fat: 0, protein: 0 },
                large: { calories: 240, carbs: 65, fat: 0, protein: 0 }
            }
        },
        {
            name: "Diet Coke",
            nutrition: {
                small: { calories: 0, carbs: 0, fat: 0, protein: 0 },
                medium: { calories: 0, carbs: 0, fat: 0, protein: 0 },
                large: { calories: 0, carbs: 0, fat: 0, protein: 0 }
            }
        },
        {
            name: "Sprite",
            nutrition: {
                small: { calories: 110, carbs: 31, fat: 0, protein: 0 },
                medium: { calories: 170, carbs: 46, fat: 0, protein: 0 },
                large: { calories: 230, carbs: 62, fat: 0, protein: 0 }
            }
        },
        {
            name: "Orange Fanta",
            nutrition: {
                small: { calories: 130, carbs: 35, fat: 0, protein: 0 },
                medium: { calories: 190, carbs: 52, fat: 0, protein: 0 },
                large: { calories: 250, carbs: 70, fat: 0, protein: 0 }
            }
        },
        {
            name: "Iced Tea (Unsweetened)",
            nutrition: {
                small: { calories: 0, carbs: 0, fat: 0, protein: 0 },
                medium: { calories: 0, carbs: 0, fat: 0, protein: 0 },
                large: { calories: 0, carbs: 0, fat: 0, protein: 0 }
            }
        },
        {
            name: "Lemonade",
            nutrition: {
                small: { calories: 100, carbs: 27, fat: 0, protein: 0 },
                medium: { calories: 150, carbs: 40, fat: 0, protein: 0 },
                large: { calories: 200, carbs: 53, fat: 0, protein: 0 }
            }
        },
        {
            name: "Bottled Water",
            nutrition: {
                small: { calories: 0, carbs: 0, fat: 0, protein: 0 },
                medium: { calories: 0, carbs: 0, fat: 0, protein: 0 },
                large: { calories: 0, carbs: 0, fat: 0, protein: 0 }
            }
        }
    ]
};
