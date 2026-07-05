// Function to perform the search
function performSearch() {
  const title = document.getElementById('movieTitle').value.trim();
  if (!title) {
    alert('Please enter a movie title');
    return;
  }

  const encodedTitle = encodeURIComponent(title);
  const query = encodedTitle + '+imdb+summary%2C+rating%2C+and+parental+review+in+a+table';
  const url = 'https://search.brave.com/ask?q=' + query;

  chrome.tabs.create({ url: url });
  
  // Optional: close popup after search
  // window.close();
}

// Click handler
document.getElementById('searchBtn').addEventListener('click', performSearch);

// Enter key handler on input field
document.getElementById('movieTitle').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

// Auto-focus the input when popup opens
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('movieTitle');
  input.focus();
});
