// MapEmbed.tsx
import React from "react";

export default function MapEmbed({ mapSrc }: { mapSrc: string }) {
    return (
        <div className="static w-100vh h-[400px]">
            <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
