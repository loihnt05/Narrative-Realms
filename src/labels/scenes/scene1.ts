import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import { minh } from "../../values/characters";

const scene1 = newLabel("scene1_invitation", [
    // Test main_Closed_Frown
    async () => {
        await showImageContainer("bg", ["classroom"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5, width: canvas.screen.width, height: canvas.screen.height });
        await showImageContainer("minh", ["main_Closed_Frown"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 1/18: main_Closed_Frown` };
    },
    async () => {
        await showImageContainer("minh", ["main_Closed_Frown_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 2/18: main_Closed_Frown_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_Closed_Open"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 3/18: main_Closed_Open` };
    },
    async () => {
        await showImageContainer("minh", ["main_Closed_Open_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 4/18: main_Closed_Open_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_Closed_Smile"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 5/18: main_Closed_Smile` };
    },
    async () => {
        await showImageContainer("minh", ["main_Closed_Smile_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 6/18: main_Closed_Smile_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_Frown"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 7/18: main_Frown` };
    },
    async () => {
        await showImageContainer("minh", ["main_Frown_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 8/18: main_Frown_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_Open"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 9/18: main_Open` };
    },
    async () => {
        await showImageContainer("minh", ["main_Open_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 10/18: main_Open_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_Smile"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 11/18: main_Smile` };
    },
    async () => {
        await showImageContainer("minh", ["main_Smile_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 12/18: main_Smile_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Frown"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 13/18: main_shiny_Frown` };
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Frown_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 14/18: main_shiny_Frown_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Open"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 15/18: main_shiny_Open` };
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Open_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 16/18: main_shiny_Open_Blush` };
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Smile"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 17/18: main_shiny_Smile` };
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Smile_Blush"], { x: canvas.screen.width / 2, y: canvas.screen.height / 2, anchor: 0.5 });
        narration.dialogue = { character: minh, text: `Testing 18/18: main_shiny_Smile_Blush - All main sprites tested!` };
    },
]);

export default scene1;
