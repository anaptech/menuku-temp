let cartData = JSON.parse(localStorage.getItem("cart")) ?? [];
let tempPayment = JSON.parse(localStorage.getItem("temp-payment")) ?? {};

let orderedData = JSON.parse(localStorage.getItem("ordered")) ?? {},
   paymentData = JSON.parse(localStorage.getItem("payment")) ?? {},
   orderSummary = JSON.parse(localStorage.getItem("order-summary")) ?? {};

const getSelectedMenu = (menu_id) => {
   return cartData.filter((menu) => menu.id == menu_id)[0];
};

const getFilteredMenu = (menus) => {
   filteredMenu = [];

   orderedData.menu.forEach((item) => filteredMenu.push(menus.filter((menu) => menu.id == item.id)[0]));

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
   setItem({ value: getMenuHasQuantity() });
};

const decreaseQuantity = (event) => {
   setQuantityInput({
      element: $(event.target).next(),
      method: "decrement",
   });

   checkData = getSelectedMenu(id);

   checkData.quantity = number;

   setItem();
   setSelectedMenu($(event.target).siblings(".quantity")[0]);
};

const increaseQuantity = (event) => {
   setQuantityInput({
      element: $(event.target).prev(),
      method: "increment",
   });

   storeCart({
      menuID: id,
      quantity: number,
   });

   orderedData ? (orderedData = {}) : "";

   setItem({ key: "ordered", value: orderedData });
   setSelectedMenu($(event.target).siblings(".quantity")[0]);
};

const setQuantityInput = (properties) => {
   id = properties.element.data("id");
   number = Number(properties.element.data("value"));

   properties.method == "decrement" ? number-- : number++;

   properties.element.data("value", number);
   properties.element.text(number);
};

const storeCart = (data) => {
   checkData = getSelectedMenu(data.menuID);

   if (checkData) {
      checkData.quantity = data.quantity;
   } else {
      cartData.push({
         id: data.menuID,
         quantity: Number(data.quantity),
         addon: data.addon ?? [],
      });
   }

   setItem({ value: cartData });
};

let randomNumber = new Uint32Array(10);
randomNumber = window.crypto.getRandomValues(randomNumber);

const orderMenu = (data) => {
   orderedData = {
      order_id: randomNumber[0],
      city: "Bogor",
      voucher_id: "965d8784-d3ec-11ed-9b7e-8481f960f3a1",
      resto_id: "493f7de2-d3d1-11ed-9b7e-8481f960f3a1",
      table_number: 1,
      menu: data.menu ?? [],
   };

   cartData = [];

   setItem({ key: "ordered", value: orderedData });
   clearItem("cart");
};

const setSelectedMenu = (quantityElement) => {
   selectedMenu = getSelectedMenu($(quantityElement).data("id"));

   if (selectedMenu) {
      $(quantityElement).data("value", selectedMenu.quantity);
      $(quantityElement).text(selectedMenu.quantity);
   }

   wrapperElement = $(quantityElement).parents(".card-resto-menu-makanan")[0] ?? $(quantityElement).parents(".wrapper")[0];
   decreaseBtn = $(quantityElement).siblings()[0];

   elements = {
      quantity: quantityElement,
      wrapper: wrapperElement,
      decreaseBtn: decreaseBtn,
   };

   setSelectedMenuClass(elements);
   setMenuHasQuantity();
};

const setSelectedMenuClass = (elements) => {
   if (Number($(elements.quantity).data("value")) <= 0) {
      $(elements.wrapper).hasClass("wrapper") ? $(elements.wrapper).addClass("hidden") : $(elements.wrapper).removeClass("selected-menu");
      $(elements.decreaseBtn).addClass("!pointer-events-none");
      $(elements.decreaseBtn).addClass("invisible");
      $(elements.quantity).text("");
   } else {
      $(elements.wrapper).hasClass("card-resto-menu-makanan") && $(elements.wrapper).addClass("selected-menu");
      $(elements.decreaseBtn).removeClass("!pointer-events-none");
      $(elements.decreaseBtn).removeClass("invisible");
   }
};

const setItem = (properties = {}) => {
   let key = properties.key ?? "cart";
   let value = properties.value ?? cartData;

   typeof value == "object" ? (value = JSON.stringify(value)) : null;

   localStorage.setItem(key, value);
};

const clearItem = (key = {}) => {
   key = key ?? "cart";

   localStorage.removeItem(key, []);
};

const searchMenu = (param) => {
   const keyword = param.keyword.toLowerCase();
   return param.menu.filter((item) => item.namaMenu.toLowerCase().indexOf(keyword) >= 0);
};

const getSelectedPaymentMethod = (listMethod, selectedMethod) => {
   return listMethod.text == selectedMethod ? listMethod : "";
};
