const setGridCategory = (param) => {
   return ` 
       <div class="swiper-slide !w-max">
          <button class="category bg-white w-max flex item-center justify-center px-4 py-2 xl:px-6 xl:py-3 rounded-10px shadow-category" type="button">
            <span class="font-bold text-danger text-[10px] sm:text-xs md:text-sm lg:text-base pointer-events-none">${param.text}</span>
          </button>
       </div>
    `;
};

const setCarouselRecommendation = (param) => {
   return `
       <a class="swiper-slide !w-[115px] md:!w-[150px] !h-[140px] md:!h-[175px] lg:!w-[200px] lg:!h-[225px] relative rounded-10px overflow-hidden" href="detail-menu.html?code=${param.restoMenuCode}&previousPage=${currentPage}">
          <img class="w-full h-full object-cover" src="${param.gambar}" alt="${param.namaMenu}" />
          <div class="w-full !h-max flex flex-col absolute bottom-0 p-2 md:p-3 bg-[rgba(70,70,70,0.3)] backdrop-blur-10px">
             <h5 class="font-bold text-white text-[8px] md:text-xs lg:text-sm xl:text-base md:mb-0.5">${param.namaMenu}</h5>
             <span class="text-[8px] md:text-xs lg:text-sm xl:text-base text-danger">${param.status}</span>
          </div>
       </a>
    `;
};

const setGridFood = (param) => {
   console.log(param);
   return `
      <div class="w-full flex items-center p-3 rounded-10px card-resto-menu-makanan">
         <a class="min-w-[90px] sm:min-w-[120px] lg:min-w-[100px] max-w-[90px] lg:max-w-[100px] sm:max-w-[120px] aspect-square rounded-[5px] overflow-hidden" href="detail-menu.html?id=${param.menu.id}">
            <img class="w-full h-full object-cover" src="${param.menu.image}" alt="${param.menu.name}"/>
         </a>
         <div class="w-full pl-3">
            <a class="flex justify-between items-center" href="detail-menu.html?id=${param.menu.id}">
               <h3 class="font-semibold text-lg lg:text-base xl:text-lg">${param.menu.name}</h3>
               <h2 class="font-semibold text-sm md:text-base lg:text-sm xl:text-base">${formatRupiah(param.menu.price)}</h2>
            </a>
            <a class="block text-xs md:text-base lg:text-sm xl:text-base mt-1 mb-3" href="detail-menu.html?id=${param.menu.id}">Olahan telur dan kelapa yang dibakar secara tradisional</a>
            <div class="flex items-center float-right">
               <span class="decreaseBtn ri-subtract-line text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-8a invisible" role="button"></span>
               <span class="quantity text-sm sm:text-sm lg:text-base xl:text-lg lg:h-6 xl:h-[30px] font-medium mx-1" data-id=${param.menu.id} data-value=0></span>
               <span class="increaseBtn ri-add-line text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-8a" role="button"></span>
            </div>
         </div>
      </div>
   `;
};

const setGridDrink = (param) => {
   return `
       <div class="w-full flex items-center p-3 rounded-10px card-resto-menu-makanan">
          <div class="min-w-[90px] sm:min-w-[120px] lg:min-w-[100px] max-w-[90px] lg:max-w-[100px] sm:max-w-[120px] aspect-square rounded-[5px] overflow-hidden">
             <img class="w-full h-full object-cover" src="${param.menu.image}" alt="${param.menu.name}"/>
          </div>
          <div class="w-full pl-3">
             <div class="flex justify-between items-center">
                <h3 class="font-semibold text-lg lg:text-base xl:text-lg">${param.menu.name}</h3>
                <h2 class="font-semibold text-sm md:text-base lg:text-sm xl:text-base">${formatRupiah(param.menu.harga)}</h2>
             </div>
             <p class="text-xs md:text-base lg:text-sm xl:text-base mt-1 mb-3">Olahan telur dan kelapa yang dibakar secara tradisional</p>
             <div class="flex items-center float-right">
                <span class="decreaseBtn ri-subtract-line text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-8a invisible" role="button"></span>
                <span class="quantity text-sm sm:text-sm lg:text-base xl:text-lg lg:h-6 xl:h-[30px] font-medium mx-1" data-id=${param.menu.restoMenuCode} data-value=${param.cart ? param.cart.quantity : 0}>${param.cart ? param.cart.quantity : ""}</span>
                <span class="increaseBtn ri-add-line text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-8a" role="button"></span>
             </div>
          </div>
       </div>
    `;
};

