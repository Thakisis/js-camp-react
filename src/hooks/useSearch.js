import { useState } from "react";
import { getOffers } from "@/services/getOffers";
export function useSearch() {
    const [offers, setOffers] = useState([]);
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(1);
    const changeFilter = (field, value) => {
        setFilters((prev) => {
            const newFilters = { ...prev, [field]: value };
            if (!value) delete newFilters[field];
            return newFilters;
        });
    }
    const pageChange = (page) => {
        setPage(page);
        setOffers([]);
    }
    const searchPromise = getOffers({ url: "/api/ofertas.json", ...filters, page });
    return { offers, filters, page, changeFilter, pageChange, searchPromise }



}