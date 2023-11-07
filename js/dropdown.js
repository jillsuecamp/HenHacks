/**
 * 
 * @param {any} scrElement - the scrElement is the button the triggered the event
 */
function toggleDropdown(srcElement) {
    if(srcElement.children) {
        
        // looping through the srcElement's childern
        // when a child is found with the class of "dropdown-content" it's 
        // visability is toggled
        const subNodes = srcElement.children;
        for (let i = 0; i < srcElement.children.length; i++) {
            console.log(subNodes[i]);
            if(subNodes[i].classList.contains("dropdown-content")) {
                subNodes[i].classList.toggle("show-dropdown");
            }
        }
    }
}