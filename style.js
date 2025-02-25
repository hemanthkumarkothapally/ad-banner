document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".content");
    banner.style.opacity = "0";
    banner.style.transform = "translateY(20px)";

    setTimeout(() => {
        banner.style.opacity = "1";
        banner.style.transform = "translateY(0)";
        banner.style.transition = "all 0.8s ease-in-out";
    }, 500);
});
