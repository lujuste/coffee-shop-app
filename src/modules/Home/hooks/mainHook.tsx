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

interface UserDetailsProps {
  postalCode: string;
  andress: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface MainHookPropsData {
  products: ProductsProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  chartOrder: ProductsProps[];
  setChartOrder: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  methodOfPayment: "credit" | "debit" | "cash" | "empty";
  setMethodOfPayment: React.Dispatch<
    React.SetStateAction<"credit" | "debit" | "cash" | "empty">
  >;
  detailsUser: UserDetailsProps;
  setDetailsUser: React.Dispatch<React.SetStateAction<UserDetailsProps>>;
  ButtonSubmitRef: React.RefObject<HTMLButtonElement>;
}

const MainHookContext = createContext<MainHookPropsData>(
  {} as MainHookPropsData
);

const MainHookProvider: React.FC<MainHookProps> = ({ children }) => {
  const [products, setProducts] = useState(CoffeeList as ProductsProps[]);
  const [chartOrder, setChartOrder] = useState([] as ProductsProps[]);
  const [detailsUser, setDetailsUser] = useState({} as UserDetailsProps);
  const [methodOfPayment, setMethodOfPayment] = useState<
    "credit" | "debit" | "cash" | "empty"
  >("empty");

  const ButtonSubmitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const myLocalStorage = localStorage.getItem("carrinho");
    if (myLocalStorage) {
      setChartOrder(JSON.parse(myLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(chartOrder));
  }, [chartOrder]);

  useEffect(() => {
    if (detailsUser.andress) {
      localStorage.setItem("perfil", JSON.stringify(detailsUser));
    }
  }, [detailsUser]);

  useEffect(() => {
    if (methodOfPayment !== "empty") {
      localStorage.setItem("pagamento", JSON.stringify(methodOfPayment));
    }
  }, [methodOfPayment]);

  return (
    <MainHookContext.Provider
      value={{
        products,
        setProducts,
        chartOrder,
        setChartOrder,
        methodOfPayment,
        setMethodOfPayment,
        detailsUser,
        setDetailsUser,
        ButtonSubmitRef,
      }}
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
