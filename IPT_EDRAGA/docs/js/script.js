function searchContent() {
    
    removeHighlights();

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm === '') return; 

    const mainContent = document.querySelector('main');
    const textNodes = getTextNodes(mainContent);

    textNodes.forEach(node => {
        const parent = node.parentElement;
        const content = node.textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedText = node.textContent.replace(regex, '<span class="highlight">$1</span>');
            parent.innerHTML = highlightedText; 
        }
    });
}

function getTextNodes(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
        textNodes.push(node);
    }
    return textNodes;
}

function removeHighlights() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(span => {
        const parent = span.parentElement;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });
}


document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {

        button.classList.toggle('active');

      
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});


document.getElementById('dropdown-menu').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const dynamicContent = document.getElementById('dynamic-content');

 
    switch (selectedOption) {
        case 'profile':
            dynamicContent.innerHTML = `
                <h3>Profile</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatum ipsam nostrum, atque maxime quae, quisquam ipsum quos possimus unde alias. Quae dolor inventore nisi velit natus minus ipsa quis!.</p>
            `;
            break;

        case 'skills':
            dynamicContent.innerHTML = `
                <h3>Skill Section</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatum ipsam nostrum, atque maxime quae, quisquam ipsum quos possimus unde alias. Quae dolor inventore nisi velit natus minus ipsa quis!.</p>
            `;
            break;

        case 'feedback':
            dynamicContent.innerHTML = `
                <h3>Feedback & Rating</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatum ipsam nostrum, atque maxime quae, quisquam ipsum quos possimus unde alias. Quae dolor inventore nisi velit natus minus ipsa quis!.</p>
            `;
            break;

        default:
            dynamicContent.innerHTML = `
                <h3>Profile</h3>
                <p>Detailed information about the profile goes here. Add relevant details or links.</p>
            `;
            break;
    }
});
function showFullImage(imageSrc) {
  
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    modalImage.src = imageSrc;


    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}