
//alert ("hello world");
new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      onLeave: function(origin, destination, direction){
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: 0.5});
        const tl1 = new TimelineMax({delay: 0.3});

        tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y:0, opacity:1});

        if (destination.index === 1){
          const chairs = document.querySelector('.chair');
          const description = document.querySelector('.description');

          tl1.fromTo(chairs, 0.7, { x:"100%"}, { x: "-90%"})
          .fromTo(description, 0.5, {  y: "50", opacity:0}, {y:0, opacity: 1});//.fromTo(chairs[0], 1, {opacity: 1}, {opacity: 1} ).fromTo(chairs[1], 1, {opacity: 0}, {opacity: 1} ).fromTo(chairs[2], 1, {opacity: 0}, {opacity: 1});
        }
      },

});


//  afterLoad:
//  function(origin, destination, direction){
  // const section = destination.item;
  // const title = //section.querySelector('h1');
//   const tl = new TimelineMax({delay: 0.5});

  // tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y:0, opacity:1});
 //},
