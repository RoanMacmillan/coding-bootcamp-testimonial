


    const buttons = document.querySelectorAll('.scroll-btn');



    const tanyaDisplay = document.getElementById('tanya');

    const johnDisplay = document.getElementById('john');

    function scrollFunction (event) {

            
        if (event.keyCode === 37 || event.keyCode === 39) {

            tanyaDisplay.classList.toggle('scrolltanya');

            johnDisplay.classList.toggle('scrolljohn');

        }  
        
        if (event.target.matches('a') || event.target.matches('img')) {



            tanyaDisplay.classList.toggle('scrolltanya');

            johnDisplay.classList.toggle('scrolljohn');

        }

    }


    buttons.forEach((button) => {

        button.addEventListener('click', scrollFunction);
    
    })

    window.addEventListener('keydown', scrollFunction);