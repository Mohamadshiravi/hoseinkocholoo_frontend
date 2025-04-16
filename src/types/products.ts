type Discount = {
  id: number;
  name: string;
  label: string;
  discount_type: "percentage" | "fixed";
  value: string;
  max_discount_amount: string;
  start_date: string;
  end_date: string;
  created_at: string;
  is_active: boolean;
};

type ProductImage = {
  product: number;
  image: string;
  is_main: boolean;
};

type ProductVariants = {
  id: number;
  color: {
    id: number;
    name: string;
    hex_code: string;
  };
  product: number;
  stock: number;
  size: {
    id: number;
    title: string;
  };
};

type ProductType = {
  id: number;
  title: string;
  brand: string;
  category: string;
  code: string;
  created_at: string;
  price: string;
  final_price: number;
  discount: Discount;
  variants: ProductVariants[];
  images: ProductImage[];
  is_active: boolean;
};

export default ProductType;
