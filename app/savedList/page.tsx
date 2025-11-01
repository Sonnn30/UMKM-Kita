import MapEmbed from "./map-embed"
import UmkmTable from "./umkm-table"
import "./page.css"

export default function SavedList(){
    return (
        <div className="absolute w-[87%] flex-column m-5 ml-30">
            <MapEmbed/>
            <h3 className="my-2 font-semibold">Daftar UMKM</h3>

            <div className="flex justify-between mb-2">
                <div>
                    <input type="text" placeholder="Cari UMKM" className="border-1 rounded-full"/>
                </div>

                <div>
                    {/*idk, nanti baru ganti 👍👍*/}
                    <select name="kategori-umkm" id="kategori-umkm" className="border rounded-sm">  
                        <option value="kuliner">Kuliner</option>
                        <option value="minimarket">Minimarket</option>
                        <option value="konveksi">Konveksi</option>
                        <option value="agrobisnis">Agrobisnis</option>
                        <option value="kerajinan-tangan">Kerajinan Tangan</option>
                        <option value="travel">Travel</option>
                    </select>
                </div>
            </div>

            {/* table header */}
            <div className="grid grid-cols-8 items-center font-semibold text-black text-lg border-2 mb-3 border-[#FF8E3C] rounded-md text-stroke-orange">
                {/* <div className="col-span-1 text-center">Photo</div> */}
                <div className="col-span-3">Nama UMKM</div>
                <div className="col-span-1">Kategori</div>
                <div className="col-span-1">Produk Unggulan</div>
                <div className="col-span-1">Jam Operasional</div>
                <div className="col-span-1">Rating</div>
                <div className="col-span-1">Aksi</div>
            </div>

            <UmkmTable
            photo="https://placehold.co/400x300/cccccc/969696.png?font=lato"
            name="Kopi Nusantara"
            location="Bandung"
            category="Kuliner"
            best_seller="Kopi Susu Gula Aren"
            operational_hours="08:00 - 22:00"
            rating={4.9}
            />
            <UmkmTable
            photo="https://placehold.co/400x300/cccccc/969696.png?font=lato"
            name="Kopi Nusantara"
            location="Bandung"
            category="Kuliner"
            best_seller="Kopi Susu Gula Aren"
            operational_hours="08:00 - 22:00"
            rating={4.9}
            />
            <UmkmTable
            photo="https://placehold.co/400x300/cccccc/969696.png?font=lato"
            name="Kopi Nusantara"
            location="Bandung"
            category="Kuliner"
            best_seller="Kopi Susu Gula Aren"
            operational_hours="08:00 - 22:00"
            rating={4.9}
            />
        </div>
    )
}