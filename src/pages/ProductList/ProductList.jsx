import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";
import { useTelegram } from "../../shared/hook/useTelegram";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => acc + item.price, 0);
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [parent] = useAutoAnimate();
  const { tg, queryId } = useTelegram();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const chatId = searchParams.get("chatId");

  const fetchItems = async () => {
    try {
      const response = await fetch("https://b4e88eb3a4ce1ad6.mokky.dev/items");
      const items = await response.json();
      setProducts(items);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const onSendData = useCallback(async () => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

    try {
      await tg.sendMessage(
        chatId,
        `Поздравляю с покупкой, вы приобрели товар на сумму ${
          data.totalPrice
        }, ${data.products.map((item) => item.title).join(", ")}`
      );
      tg.close();
    } catch (error) {
      console.error("Ошибка при отправке данных боту:", error);
    }
  }, [addedItems, queryId, tg, chatId]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={"list"} ref={parent}>
      {products.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          onAdd={onAdd}
          className={"item"}
        />
      ))}
    </div>
  );
};

export default ProductList;
