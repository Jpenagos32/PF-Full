import React, { useState } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
    const panels = [
        {
            backgroundImage:
                "url('https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            title: "Baño",
        },
        {
            backgroundImage:
                "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600')",
            title: "Piscina",
        },
        {
            backgroundImage:
                "url('https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            title: "Habitacion",
        },
        {
            backgroundImage:
                "url('https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            title: "Jardin",
        },
        {
            backgroundImage:
                "url('https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            title: "Terraza",
        },
    ];

    const [activePanel, setActivePanel] = useState(4);

    const handlePanelClick = (panelIndex) => {
        setActivePanel(panelIndex);
    };

    return (
        <div className={styles.container}>
            {panels.map((panel, index) => (
                <div
                    key={index}
                    className={`${styles.panel} ${
                        activePanel === index ? styles.active : ""
                    }`}
                    style={{
                        backgroundImage: panel.backgroundImage,
                        height: activePanel === index ? "90vh" : "40px",
                        backgroundSize:
                            activePanel === index ? "70vw 100%" : "cover",
                    }}
                    onClick={() => handlePanelClick(index)}>
                    <h3>{panel.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
