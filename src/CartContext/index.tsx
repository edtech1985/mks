import { ReactNode, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export interface CardProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: CardProductProps[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: CardProductProps) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CardProductProps[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    setCartItems(storedCartItems);
  }, []);

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    const updatedItems = cartItems.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  function addToCart(product: CardProductProps) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    toast.success("Item adicionado ao carrinho", {
      style: {
        whiteSpace: "nowrap",
      },
    });
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, newItem])
      );
    }
  }

  function removeFromCart(itemId: number) {
    const updatedItems = cartItems.filter((product) => product.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  }

  const cartCount = cartItems.reduce(
    (count, product) => count + product.quantity,
    0
  );

  const cartTotal = cartItems.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
      }}
    >
      {children} :
    </CartContext.Provider>
  );
};
