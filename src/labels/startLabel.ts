import {
    Assets,
    narration,
    newLabel,
} from "@drincs/pixi-vn";
import scene1 from "./scenes/scene1";

const startLabel = newLabel(
    "start",
    [
        async (props) => {
            await narration.call(scene1, props);
        },
    ],
    {
        onLoadingLabel: () => {
            Assets.backgroundLoadBundle(["fm01", "fm02", "m01", "main", "backgrounds_pack4"]);
        },
    }
);
export default startLabel;

export const secondPart = newLabel("second_part", [
    async () => {
        narration.dialogue = "Placeholder for second part.";
    },
]);
