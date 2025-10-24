import { locations, technologies } from "@/constants/data-select";
export function getLocName(loc) {

    const locationName = locations.find(location => loc === location.key);
    return locationName?.name || "Unknown Location";
}
export function getTechName(tec) {
    const techName = technologies.find(technology => technology.key === tec);


    return techName?.name || "Unknown Technology";
}



export function calculatePageRange(currentPage, totalPages) {
    // Si hay 5 o menos páginas, mostrar todas
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Si hay exactamente 6 páginas, mostrar 5 + "..."
    if (totalPages === 6) {
        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5, '...', 6];
        } else {
            return [1, '...', 2, 3, 4, 5, 6];
        }
    }

    // Si hay más de 6 páginas, mostrar hasta 7 elementos con 2 "..."
    // Casos extremos: cerca del inicio
    if (currentPage <= 3) {
        return [1, 2, 3, 4, 5, '...', totalPages];
    }

    // Casos extremos: cerca del final
    if (currentPage >= totalPages - 2) {
        return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    // Caso medio: mostrar páginas alrededor de la actual
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}
