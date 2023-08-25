let sectionZero = document.getElementById("section-0");

const SectionZeroObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    entry.target.style.opacity = 1.3 - entry.intersectionRatio;
})
}, {threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]});

SectionZeroObs.observe(sectionZero);

const hiddenElements = Array.from(document.getElementsByClassName("hidden"));
const FadeInObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("inView");
        }
    })
}, {threshold: 0.6});
hiddenElements.forEach(el => {
    FadeInObs.observe(el);
});