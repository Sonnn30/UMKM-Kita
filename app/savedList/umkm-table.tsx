import React from "react";

interface UmkmProps {
    photo: string;
    name: string;
    location: string;
    category: string;
    best_seller: string;
    operational_hours: string;
    rating: number;
}

export default function UmkmTable({
    photo,
    name,
    location,
    category,
    best_seller,
    operational_hours,
    rating,
}: UmkmProps) {
    return (
        <div className="grid grid-cols-8 items-center gap-4 py-3 text-stroke-orange border border-[#FF8E3C] rounded-md hover:bg-gray-50 transition">
            {/* Photo */}
            <div className="col-span-1 flex justify-center">
                <img
                src={photo}
                alt={name}
                className="w-16 h-16 rounded-lg object-cover"
                />
            </div>

            {/* Name + Location */}
            <div className="col-span-2">
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">{location}</p>
            </div>

            {/* Category */}
            <div className="col-span-1 text-gray-700">{category}</div>

            {/* Best Seller */}
            <div className="col-span-1 text-gray-700">{best_seller}</div>

            {/* Operational Hours */}
            <div className="col-span-1 text-gray-600">⌚{operational_hours}</div>

            {/* Rating */}
            <div className="col-span-1 font-medium text-yellow-600">⭐ {rating}/5</div>

            {/* Links & Icons */}
            <div className="col-span-1 flex gap-3 justify-center text-stroke-default">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                Link
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                direction
                </a>
            </div>
        </div>
    );
}
