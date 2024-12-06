document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(branch => {
        const title = branch.querySelector('.branch-title');
        const toggleIcon = branch.querySelector('.toggle-icon');
        
        title.addEventListener('click', () => {
            branch.classList.toggle('collapsed');
            toggleIcon.textContent = branch.classList.contains('collapsed') ? '[+]' : '[-]';
        });
    });
});
