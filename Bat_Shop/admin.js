document.addEventListener('DOMContentLoaded', function() {
    const radioTabs = document.querySelectorAll('input[name="tabs"]');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Event listener for radio buttons
    radioTabs.forEach(radio => {
      radio.addEventListener('change', function() {
        // Hide all tab contents
        tabContents.forEach(tab => {
          tab.classList.remove('show');
        });
  
        // Show the selected tab content
        const selectedTabId = this.id.replace('radio-', '');
        const selectedTabContent = document.getElementById(selectedTabId);
        selectedTabContent.classList.add('show');
      });
    });
  });
  