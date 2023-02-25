import type { RecipeInterface as WebJSThirdPartyRecipeInterface } from "supertokens-web-js/recipe/thirdparty";
import type { RecipeInterface as WebJSThirdPartyEmailPasswordRecipeInterface } from "supertokens-web-js/recipe/thirdpartyemailpassword";
export default function getRecipeImplementation(
    originalImplementation: WebJSThirdPartyEmailPasswordRecipeInterface
): WebJSThirdPartyRecipeInterface;
