document.addEventListener('DOMContentLoaded', () => {
    const signInContainer = document.getElementById('signInContainer');
    const registerContainer = document.getElementById('registerContainer');
    const problemSolverContainer = document.getElementById('problemSolverContainer');
    const pastHistoryContainer = document.getElementById('pastHistoryContainer');
    const resultsContainer = document.getElementById('results');
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
    const inputForm = document.getElementById('inputForm');
    const showRegisterLink = document.getElementById('showRegisterLink');
    const showSignInLink = document.getElementById('showSignInLink');
    const logOutLink = document.getElementById('logOutLink');
    const pastHistoryLink = document.getElementById('pastHistory');
    const newCalculationButton = document.getElementById('newCalculationButton');
    const homeButton = document.getElementById('homeButton');
    const totalCostSpan = document.getElementById('totalCost');

    // Show registration container
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        signInContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });

    // Show sign-in container
    showSignInLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerContainer.classList.remove('active');
        signInContainer.classList.add('active');
    });

    // Log out
    logOutLink.addEventListener('click', (e) => {
        e.preventDefault();
        problemSolverContainer.classList.remove('active');
        signInContainer.classList.add('active');
    });

    // Go back to problem solver
    pastHistoryLink.addEventListener('click', (e) => {
        e.preventDefault();
        pastHistoryContainer.classList.remove('active');
        problemSolverContainer.classList.add('active');
    });

    // Handle sign-in form submission
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        signInContainer.classList.remove('active');
        problemSolverContainer.classList.add('active');
    });

    // Handle register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        registerContainer.classList.remove('active');
        signInContainer.classList.add('active');
    });

    // Handle problem solver form submission
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Dummy result data
        const result = {
            allocations: [
                [8, 0, 0],
                [0, 7, 0],
                [0, 0, 2]
            ],
            totalCost: 17
        };

        // Display results
        displayResults(result);
    });

    // Display results
    function displayResults(result) {
        resultsContainer.style.display = 'block';
        const resultsTable = document.getElementById('resultsTable');
        const headerRow = document.getElementById('headerRow');
        headerRow.innerHTML = '<th>Supply/Demand</th>';
        result.allocations[0].forEach((_, index) => {
            headerRow.innerHTML += `<th>D${index + 1}</th>`;
        });

        resultsTable.querySelector('tbody').innerHTML = '';
        result.allocations.forEach((row, index) => {
            let rowHtml = `<tr><td>S${index + 1}</td>`;
            row.forEach(cell => {
                rowHtml += `<td>${cell}</td>`;
            });
            rowHtml += '</tr>';
            resultsTable.querySelector('tbody').innerHTML += rowHtml;
        });

        totalCostSpan.textContent = result.totalCost;
    }

    // Handle new calculation
    newCalculationButton.addEventListener('click', () => {
        resultsContainer.style.display = 'none';
        problemSolverContainer.classList.add('active');
    });

    // Handle home button click
    homeButton.addEventListener('click', () => {
        pastHistoryContainer.classList.remove('active');
        problemSolverContainer.classList.add('active');
    });
});
