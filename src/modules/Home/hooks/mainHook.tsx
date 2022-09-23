import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CoffeeList } from "../../../utils/CoffeeList";
import { ProductsProps } from "../@types/productsType";

interface MainHookProps {
  children: ReactNode;
}

interface MainHookPropsData {
  products: ProductsProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  chartOrder: ProductsProps[];
  setChartOrder: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
}

const MainHookContext = createContext<MainHookPropsData>(
  {} as MainHookPropsData
);

const MainHookProvider: React.FC<MainHookProps> = ({ children }) => {
  const [products, setProducts] = useState(CoffeeList as ProductsProps[]);
  const [chartOrder, setChartOrder] = useState([] as ProductsProps[]);

  useEffect(() => {
    const myLocalStorage = localStorage.getItem("carrinho");
    if (myLocalStorage) {
      setChartOrder(JSON.parse(myLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(chartOrder));
  }, [chartOrder]);

  return (
    <MainHookContext.Provider
      value={{ products, setProducts, chartOrder, setChartOrder }}
    >
      {children}
    </MainHookContext.Provider>
  );
};

// creating hook

function useMainHook(): MainHookPropsData {
  const context = useContext(MainHookContext);

  if (!context) {
    throw new Error("useMainHook must be used with an MainHookProvider");
  }

  return context;
}

export { MainHookProvider, useMainHook };
