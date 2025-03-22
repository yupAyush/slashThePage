function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

const a=["https://plus.unsplash.com/premium_photo-1672942124777-ebffc404fdab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbiUyMHZlcnRpY2FsfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnRvb24lMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhcnRvb24lMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1692944903154-584772b81873?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNhcnRvb24lMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1673344310388-3510b264bfc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnRvb24lMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1674902194685-d3df467cc4cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNhcnRvb24lMjB2ZXJ0aWNhbHxlbnwwfHwwfHx8MA%3D%3D","https://plus.unsplash.com/premium_photo-1677322684796-e60959c6d3e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxjYXJ0b29uJTIwdmVydGljYWx8ZW58MHx8MHx8fDA%3D","https://plus.unsplash.com/premium_photo-1677751244599-a384a630ba72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxjYXJ0b29uJTIwdmVydGljYWx8ZW58MHx8MHx8fDA%3D"]
document.querySelector("#centre")
.addEventListener('mousemove', throttle((dets) => {
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",a[Math.floor(Math.random()*a.length)]);
    div.appendChild(image);

    div.classList.add("imgdiv");
    div.style.left=dets.clientX-200+"px";

    div.style.top=dets.clientY-270+"px";
    div.style.rotate=Math.random()*50+"deg";


    gsap.to(image,{
        y:"0%",
        ease:Power2 .easeOut,
        duration:.2,

    });
    gsap.to(image,{
        y:"100%",
        
        ease: "power1.inOut",
        repeat: 0,
        yoyo: true,
        delay:.2,
        
        
      

    });
    


    document.body.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },1000)

}, 150));





