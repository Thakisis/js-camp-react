import { locations, technologies } from "@/constants/data-select";
export function getLocName(loc) {

    const locationName = locations.find(location => loc === location.key);
    return locationName?.name || "Unknown Location";
}
export function getTechName(tec) {
    const techName = technologies.find(technology => technology.key === tec);

    console.log(tec);
    console.log(technologies);
    return techName?.name || "Unknown Technology";
}