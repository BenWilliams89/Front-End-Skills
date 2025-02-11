// FAQ accordian

// Adding the container makes this an event delegation instead of placing it on each header or icon etc

document.addEventListener('DOMContentLoaded', function() {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', function(e){
        const groupHeader =e.target.closest('.faq-group-header');
        
        if (!groupHeader) return;
        
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //Toggle icon from a plus to a minus etc

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Open the body when it is clicked

        groupBody.classList.toggle('open');

        // close the faq content when another is opened

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach(function(otherGroup){
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');

            }
        })
        
    })
} );


// Mobile Nav Bar functionality (open & close)