var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
)

var popoverList = popoverTriggerList.map(function(popoverTriggerEl){
    return new bootstrap.popover(popoverTriggerEl)
})
/* Tooltip */
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
)

var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
    return new bootstrap.Tooltip(tooltipTriggerEl)
})