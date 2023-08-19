const myURL = new URL(window.location.href),
   baseURL = myURL.origin,
   currentPage = myURL.pathname.split("/")[2];

const getParam = (key) => myURL.searchParams.get(key);

const fetchData = async (url) => {
   const response = await fetch(url),
      data = await response.json();

   return data;
};

const createElement = (tagName) => {
   return document.createElement(tagName);
};

const element = (selector, plural = false) => {
   if (!plural) {
      return document.querySelector(selector);
   } else {
      return document.querySelectorAll(selector);
   }
};

const elementByParent = (parentEl, selector, plural = false) => {
   if (!plural) {
      return parentEl.querySelector(selector);
   } else {
      return parentEl.querySelectorAll(selector);
   }
};

const formatHarga = (harga) => {
   harga = harga.split("Rp");
   harga = harga[1].split(".");
   harga = harga.join("");

   return Number(harga);
};

const stringToArray = (string) => {
   string = string.split(",");
   string = string.filter((item) => item != "");

   return string;
};

const formatRupiah = (angka, prefix = "Rp") => {
   let number_string = String(angka)
         .replace(/[^,\d]/g, "")
         .toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

   // tambahkan titik jika yang di input sudah menjadi angka ribuan
   if (ribuan) {
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
   }

   rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
   return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
};

const getHargaPerMenu = (listMenu) => {
   const hargaPermenu = [];

   listMenu.forEach((menu) => hargaPermenu.push(Number(menu.price)));

   return hargaPermenu;
};

const getSubtotal = (subharga) => {
   let subtotal = 0;

   for (const key in subharga) {
      subtotal += subharga[key];
   }

   return subtotal;
};

const setTotalHarga = (param) => {
   const totalHarga = formatHarga(param.harga) * param.quantity;

   param.element.innerText = formatRupiah(totalHarga);
   console.log(totalHarga);
};

const uncheckWhenAnotherChecked = (checkboxList, targetEvent) => {
   checkboxList.forEach((item) => {
      if (targetEvent.checked) {
         item != targetEvent ? (item.checked = false) : (item.checked = true);
      }
   });
};

const deactivateWhenAnotherActive = (param) => {
   param.nodeList.forEach((item) => {
      item != param.targetEvent ? item.classList.remove("active") : item.classList.add("active");
      if (currentPage == "payment-methods.html") {
         param.checkboxList && uncheckWhenAnotherChecked(param.checkboxList, param.checkedCheckbox);
      }
   });
};

const disabledBtn = (param) => {
   if (param.quantity && param.decreaseBtn) {
      if (Number(param.quantity.dataset.value) <= 1) {
         param.decreaseBtn.style.pointerEvents = "none";
      } else {
         param.decreaseBtn.style.pointerEvents = "auto";
      }
   }
};

/* if (cartData.length >= 1) {
            element("#btn-submit").classList.replace("invisible", "visible");
         } else {
            element("#btn-submit").classList.replace("visible", "invisible");
         } */
