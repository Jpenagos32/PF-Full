import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = {
        a: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        b: "https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        c: null,
        d: "https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        e: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
    };
    const image = Object.values(images).filter((value) => value !== null);

    const handleChangeImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === image.length - 1 ? 0 : prevImage + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(handleChangeImage, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={image[currentImage]}
                alt={`Image ${currentImage + 1}`}
            />

            <div className={styles.dotContainer}>
                {image.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${
                            currentImage === index ? styles.active : ""
                        }`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;

// import React, { useState } from "react";
// import styles from "./Gallery.module.css";

// const Gallery = () => {
//     const panels = [
//         {
//             backgroundImage:
//                 "url('https://images.pexels.com/photos/2507016/pexels-photo-2507016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//             title: "Baño",
//         },
//         {
//             backgroundImage:
//                 "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600')",
//             title: "Piscina",
//         },
//         {
//             backgroundImage:
//                 "url('https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//             title: "Habitacion",
//         },
//         {
//             backgroundImage:
//                 "url('https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//             title: "Jardin",
//         },
//         {
//             backgroundImage:
//                 "url('https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//             title: "Terraza",
//         },
//     ];

//     const [activePanel, setActivePanel] = useState(4);

//     const handlePanelClick = (panelIndex) => {
//         setActivePanel(panelIndex);
//     };

//     return (
//         <div className={styles.container}>
//             {panels.map((panel, index) => (
//                 <div
//                     key={index}
//                     className={`${styles.panel} ${
//                         activePanel === index ? styles.active : ""
//                     }`}
//                     style={{
//                         backgroundImage: panel.backgroundImage,
//                         height: activePanel === index ? "90vh" : "40px",
//                         backgroundSize:
//                             activePanel === index ? "70vw 100%" : "cover",
//                     }}
//                     onClick={() => handlePanelClick(index)}>
//                     <h3>{panel.title}</h3>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Gallery;
