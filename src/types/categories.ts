interface CategoriesType {
  id: number;
  banner: string;
  slug: string;
  title: string;
  subcategories: { id: number; banner: string; slug: string; title: string }[];
}

export default CategoriesType;
