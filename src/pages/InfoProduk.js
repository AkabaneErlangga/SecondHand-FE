import React from 'react'
import NavigationProduk from '../components/NavigationProduk';


const InfoProduk = () => {
  return (
    <div>
      <NavigationProduk/>
    <section className="py-6 flex justify-center ">
      <div className="sm:block hidden" to="/">
        <img src='/assets/fi_arrow-left.png' alt="img" />
      </div>
      <form className="sm:w-[568px] sm:mx-[78px] h-[568px] w-[328px] flex flex-col justify-between duration-[1s]">
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium text-xs">Nama Produk</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Nama Produk"
            />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium text-xs">Harga Produk</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-2xl h-[48px] px-4  text-xs"
              placeholder="Rp 0,00"
            />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium text-xs">Kategori</label>
          <select className="border-2 border-gray-300 rounded-2xl h-[48px] px-4 text-xs">
            <option value="none" hidden>
              Pilih Kategori
            </option>
              <option value="1">Kategori 1</option>
              <option value="1">Kategori 2</option>
              <option option value="1">Kategori 3</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium text-xs">Alamat</label>
            <textarea
              type="textarea"
              className="border-2 border-gray-300 rounded-2xl h-[80px] py-1 px-4 resize-none text-xs"
              placeholder="Contoh: Jalan Ikan Hiu 33"
            />
        </div>
        <div className="flex flex-col mb-3">
          <label className="mb-1 font-medium text-xs">Foto Produk</label>
          <div className="box">
            <div className="w-[96px] h-[96px] border-2 rounded-xl border-dashed flex items-center justify-center">
              <img src='/assets/IcnTambah.png' alt="plus" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div to={"#"}>
            <button
              type="submit"
              className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl border-2 border-purple-700 text-black font-medium text-xs duration-[1s]">
              Preview
            </button>
          </div>
          <div to={"#"}>
            <button
              type="submit"
              className="sm:w-[276px] w-[156px] h-[48px] rounded-2xl bg-purple-700 text-white font-medium text-xs duration-[1s]">
              Terbitkan
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
);
};


export default InfoProduk