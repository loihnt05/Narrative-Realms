import { AssetsManifest } from "@drincs/pixi-vn";
import { MAIN_MENU_ROUTE } from "../constans";
import startLabel, { secondPart } from "../labels/startLabel";
import { mainAssets } from "./characters/main";
import { fm01Assets } from "./characters/fm01";
import { fm02Assets } from "./characters/fm02";
import { m01Assets } from "./characters/m01";
import { pack1Assets } from "./backgrounds/pack1";
import { pack2Assets } from "./backgrounds/pack2";
import { pack3Assets } from "./backgrounds/pack3";

/**
 * Manifest for the assets used in the game.
 * You can read more about the manifest here: https://pixijs.com/8.x/guides/components/assets#loading-multiple-assets
 */
const manifest: AssetsManifest = {
    bundles: [
        // screens
        {
            name: MAIN_MENU_ROUTE,
            assets: [
                {
                    alias: "background_main_menu",
                    src: "/asset/background/Noraneko_Background_Pack_1/Apartment_Exterior_Night.png",
                },
            ],
        },
        // labels
        {
            name: startLabel.id,
            assets: [
                {
                    alias: "bg01-hallway",
                    src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fbg01-hallway.webp?alt=media",
                },
            ],
        },
        {
            name: secondPart.id,
            assets: [
                {
                    alias: "bg02-dorm",
                    src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fbg02-dorm.webp?alt=media",
                },
            ],
        },
        // characters
        {
            name: "main",
            assets: mainAssets,
        },
        {
            name: "fm01",
            assets: fm01Assets,
        },
        {
            name: "fm02",
            assets: fm02Assets,
        },
        {
            name: "m01",
            assets: m01Assets,
        },
        // backgrounds
        {
            name: "backgrounds_pack1",
            assets: pack1Assets,
        },
        {
            name: "backgrounds_pack2",
            assets: pack2Assets,
        },
        {
            name: "backgrounds_pack3",
            assets: pack3Assets,
        },
    ],
};
export default manifest;
