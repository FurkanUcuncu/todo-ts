import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Checkbox,useTheme } from "react-native-paper";
import { TodoType } from "../../models/TodoTypes";

export const HEIGHT = 64;
const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    height: HEIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e2e3e4",
    borderRadius: 5,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  }
});

interface ItemLayoutProps {
  item: TodoType;
  handleEditTodo: () => void
}

const ItemLayout = ({ item: { id, text, completed }, handleEditTodo }: ItemLayoutProps) => {
  const {colors} = useTheme()
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={handleEditTodo}>
        <Checkbox.Item
          position="leading"
          color={colors.primary}
          labelStyle={{
            width: '100%',
            textAlign: 'left',
            textDecorationLine: completed ? 'line-through' : 'none'
          }}
          label={text}
          status={completed ? "checked" : "unchecked"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemLayout;
