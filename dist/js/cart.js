const getItem = (key) => {
   return JSON.parse(localStorage.getItem(key));
};

let cartData = getItem("cart") ?? [],
   tempPayment = getItem("temp-payment") ?? {},
   orderedData = getItem("ordered") ?? {},
   paymentData = getItem("payment") ?? {},
   orderSummary = getItem("order-summary") ?? {};

const getSelectedMenu = (menu_id) => {
   return cartData.filter((menu) => menu.id == menu_id)[0];
};

const getFilteredMenu = (listMenu, selectedMenu) => {
   filteredMenu = [];

   selectedMenu.forEach((item) => filteredMenu.push(listMenu.filter((menu) => menu.id == item.id)[0]));

   return filteredMenu;
};

const getSelectedAddOn = (addon_list, addon_id) => {
   return addon_list ? addon_list.filter((menu) => menu.addon_id == addon_id)[0] : null;
};

const getOrderedMenu = (menu_id) => {
   return orderedData.order_id ? orderedData.menu.filter((menu) => menu.id == menu_id)[0] : null;
};

const getMenuHasQuantity = () => {
   return cartData.filter((menu) => menu.quantity != 0);
};

const setMenuHasQuantity = () => {
   setItem("cart", getMenuHasQuantity());
};

const decreaseQuantity = (element) => {
   quantityElement = element.nextElementSibling;

   setQuantityInput(quantityElement, "decrement");

   checkData = getSelectedMenu(id);

   checkData.quantity = number;

   setItem("cart", cartData);
   setSelectedMenu(quantityElement);
};

const increaseQuantity = (element) => {
   quantityElement = element.previousElementSibling;

   setQuantityInput(quantityElement, "increment");

   storeCart({ menu_id: id, quantity: number });

   orderedData ? (orderedData = {}) : "";

   setItem("ordered", orderedData);
   setSelectedMenu(quantityElement);
};

const setQuantityInput = (element, method) => {
   id = element.dataset.id;
   number = Number(element.dataset.value);

   method == "decrement" ? number-- : number++;

   element.dataset.value = number;
   element.innerText = number;

   !number ? element.nextElementSibling.classList.add("off") : element.nextElementSibling.classList.remove("off");
};

const setBtnStyle = (quantity, element) => {
   if (!quantity) {
      element.style = `
         background-color: crimson;color: white;
         border-radius: 50%;
         width: max-content;
         display: flex;
         justify-items: center;
         align-items: center;
         padding: 1px 4px;
      `;
   } else {
      element.style = "";
   }
};

const storeCart = (data) => {
   checkData = getSelectedMenu(data.menu_id);

   if (checkData) {
      checkData.quantity = data.quantity;
   } else {
      cartData.push({
         id: data.menu_id,
         quantity: Number(data.quantity),
         addon: data.addon ?? [],
      });
   }

   setItem("cart", cartData);
};

let randomNumber = new Uint32Array(10);
randomNumber = window.crypto.getRandomValues(randomNumber);

const orderMenu = (data) => {
   orderedData = {
      order_id: randomNumber[0],
      city: data.city ?? "Bogor",
      voucher_id: data.voucher_id ?? "965d8784-d3ec-11ed-9b7e-8481f960f3a1",
      resto_id: data.resto_id ?? "493f7de2-d3d1-11ed-9b7e-8481f960f3a1",
      table_number: data.table_number ?? 1,
      menu: data.menu ?? [],
   };

   setItem("ordered", orderedData);
   clearItem("cart", []);
};

const setSelectedMenu = (quantityElement) => {
   selectedMenu = getSelectedMenu(quantityElement.dataset.id);

   if (selectedMenu) {
      quantityElement.dataset.value = selectedMenu.quantity;
      quantityElement.innerHTML = selectedMenu.quantity;
   }

   /* <div> THIS IS WRAPPER ELEMENT'S POSITION
         <a>
            <img/>
         </a>
         <div>
            <a>
               <h3>...</h3>
               <h2>...</h2>
            </a>
            <a>...</a>
            <div>
               <span class="decreaseBtn" role="button"></span> THIS IS DECREASE BUTTON ELEMENT'S POSITION
               <span class="quantity"></span> THIS IS QUANTITY ELEMENT'S POSITION
               <span class="increaseBtn" role="button"></span> THIS IS INCREASE BUTTON ELEMENT'S POSITION
            </div>
         </div>
      </div> */

   wrapperElement = quantityElement.parentElement.parentElement.parentElement;
   decreaseBtn = quantityElement.previousElementSibling;

   elements = {
      quantity: quantityElement,
      wrapper: wrapperElement,
      decreaseBtn: decreaseBtn,
   };

   setSelectedMenuClass(elements);
   setMenuHasQuantity();
};

const setSelectedMenuClass = (elements) => {
   if (!Number(elements.quantity.dataset.value)) {
      elements.wrapper.classList.remove("selected-menu");
      elements.decreaseBtn.classList.add("!pointer-events-none");
      elements.decreaseBtn.classList.add("invisible");
      elements.quantity.innerHTML = "";
   } else {
      elements.wrapper.classList.add("selected-menu");
      elements.decreaseBtn.classList.remove("!pointer-events-none");
      elements.decreaseBtn.classList.remove("invisible");
   }
};

const setItem = (key, value) => {
   typeof value == "object" ? (value = JSON.stringify(value)) : null;

   localStorage.setItem(key, value);
};

const clearItem = (key, value) => {
   localStorage.removeItem(key, value);
};

const searchMenu = (param) => {
   const keyword = param.keyword.toLowerCase();
   return param.menu.filter((item) => item.namaMenu.toLowerCase().indexOf(keyword) >= 0);
};

const getSelectedPaymentMethod = (listMethod, selectedMethod) => {
   return listMethod.text == selectedMethod ? listMethod : "";
};
