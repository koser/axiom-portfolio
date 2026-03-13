// Gallery — filtering and layout for Axiom portfolio
(function () {
    'use strict';

    var grid = document.getElementById('projects-grid');
    var emptyState = document.getElementById('empty-state');

    if (grid && grid.children.length > 0) {
        if (emptyState) emptyState.style.display = 'none';
    }
})();
