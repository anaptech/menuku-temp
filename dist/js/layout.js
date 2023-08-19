element("head").innerHTML = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menuku | ${currentPage}</title>
    <link rel="icon" href="dist/img/icon/bell.png">
    <link rel="stylesheet" href="dist/css/output.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.16/dist/sweetalert2.min.css" integrity="sha256-sWZjHQiY9fvheUAOoxrszw9Wphl3zqfVaz1kZKEvot8=" crossorigin="anonymous">
`;

const navActive = element("footer").dataset.active;

element("footer").classList.add("fixed", "inset-x-4", "bottom-4", "z-[9999]");
element("footer").innerHTML = `
    <div class="flex items-center justify-around py-5 px-7 bg-footer backdrop-blur-[10px] rounded-[20px]">
        <a 
            class="h-6 ${currentPage == "index.html" ? "active" : ""} ${currentPage == "" ? "active" : ""}" 
            href="${currentPage == "index.html" ? "#" : "index.html"}">
            <span class="material-symbols-outlined">home</span>
        </a>
        <a 
            class="text-2xl leading-none ${currentPage == "cart.html" ? "active" : ""}" 
            href="${currentPage == "cart.html" ? "#" : "cart.html"}">
            <span class="material-symbols-outlined">shopping_cart</span>
        </a>
        <a 
            class="text-2xl leading-none ${currentPage == "order-summary.html" || currentPage == "bill.html" ? "active" : ""}" 
            href="${currentPage == "order-summary.html" ? "#" : "order-summary.html"}">
            <span class="iconify" data-icon="carbon:ibm-watson-orders"></span>
        </a>
    </div>
`;
