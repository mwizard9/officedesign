document.getElementById('nightModeToggle').addEventListener('click', function () {
    const checkbox = document.getElementById('flexSwitchCheckDefault');
    const sidebar = document.getElementById('SidebarId'); 
    sidebar.classList.toggle('dark-sidebar', checkbox.checked);
  });