const setMenuDetail = (param) => {
   return `
      <div class="w-full py-10 flex items-center justify-center bg-[#FFFBF7] rounded-b-[50px] shadow-[0px_10px_50px_rgba(0,0,0,0.15)]">
         <img class="w-full max-w-xs aspect-square rounded-full" src="${param.menu.image}" alt="${param.menu.name}" />
      </div>
      <div class="px-6 -translate-y-6 relative z-50">
         <div class="bg-[rgba(245,245,245,0.3)] shadow-[0px_4px_50px_rgba(0,0,0,0.08] backdrop-blur-10px rounded-20px">
            <form class="flex flex-col flex-wrap items-center pt-8 pb-4 px-4">
               <h4 class="font-manrope font-extrabold text-[28px] lg:text-3xl xl:text-4xl leading-9">${param.menu.name}</h4>
               <div class="flex gap-1 my-2 lg:text-lg">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
               </div>
               <p class="text-center text-xs sm:text-sm lg:text-base text-[#7E7E7E]">${param.menu.description}</p>
               <div class="w-full flex justify-between items-center py-7">
                  <div class="flex flex-col">
                     <h6 class="font-bold text-[10px] sm:text-xs lg:text-sm xl:text-base">Total Harga</h6>
                     <h5 class="font-bold text-xl lg:text-2xl xl:text-3xl harga">${formatRupiah(param.menu.price)}</h5>
                  </div>
                  <div class="flex items-center justify-evenly w-[75px] h-[33px] bg-danger rounded-10px">
                     <span class="decreaseBtn ri-subtract-line text-xs sm:text-sm lg:text-base text-white h-[14px] sm:h-[19px] lg:h-[22px]" role="button"></span>
                     <span class="quantity text-sm sm:text-base lg:text-lg text-white" data-id=${param.menu.id} data-value=0></span>
                     <span class="increaseBtn ri-add-line text-xs sm:text-sm lg:text-base text-white h-[14px] sm:h-[19px] lg:h-[22px]" role="button"></span>
                  </div>
               </div>
               <button class="font-bold text-sm lg:text-base text-white px-6 py-3 bg-danger rounded-10px btnSubmit" type="button">Tambahkan ke keranjang</button>
            </form>
         </div>
      </div>
   `;
};

const setGridRecommendation = (param) => {
   return `
      <a class="w-full relative aspect-square rounded-10px overflow-hidden" href="detail-menu.html?id=${param.id}">
         <img class="w-full h-full object-cover object-center" src="${param.image}" alt="${param.name}" />
         <div class="w-full !h-max flex flex-col absolute bottom-0 p-2 md:px-4 md:py-2 md:p-3 bg-[rgba(70,70,70,0.3)] backdrop-blur-10px">
            <div class="flex justify-between items-center mb-[2px]">
               <h5 class="font-bold text-white text-xs sm:text-sm md:text-base xl:text-xl h-[15px] sm:h-[21px] md:h-[27px] lg:h-[26px xl:h-[33px]">${param.name}</h5>
               <h6 class="font-bold text-white text-[10px] sm:text-xs lg:text-base xl:text-lg h-[12px] sm:h-[14px] md:h-[16px] lg:h-[26px] xl:h-[30px]">${formatRupiah(param.price)}</h6>
            </div>
            <span class="font-light text-white text-[10px] sm:text-xs md:text-sm lg:text-base mb-[2px]">${param.description}</span>
         </div>
      </a>
   `;
};

