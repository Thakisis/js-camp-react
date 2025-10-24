import { locations, technologies } from "@/constants/data-select";
export function getLocName(loc) {
    console.log(loc);
    const locationName = locations.find(location => loc === location.key);
    return locationName?.name || "Unknown Location";
}
export function getTechName(tec) {
    const techName = technologies.find(technology => tec === technology.key);
    return techName?.name || "Unknown Technology";
}