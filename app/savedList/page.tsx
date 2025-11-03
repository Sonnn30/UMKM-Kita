"use client";
import MapEmbed from "./map-embed"
import UmkmTable from "./umkm-table"
import "./page.css"
import { useEffect, useState } from "react";

export default function SavedList(){
    interface Umkm {
        id: number;
        photo: string;
        name: string;
        location: string;
        category: string;
        best_seller: string;
        operational_hours: string;
        rating: number;
        link_map: string;
    }

    const [umkmList, setUmkmList] = useState<Umkm[]>([]);
    const [selectedMap, setSelectedMap] = useState(
        // default binus
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63463.503352476786!2d106.7817067388932!3d-6.20169773649652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dcc7d2c4ad%3A0x209cb1eef39be168!2sUniversitas%20Bina%20Nusantara%20Kampus%20Anggrek!5e0!3m2!1sid!2sid!4v1762088187646!5m2!1sid!2sid"
    );


    useEffect(() => {
        fetch("http://localhost:5000/api/umkm")
        .then((res) => res.json())
        .then((data) => setUmkmList(data))
        .catch((err) => console.error("Error fetching UMKM data:", err));
    }, []);

    return (
        <div className="absolute w-[87%] flex-column m-5 ml-30">
            <MapEmbed mapSrc={selectedMap}/>
            <h3 className="my-2 font-semibold">Daftar UMKM</h3>

            <div className="flex justify-between mb-2">
                <div>
                    <input type="text" placeholder="Cari UMKM" className="border-1 rounded-full"/>
                </div>

                <div>
                    {/*idk, nanti baru ganti 👍👍*/}
                    <select name="kategori-umkm" id="kategori-umkm" className="border rounded-sm">
                        <option value="kuliner">Kuliner</option>
                        <option value="fashion">Fashion</option>
                        <option value="kerajinan">Kerajinan Tangan</option>
                        <option value="kecantikan">Kecantikan & Perawatan</option>
                        <option value="jasa">Jasa</option>
                        <option value="pertanian-peternakan">Pertanian & Peternakan</option>
                        <option value="perdagangan">Perdagangan/Retail</option>
                    </select>
                </div>
            </div>

            {/* table header */}
            <div className="grid grid-cols-8 items-center font-semibold text-black text-lg border-2 border-[#FF8E3C] rounded-md text-stroke-orange">
                {/* <div className="col-span-1 text-center">Photo</div> */}
                <div className="col-span-3">Nama UMKM</div>
                <div className="col-span-1">Kategori</div>
                <div className="col-span-1">Produk Unggulan</div>
                <div className="col-span-1">Jam Operasional</div>
                <div className="col-span-1">Rating</div>
                <div className="col-span-1">Aksi</div>
            </div>

            {/* map semua umkm yang di-save, klo di klik posisi map bakal berubah */}
            {umkmList.map((umkm) => (
                <div key={umkm.id} onClick={() => {setSelectedMap(umkm.link_map); window.scrollTo({top: 0, behavior: "smooth"})}}
                className="cursor-pointer">
                    <UmkmTable
                        key={umkm.id}
                        photo={umkm.photo}
                        name={umkm.name}
                        location={umkm.location}
                        category={umkm.category}
                        best_seller={umkm.best_seller}
                        operational_hours={umkm.operational_hours}
                        rating={umkm.rating}
                    />
                </div>

            ))}
        </div>
    )
}