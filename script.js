const buttons=document.querySelectorAll('.button')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let color=e.target.id;
        switch (color) {
            case 'red':
                document.body.style.backgroundColor=color
                break;
            case 'green':
                document.body.style.backgroundColor=color
                break;
            case 'yellow':
                document.body.style.backgroundColor=color
                break;
            case 'blue':
                document.body.style.backgroundColor=color
                break;    

            default:
                break;
        }
        // if (e.target.id==='blue') {
        //     document.body.style.backgroundColor=e.target.id
        // }
    })
})