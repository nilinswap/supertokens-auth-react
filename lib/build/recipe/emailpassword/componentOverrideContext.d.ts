/// <reference types="react" />
import { ComponentOverrideMap } from "./types";
declare const useContext: () => ComponentOverrideMap,
    Provider: import("react").FC<
        import("react").PropsWithChildren<{
            components: ComponentOverrideMap;
        }>
    >,
    Consumer: import("react").Consumer<ComponentOverrideMap>;
export {
    useContext as useRecipeComponentOverrideContext,
    Provider as RecipeComponentsOverrideContextProvider,
    Consumer as RecipeComponentsOverrideContextConsumer,
};