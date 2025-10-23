import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import { lan, mai, minh, tuan } from "../../values/characters";

// List of backgrounds to cycle through for testing
const backgrounds = [
    "bedroom", "bustop", "classroom", "classroom_dark", 
    "desk", "library", "main_corridor", "medical_room",
    "pe_room", "small_path", "temple", "toilet_corridor"
];

let bgIndex = 0;

const scene1 = newLabel("scene1_invitation", [
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: minh, text: `Background 1: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: lan, text: `Background 2: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: mai, text: `Background 3: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: tuan, text: `Background 4: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: minh, text: `Background 5: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: lan, text: `Background 6: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: mai, text: `Background 7: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: tuan, text: `Background 8: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: minh, text: `Background 9: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: lan, text: `Background 10: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: mai, text: `Background 11: ${backgrounds[(bgIndex-1) % backgrounds.length]}` };
    },
    async () => {
        await showImageContainer("bg", [backgrounds[bgIndex++ % backgrounds.length]], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = { character: tuan, text: `Background 12: ${backgrounds[(bgIndex-1) % backgrounds.length]} - All backgrounds tested!` };
    },
]);

export default scene1;
