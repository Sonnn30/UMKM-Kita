// MapEmbed.tsx
import React from "react";

export default function MapEmbed() {
    return (
        <div className="static w-100vh h-[400px]"
        style={{
            // position: "static",
            // width: "100%",
            // height: "400px",
            // borderRadius: "12px",
            // overflow: "hidden",
            // marginLeft: "10%",
            // marginRight: "10px",
            // marginTop: "20px"
        }}
        >
        <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0375657870155!2d110.393!3d-7.841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57f9!2sYogyakarta!5e0!3m2!1sen!2sid!4v1730445534412!5m2!1sen!2sid"
            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63463.503352476786!2d106.7817067388932!3d-6.20169773649652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dcc7d2c4ad%3A0x209cb1eef39be168!2sUniversitas%20Bina%20Nusantara%20Kampus%20Anggrek!5e0!3m2!1sid!2sid!4v1762088187646!5m2!1sid!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    );
}