const setGridMenu = (param) => {
   return `
      <div class="w-full flex items-center rounded-10px">
         <div class="min-w-[90px] lg:min-w-[100px] max-w-[90px] lg:max-w-[100px] aspect-square rounded-[5px] overflow-hidden">
            <img class="w-full h-full object-cover" src="${param.menu.image}" alt="${param.menu.name}"/>
         </div>
         <div class="w-full pl-3">
            <div class="flex justify-between items-center">
               <h3 class="font-semibold text-lg lg:text-xl">${param.menu.name}</h3>
               <h2 class="font-semibold text-sm lg:text-base harga">${formatRupiah(param.menu.price)}</h2>
            </div>
            <p class="text-8a text-[10px] lg:text-sm leading-[13px] mb-3" id="note-${param.menu.id}">Note: ${param.cart.note ?? ""}</p>
            <div class="flex items-center justify-between">
               <a class="font-bold text-[#FF7B29] text-[10px] lg:text-sm leading-[13px] showAddOnBtn" data-id=${param.menu.id} role="button">Edit</a>
               <div class="flex items-center justify-end">
                  <span class="decreaseBtn ri-subtract-line text-xs sm:text-base font-medium text-8a" role="button"></span>
                  <span class="quantity text-sm sm:text-base font-medium mx-1" data-id=${param.menu.id} data-value=${param.cart ? param.cart.quantity : 0}>
                     ${param.cart ? param.cart.quantity : 0}
                  </span>
                  <span class="increaseBtn ri-add-line text-xs sm:text-base font-medium text-8a" role="button"></span>
               </div>
            </div>
         </div>
      </div>
   `;
};

const setListAddOn = (param) => {
   return `
      <div class="mb-6">
         <h5 class="font-bold text-sm sm:text-base xl:text-lg mb-1 pl-6">${param.name}</h5>
         <div class="flex justify-between items-center pt-2 pb-1 border-b border-bd">
            <div class="flex flex-col pl-6">
               <h6 class="font-medium text-xs sm:text-sm lg:text-base"></h6>
               <h6 class="font-medium text-xs sm:text-sm lg:text-base">${formatRupiah(param.price)}</h6>
            </div>
            <input class="accent-danger mr-6 addOnId" type="checkbox" value="${param.id}" />
         </div>
      </div>
   `;
};

const setOrderedMenu = (param) => {
   return `
      <div class="flex items-center justify-between mb-2">
         <div class="flex flex-col">
            <h5 class="font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">${param.menu.name}</h5>
            <p class="text-[10px] sm:text-xs lg:text-sm xl:text-base text-8a">${param.cart.quantity}</p>
            <p class="text-[10px] sm:text-xs lg:text-sm xl:text-base text-8a">Note: ${param.cart.note ?? ""}</p>
         </div>
         <div class="flex flex-col items-end">
            <p class="text-[10px] sm:text-xs lg:text-sm xl:text-base harga">${formatRupiah(param.menu.price * param.cart.quantity)}</p>
            <p class="text-[10px] sm:text-xs lg:text-sm xl:text-base flex gap-x-1">
               ${param.cart.orderStatus == "Preparing" ? `<i class="ri-time-line text-danger"></i><span class="text-danger">Preparing</span>` : `<i class="ri-check-line text-[#629D5D]"></i><span class="text-[#629D5D]">Done</span>`}
            </p>
         </div>
      </div>
   `;
};

const setClientDetail = (param) => {
   return `
      <div class="flex items-center justify-between">
         <p>No. Pesanan</p>
         <p>${param.order_id}</p>
      </div>
      <div class="flex items-center justify-between">
         <p>No. Meja</p>
         <p>${param.table_number}</p>
      </div>
   `;
};

const setPaymentDetail = (param) => {
   return `
      <div class="flex items-center justify-between subtotal" data-value=${param.subtotal}>
         <p>Subtotal</p>
         <p>${formatRupiah(param.subtotal)}</p>
      </div>
      <div class="flex items-center justify-between sc" data-value=${param.sc}>
         <p>SC</p>
         <p>${formatRupiah(param.sc)}</p>
      </div>
      <div class="flex items-center justify-between tax" data-value=${param.tax}>
         <p>Tax</p>
         <p>${formatRupiah(param.tax)}</p>
      </div>
      <div class="flex items-center justify-between total">
         <p>Total</p>
         <p></p>
      </div>
   `;
};

