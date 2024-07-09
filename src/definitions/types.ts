export interface Bike {
    BikeID: number;
    Make: string;
    Model: string;
    Year: number;
    Displacement: number;
    Price: number;
    Terrain: string;
    Description: string;
}

export interface TableProps {
    filteredBikes: Bike[];
}

export interface SearchProps {
    onSearch: (query: string, filter: string) => void;  
}  