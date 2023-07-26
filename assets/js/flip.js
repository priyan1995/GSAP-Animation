gsap.registerPlugin(Flip);

let mainBox = document.querySelector('.pd-place-sq');

let smallBox1 = document.querySelector('.pd-sq-1');
let smallBox2 = document.querySelector('.pd-sq-2');
let smallBox3 = document.querySelector('.pd-sq-3');
let smallBox4 = document.querySelector('.pd-sq-4');

// smallBox1.addEventListener("click", (e)=>{
//     let state = Flip.getState(".pd-sq-1");
//     mainBox.appendChild(smallBox1);
//     Flip.from(state, {duration: 1, ease:'power1.out'})
// })

// smallBox2.addEventListener("click", (e)=>{
//     let state = Flip.getState(".pd-sq-2");
//     mainBox.appendChild(smallBox2);
//     Flip.from(state, {duration: 1, ease:'power1.out'})
// })

// smallBox3.addEventListener("click", (e)=>{
//     let state = Flip.getState(".pd-sq-3");
//     mainBox.appendChild(smallBox3);
//     Flip.from(state, {duration: 1, ease:'power1.out'})
// })

// smallBox4.addEventListener("click", (e)=>{
//     let state = Flip.getState(".pd-sq-4");
//     mainBox.appendChild(smallBox4);
//     Flip.from(state, {duration: 1, ease:'power1.out'})
// })

document.addEventListener("scroll", (e) => {
    // /console.log(window.scrollY);

    if (window.scrollY > 50) {
        let state = Flip.getState(".pd-sq-1");
        mainBox.appendChild(smallBox1);
        Flip.from(state, { duration: 1, ease: 'power1.out' });
    }

    if (window.scrollY > 150) {
        let state = Flip.getState(".pd-sq-2");
        mainBox.appendChild(smallBox2);
        Flip.from(state, { duration: 1, ease: 'power1.out' });
    }

    if (window.scrollY > 250) {
        let state = Flip.getState(".pd-sq-3");
        mainBox.appendChild(smallBox3);
        Flip.from(state, { duration: 1, ease: 'power1.out' });
    }
    if (window.scrollY > 350) {
        let state = Flip.getState(".pd-sq-4");
        mainBox.appendChild(smallBox4);
        Flip.from(state, { duration: 1, ease: 'power1.out' });
    }

})
