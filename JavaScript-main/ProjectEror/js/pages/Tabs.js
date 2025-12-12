function Tabs(){
    function showContentHandler(event){
        var tabs = document.querySelectorAll('.tab');
        for (var i = 0; i < tabs.length; i++){
            tabs[i].classList.remove('action');
        }

        event.target.classList.add('action');

        var contents = document.querySelectorAll('.content');
        for(var i = 0; i < contents.length;i++){
            contents[i].classList.add('hide');
        }
        document.querySelector(`.${event.target.dataset.contentClass}`)
            .classList.remove('.hide');
    }

    this.init = function(){
        var tabs = document.querySelectorAll('.tab');
        for (var i = 0;i < tabs.length; i++){
            tabs[i].addEventListener('click',showContentHandler);
        }
    }
}