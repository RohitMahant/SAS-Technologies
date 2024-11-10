export function searchProducts(products, searchTerm) {
    if (!searchTerm) return products; // Return all products if no search term is provided.
  
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
    return products.filter((product) => {
      // Check if any of the product fields (e.g., category, product_name) match the search term.
      return (
        product.category?.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.product_name?.toLowerCase().includes(lowerCaseSearchTerm) ||
        (product.price && product.price.toString().includes(lowerCaseSearchTerm))
      );
    });
  }
  