import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import axios from "axios";

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    '/hotel'
                );
                const responseData = response.data;
                const imageUrls = getImgUrls(responseData[0]);
                const sliced = Array.isArray(imageUrls)
                    ? imageUrls.slice(0, 12)
                    : [];
                setImages(sliced);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchData();
    }, []);

    function getImgUrls(data) {
        const imageUrls = [];

        const traverse = (obj) => {
            for (const key in obj) {
                const value = obj[key];

                if (typeof value === "string" && value.includes("http")) {
                    imageUrls.push(value);
                } else if (typeof value === "object" && value !== null) {
                    traverse(value);
                }
            }
        };

        traverse(data);

        return imageUrls;
    }

    const handleChangeImage = () => {
        setCurrentImage((prevImage) => (prevImage === 11 ? 0 : prevImage + 1));
    };

    useEffect(() => {
        const interval = setInterval(handleChangeImage, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.container}>
            {images.length > 0 ? (
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src={images[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                    />
                </div>
            ) : (
                <div>No images found</div>
            )}

            <div className={styles.dotContainer}>
                {images.slice(0, 12).map((_, index) => (
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
