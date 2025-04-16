// js/navigation.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggleButton = document.getElementById('sidebar-toggle-button');
    const pageContainer = document.querySelector('.page-container'); // Target the main container
    const sidebarNav = document.querySelector('.sidebar-nav');
    // --- Example Solution Toggle Logic ---
    const mainContentArea = document.getElementById('main-content');

    if (mainContentArea) {
      mainContentArea.addEventListener('click', (event) => {
        // Target only the solution toggle buttons within the main content
        const solutionToggleButton = event.target.closest('.solution-toggle');
  
        if (solutionToggleButton) {
          event.preventDefault(); // Prevent default button action
  
          const parentExample = solutionToggleButton.closest('.example');
          if (!parentExample) return;
  
          const solutionDiv = parentExample.querySelector('.solution');
          if (!solutionDiv) return;
  
          // Toggle the solution visibility
          const isHidden = solutionDiv.hidden;
          solutionDiv.hidden = !isHidden;
  
          // Update button text and ARIA state
          solutionToggleButton.setAttribute('aria-expanded', isHidden); // Is now expanded if it WAS hidden
          solutionToggleButton.textContent = isHidden ? 'Hide Solution' : 'Show Solution';
        }
      });
    } // end if(mainContentArea)
    // --- Main Sidebar Toggle Logic ---
    if (sidebarToggleButton && pageContainer && sidebar) {
      sidebarToggleButton.addEventListener('click', () => {
        // Toggle classes for both desktop/mobile visibility
        const isMobile = window.innerWidth <= 768; // Match CSS breakpoint
  
        if (isMobile) {
             pageContainer.classList.toggle('sidebar-visible'); // Use separate class for mobile overlay
             sidebarToggleButton.setAttribute('aria-expanded', pageContainer.classList.contains('sidebar-visible'));
  
             // Optional: Close sidebar if user clicks main content area on mobile when overlay is active
             const mainContent = document.getElementById('main-content');
             if (pageContainer.classList.contains('sidebar-visible') && mainContent) {
                 mainContent.addEventListener('click', () => {
                      pageContainer.classList.remove('sidebar-visible');
                      sidebarToggleButton.setAttribute('aria-expanded', 'false');
                 }, { once: true }); // Remove listener after one click
             }
  
        } else {
             pageContainer.classList.toggle('sidebar-hidden'); // Original class for desktop push
             sidebarToggleButton.setAttribute('aria-expanded', !pageContainer.classList.contains('sidebar-hidden'));
        }
  
  
      });
  
      // Set initial ARIA state based on default visibility (hidden on mobile, visible on desktop)
       const isMobile = window.innerWidth <= 768;
       if (isMobile) {
           sidebarToggleButton.setAttribute('aria-expanded', 'false'); // Starts hidden on mobile
       } else {
           sidebarToggleButton.setAttribute('aria-expanded', !pageContainer.classList.contains('sidebar-hidden')); // Reflects desktop state
       }
  
  
    } else {
        console.error("Sidebar toggle button, container, or sidebar not found.");
    }
  
  
    // --- Submenu Toggle Logic (Handles expanding/collapsing units) ---
    if (sidebarNav) {
      sidebarNav.addEventListener('click', (event) => {
        const toggleButton = event.target.closest('.submenu-toggle');
  
        if (toggleButton) {
          event.preventDefault(); // Prevent default button action
          event.stopPropagation(); // Stop click from propagating to parent handlers (like mobile overlay close)
  
          const parentLi = toggleButton.closest('.nav-item.has-submenu');
          if (!parentLi) return;
  
          const submenu = parentLi.querySelector(':scope > .submenu'); // Get direct child submenu
          if (!submenu) return;
  
          // Toggle the state
          const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
  
          toggleButton.setAttribute('aria-expanded', !isExpanded);
          submenu.hidden = isExpanded; // Toggle hidden attribute
  
          // Optional: Toggle a class for styling opened state (e.g., changing icon)
          parentLi.classList.toggle('is-open', !isExpanded);
          const icon = toggleButton.querySelector('.toggle-icon');
          if (icon) {
            icon.textContent = isExpanded ? '+' : '−'; // Use minus sign for open state
          }
        }
      });
  
      // Set initial state correctly for submenus based on 'hidden' attribute
      const allSubmenuToggles = sidebarNav.querySelectorAll('.submenu-toggle');
      allSubmenuToggles.forEach(toggle => {
        const controlsId = toggle.getAttribute('aria-controls');
        const submenu = document.getElementById(controlsId);
        if (submenu) {
          const isHidden = submenu.hidden;
          toggle.setAttribute('aria-expanded', !isHidden);
          const parentLi = toggle.closest('.nav-item.has-submenu');
          if (parentLi) {
            parentLi.classList.toggle('is-open', !isHidden);
          }
          const icon = toggle.querySelector('.toggle-icon');
          if (icon) {
            icon.textContent = isHidden ? '+' : '−';
          }
        }
      });
    } // end if(sidebarNav)
  
  }); // end DOMContentLoaded