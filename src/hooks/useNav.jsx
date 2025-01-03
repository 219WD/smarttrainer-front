import { useEffect } from "react";
import { gsap } from "gsap";

const useGsap = () => {
    useEffect(() => {
        const dockContainer = document.querySelector(".dock");
        const dockItems = dockContainer.querySelectorAll(".dock-item");

        const defaultItemScale = 1;
        const hoverItemScale = 2;
        const neighborItemScale = 1.2;

        const defaultMargin = 10; // px
        const expandedMargin = 20; // px

        // Actualizar estilos con GSAP
        const updateDockItems = () => {
            dockItems.forEach((item, index) => {
                const scale = item.isHovered
                    ? hoverItemScale
                    : item.isNeighbor
                    ? neighborItemScale
                    : defaultItemScale;

                const margin = item.isHovered || item.isNeighbor ? expandedMargin : defaultMargin;

                gsap.to(item, {
                    scale: scale,
                    margin: `0 ${margin}px`,
                    duration: 0.2,
                    overwrite: true,
                });
            });
        };

        dockItems.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                dockItems.forEach((otherItem) => {
                    otherItem.isHovered = otherItem === item;
                    otherItem.isNeighbor =
                        Math.abs(
                            Array.from(dockItems).indexOf(otherItem) -
                            Array.from(dockItems).indexOf(item)
                        ) === 1;
                });
                updateDockItems();
            });

            item.addEventListener("mouseleave", () => {
                dockItems.forEach((otherItem) => {
                    otherItem.isHovered = false;
                    otherItem.isNeighbor = false;
                });
                updateDockItems();
            });
        });

        dockContainer.addEventListener("mouseleave", () => {
            dockItems.forEach((item) => {
                item.isHovered = false;
                item.isNeighbor = false;
            });
            updateDockItems();
        });

        return () => {
            dockItems.forEach((item) => {
                item.removeEventListener("mouseenter", updateDockItems);
                item.removeEventListener("mouseleave", updateDockItems);
            });
            dockContainer.removeEventListener("mouseleave", updateDockItems);
        };
    }, []);
};

export default useGsap;
