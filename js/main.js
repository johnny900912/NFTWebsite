const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    counter.innerText='0';

    const update= () => {
        const target= +counter.getAttribute('data-target');

        const c =+counter.innerText;

        const increment=target/250;
        if(c<target)
        {
            counter.innerText=`${Math.ceil(c+increment)}`;
            setTimeout(update,10);
        }else{
            counter.innerText=target;
        }
    };
    update();    
});
var swiper = new Swiper(".NFT-content", {
    loop:true,
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1080: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });