const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(function() {
        const darkModeStyles = \`
          body {
            background-color: #333 !important;
            color: #fff !important;
          }
        \`;
        if (document.getElementById('dark-mode-styles')) {
          document.getElementById('dark-mode-styles').remove();
        } else {
          const styleElement = document.createElement('style');
          styleElement.id = 'dark-mode-styles';
          styleElement.innerHTML = darkModeStyles;
          document.head.appendChild(styleElement);
        }
      })();`
    });
  });
});