const setPaymentMethods = (param) => {
   return `
      <div class="w-full p-3 flex items-center gap-x-4 relative cursor-pointer bg-white shadow-[2px_2px_4px_rgba(203,26,18,0.1)] rounded-20px metode-pembayaran" data-value="${param.text}">
         <img class="w-9 pointer-events-none" src="dist/img/icon/${param.img}" alt="" />
         <div class="block pointer-events-none">
            <span class="font-bold">${param.text}</span>
            <p class="text-xs">Lorem ipsum dolor, sit amet consectetur.</p>
         </div>
         <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <label class="checkbox">
               <input class="input-metode-pembayaran" type="checkbox">
               <span></span>
            </label>
         </div>
      </div>
   `;
};

const setBillMenu = (param) => {
   return `
      <div class="flex justify-between items-center mb-2">
         <div class="flex flex-col">
            <h5 class="text-xs font-semibold">${param.menu.name}</h5>
            <p class="text-[10px] text-8a">Note: ${param.cart.note ?? ""}</p>
         </div>
         <div class="flex flex-col items-end">
            <h6 class="text-[10px] harga">${formatRupiah(`Rp${formatHarga(`Rp${param.menu.price}`) * param.cart.quantity}`)}</h6>
            <p class="text-[10px] text-8a quantity" data-value=${param.cart.quantity}>${param.cart.quantity}x</p>
         </div>
      </div>
   `;
};

const setOrderTabel = (param) => {
   return `
   <table class="w-full h-full text-sm">
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">No. Pesanan</td>
         <td class="py-3 text-xs" id="no-pesanan"></td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">Tanggal</td>
         <td class="py-3 text-xs" id="tanggal">2022-12-28</td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">Metode Pembelian</td>
         <td class="py-3" id="metode-pembelian">Dine In</td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">Metode Pembayaran</td>
         <td class="py-3" id="metode-pembayaran">QRIS</td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">No. Meja</td>
         <td class="py-3 text-xs" id="no-meja">5</td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">Nama</td>
         <td class="py-3">
            <textarea class="w-full cursor-default focus-visible:outline-none" id="nama" rows="1" readonly>James Hetfield</textarea>
         </td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">Email</td>
         <td class="py-3">
            <textarea class="w-full cursor-default focus-visible:outline-none" id="email" rows="1" readonly>jameshetfield@mail.com</textarea>
         </td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max">No. Telepon</td>
         <td class="py-3 text-xs" id="no-telepon">1234567890</td>
      </tr>
      <tr class="text-left border-b border-slate-300">
         <td class="py-3 font-medium w-max" colspan="2">
            <h6 class="font-medium pb-3">Pesanan</h6>
            <div class="grid grid-cols-1 gap-2" id="tabel-pesanan">
               <div class="w-full bg-f6 p-3 flex rounded-5px">
                  <div class="w-[70px] aspect-[4/5] rounded-[5px] overflow-hidden">
                     <img class="w-full h-full object-cover" src="https://bit.ly/3OMYyip" alt="" />
                  </div>
                  <div class="w-full pl-3">
                     <div class="flex justify-between items-center mb-1">
                        <h3 class="font-medium">Ayam Bakar</h3>
                        <h2 class="text-xs">Rp125.000</h2>
                     </div>
                     <p class="text-8a text-[10px] leading-[13px] mb-[2px]">
                        <span>Tambahan Menu: </span>
                        <span class="font-light">Telur 5</span>
                     </p>
                     <p class="text-8a text-[10px] leading-[13px]">
                        <span>Catatan: </span>
                        <span class="font-light">Jangan pakai lalapan</span>
                     </p>
                  </div>
               </div>
            </div>
         </td>
      </tr>
   </table>
   `;
};
