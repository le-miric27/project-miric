document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
    const allPosts = document.getElementById('allPosts');

    // Function to perform search
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (!searchTerm) {
            searchResults.classList.add('hidden');
            allPosts.classList.remove('hidden');
            return;
        }

        // Get all blog posts
        const posts = Array.from(allPosts.querySelectorAll('div.bg-white, div.bg-gray-900'));
        const matchingPosts = posts.filter(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const description = post.querySelector('p').textContent.toLowerCase();
            return title.includes(searchTerm) || description.includes(searchTerm);
        });

        // Display search results
        resultsList.innerHTML = '';

        if (matchingPosts.length === 0) {
            resultsList.innerHTML = `
                <div class="text-center py-8">
                    <p class="text-gray-700 dark:text-gray-300">No results found for "${searchTerm}"</p>
                </div>
            `;
        } else {
            matchingPosts.forEach(post => {
                resultsList.appendChild(post.cloneNode(true));
            });
        }

        searchResults.classList.remove('hidden');
        allPosts.classList.add('hidden');
    };

    // Add event listeners
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    if (searchInput) {
        // Instant search as user types
        searchInput.addEventListener('input', performSearch);
    }
});
