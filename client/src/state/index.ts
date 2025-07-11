import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { boolean } from "zod";

export interface FiltersState{
  location: string;
  beds: string;
  baths: string;
  propertyType: string;
  amenities: string[];
  availableFrom: string;
  priceRange: [number, number] | [null, null];
  squareFeet: [number, number] | [null, null];
  coordinates: [number, number];
}

interface InitialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  viewMode: "grid" | "list";
}
export const initialState: InitialStateTypes = {
  filters: {
    location: "Los Angeles",
    beds: "any",
    baths: "any",
    propertyType: "any",
    amenities: [],
    availableFrom: "any",
    priceRange: [null, null],
    squareFeet: [null, null],
    coordinates: [-118.25, 34.05],
  },
  isFiltersFullOpen: false,
  viewMode: "grid",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      console.log("🚩 setFilters payload →", action.payload);    
      console.log("🚩 setFilters before →", state.filters);   
      state.filters = {...state.filters, ...action.payload};
      console.log("🚩 setFilters after  →", state.filters); 
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    },
  },
});



export const {
  setFilters,
  toggleFiltersFullOpen,
  setViewMode,
} = globalSlice.actions;

export default globalSlice.reducer;
