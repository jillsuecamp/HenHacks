/**
 * 
 * @param {Event} e - the event from the element that triggered the dropdown
 */
function triggerDropdown(e) {
    toggleDropdown(e.target)
}
/**
 * 
 * @param {any} target - the target is the button the triggered the event
 */
function toggleDropdown(target) {
    if(target.children) {
        // looping through the srcElement's childern
        // when a child is found with the class of "dropdown-content" it's 
        // visability is toggled
        const subNodes = target.children;
        for (let i = 0; i < target.children.length; i++) {
            if(subNodes[i].classList.contains("dropdown-content")) {
                subNodes[i].classList.toggle("show-dropdown");
            }
        }
    }
}