interface CategoriesType {
  id: number;
  banner: string;
  slug: string;
  title: string;
  subcategories: CategoriesType;
}

export default CategoriesType;
