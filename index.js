// alert("godwin code is working")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        } else{
            entry.target.classList.remove("show")
        }
    });
});

const hiddenElement = document.querySelectorAll("scrollanimation");
hiddenElement.forEach((el) => observer.observe(el));