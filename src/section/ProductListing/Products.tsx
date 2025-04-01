import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import FilteredProducts from "./FilteredProducts";
import Filters from "./Filters";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getSearchedProducts } from "../../store/Slices/productSlice";

interface ProductsProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}
const Products: React.FC<ProductsProps> = ({
    selectedCategory,
    setSelectedCategory,
}) => {
    const [selectedSort, setSelectedSort] = useState<string>(
        "Popularity: high to low"
    );
    const [searchText, setSearchText] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(5000);
    const [value, setValue] = useState<number[]>([minPrice, maxPrice]);

    const sortOptions = [
        "Popularity: high to low",
        "Popularity: low to high",
        "Price: High to Low",
        "Price: Low to High",
    ];

    const sortByMap = new Map([
        [sortOptions[0], "popularity_high_to_low"],
        [sortOptions[1], "popularity_low_to_high"],
        [sortOptions[2], "price_high_to_low"],
        [sortOptions[3], "price_low_to_high"],
    ]);

    return (
        <Box sx={{ py: "48px" }} maxWidth={"1100px"} mx={"auto"}>
            <Grid container>
                <Grid
                    item
                    sx={{
                        flexBasis: "30%",
                        flexGrow: 0,
                        maxWidth: "30%",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Filters
                        selectedSort={selectedSort}
                        sortBy={sortByMap}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                        value={value}
                        setValue={setValue}
                    />
                </Grid>
                <Grid
                    item
                    sx={{
                        flexBasis: { xs: "100%", md: "70%" },
                        flexGrow: 1,
                        maxWidth: { xs: "100%", md: "70%" },
                    }}
                >
                    <FilteredProducts
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                        sortOptions={sortOptions}
                        sortBy={sortByMap}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                        value={value}
                        setValue={setValue}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Products;
