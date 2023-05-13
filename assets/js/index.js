$(() => {
    const 
        carouselWrapper = $('.carousel-inner'),
        carouselWrapperInnerImage = $('.carousel-inner').find('img'),
        carouselItem = $('.carousel-item'),
        carouselItemInnerImage = $('.carousel-item').find('img'),
        buttonEl = $('#button'),
        formEl = $('#form'),
        inputEl = $('#input');


    // Search Form Results
    formEl.on('submit', (e) => {
        e.preventDefault();

       
      
        // API Data
        const game = inputEl.val()
        if (game) {    
          const key = '44ec0594d5e94b1db806b05716db6309';    
          const url = `https://api.rawg.io/api/games?search=${game}&key=${key}`;

          
      
          $.ajax({
            url: url,
            method: 'GET',
            success: (data) => {

                const gameName = $('#gameName')
                      gameName.text(data.results[0].name)
                    
            },
            error: (err) => {
              console.error(err);
            }
          })
        }
      })
})  
      




/*

GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7



*/