// const subscriptionCanvas = document.getElementById('about-us');
// if (subscriptionCanvas) {
//     const r = new rive.Rive({
//         src: riveAnimationsData.subscriptionRiveSrc, // Use the correct path from localized data
//         canvas: subscriptionCanvas,
//         autoplay: false, // Disable autoplay
//         fit: rive.Fit.contain,
//         onLoad: () => {
//             r.resizeDrawingSurfaceToCanvas();
//             const observer = new IntersectionObserver((entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         r.play(); // Start the Rive animation when the canvas is in view
//                     } else {
//                         r.reset(); // Reset the animation when out of view
//                     }
//                 });
//             }, { threshold: 0.5 });

//             observer.observe(subscriptionCanvas);
//         },
//         onError: (error) => {
//             console.error('Rive animation load error:', error);
//         }
//     });
// }


// About Us Rive animation
const aboutCanvas = document.getElementById('about-us');
if (aboutCanvas) {
    const dpr = window.devicePixelRatio || 1;
    aboutCanvas.width = aboutCanvas.clientWidth * dpr;
    aboutCanvas.height = aboutCanvas.clientHeight * dpr;
    const r = new rive.Rive({
        src: './resources/homepage/about_us.riv',
        canvas: aboutCanvas,
        autoplay: false,
        fit: rive.Fit.contain,
        onLoad: () => {
            r.resizeDrawingSurfaceToCanvas();
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        r.play();
                    } else {
                        r.reset();
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(aboutCanvas);
        },
        onError: (error) => {
            console.error('Rive animation load error:', error);
        }
    });
}