export interface Product {
    id: number;
    code?: string;
    name?: string;
    description?: string;
    class?: string;
    category?: string[];
    index: number;
    indexShow?: string;
    shifts: shift[];
}
export interface shift {
    id?: string;
    code?: string;
    shiftName?: string;
    ShiftWeight?: string;
    description?: string;
    progress?: number;
}