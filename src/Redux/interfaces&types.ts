export type Item = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
};

export type CartItem = {
  id?: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number
}

export type popupClick = MouseEvent & {
  path: Node[];
}

export interface ICartState {
  amount: number,
  totalPrice: number,
  items: CartItem[],
}

export interface ICatalogState {
  amount: number;
  items: Item[];
  isLoading: boolean;
  error: string;
  currentPage: number;
  activeCategory: number;
  searchValue:string;
  sortParam: IPopupParams;
}

export interface IReceivedCatalogData {
  items: Item[];
  amount: number;
}

export interface IReceivedCartData {
  items: CartItem[];
  amount: number;
}

export interface IPopupParams {
  param: string;
  value: string;
  order: string;
}