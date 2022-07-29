import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import Item from "./components/Item";

const defaultItems = [
    {
        key: "0",
        title: "Herb Tonic",
        price: 10.0,
        quantity: 1,
    },
    {
        key: "1",
        title: "Spicy Tuna",
        price: 12.8,
        quantity: 1,
    },
    {
        key: "2",
        title: "Tunacado",
        price: 10.2,
        quantity: 1,
    },
    {
        key: "3",
        title: "Power Shake",
        price: 10,
        quantity: 1,
    },
    {
        key: "4",
        title: "Power Shake",
        price: 10,
        quantity: 1,
    },
    {
        key: "5",
        title: "Power Shake",
        price: 10,
        quantity: 1,
    },
    {
        key: "6",
        title: "Power Shake",
        price: 10,
        quantity: 2,
    },
];

const UberEatsSwipe = () => {
    const [items, setItems] = useState(defaultItems);
    return (
        <SafeAreaView style={{ paddingRight: 16 }}>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <Item
                        onSwipe={() => {
                            const newItems = [...items];
                            newItems.splice(newItems.indexOf(item), 1);
                            setItems(newItems);
                        }}
                        {...{ item }}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default UberEatsSwipe;
