import { Action, ActionPanel, Color, Icon } from "@raycast/api";
import {
  AddItemToList,
  DeleteAllItems,
  DeleteItem,
  RandomizeItems,
  ShuffleItem,
  SortItemsAlphebetically,
} from "./ListActions.js";

type ListItemsProps = {
  item: string;
  inputText: string;
  inputs: string[];
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ListItems({ item, inputText, inputs, setInputs, setIsLoading }: ListItemsProps) {
  return (
    <ActionPanel>
      <Action
        title="Add Item to List"
        onAction={() => AddItemToList(inputText, inputs, setInputs)}
        icon={{ source: Icon.Plus }}
      />
      <Action
        title="Randomize!"
        onAction={() => RandomizeItems(inputs, setInputs, setIsLoading)}
        icon={{ source: Icon.Repeat }}
      />
      <Action
        title="Shuffle"
        onAction={() => ShuffleItem(inputs, setInputs)}
        shortcut={{ modifiers: ["cmd"], key: "s" }}
        icon={{ source: Icon.Shuffle }}
      />
      <Action
        title="Sort Alphebetically"
        onAction={() => SortItemsAlphebetically(inputs, setInputs)}
        shortcut={{ modifiers: ["cmd"], key: "f" }}
        icon={{ source: Icon.Uppercase }}
      />
      <Action
        title="Delete Item"
        onAction={() => DeleteItem(item, inputs, setInputs)}
        shortcut={{ modifiers: ["cmd"], key: "backspace" }}
        icon={{ source: Icon.Trash, tintColor: Color.Red }}
      />
      <Action
        title="Delete All Items"
        onAction={() => DeleteAllItems(setInputs)}
        shortcut={{ modifiers: ["cmd"], key: "backspace" }}
        icon={{ source: Icon.Trash, tintColor: Color.Red }}
      />
    </ActionPanel>
  );
}
