import {
    // Assets,
    moveIn,
    // moveOut,
    narration,
    newChoiceOption,
    newCloseChoiceOption,
    newLabel,
    // showImage,
    showImageContainer,
} from "@drincs/pixi-vn";
import { james, mc, sly, steph } from "../../values/characters";
import { animation01 } from "../animations-labels";

const steph_fullname = "Stephanie";

const meeting = newLabel(
    "meeting",
    [
        async () => {
            await showImageContainer("james", ["main_Frown"]);
            await moveIn(
                "sly",
                {
                    value: ["fm01_summer_Open"],
                    options: { xAlign: 0.2, yAlign: 1 },
                },
                { direction: "right", ease: "anticipate" }
            );
            await moveIn(
                "steph",
                {
                    value: ["fm02_uniform_Open"],
                    options: { xAlign: 0.8, yAlign: 1 },
                },
                { direction: "left", ease: "easeInOut" }
            );
            narration.dialogue = { character: sly, text: `I just wanted to see what the new guy was like.` };
        },
        async () => {
            await showImageContainer("sly", ["fm01_summer_Frown"]);
            narration.dialogGlue = true;
            narration.dialogue = `<span class="inline-block motion-translate-y-loop-25">Hey</span>, you, ${mc.name}- be nice to our little brother,`;
        },
        async () => {
            await showImageContainer("sly", ["fm01_summer_Smile"]);
            narration.dialogGlue = true;
            narration.dialogue = `or you'll have to deal with *us*.`;
        },
        async () => {
            await showImageContainer("james", ["main_Frown"]);
            await showImageContainer("sly", ["fm01_summer_Smile"]);
            await showImageContainer("steph", ["fm02_uniform_Smile"]);
            narration.dialogue = { character: mc, text: `...` };
        },
        async () => {
            await showImageContainer("james", ["main_Smile"]);
            await showImageContainer("sly", ["fm01_summer_Smile"]);
            narration.dialogue = { character: james, text: `${mc.name}, this is ${sly.name}.` };
        },
        async () => {
            await showImageContainer("sly", ["fm01_summer_Frown"]);
            await showImageContainer("steph", ["fm02_uniform_Smile"]);
            narration.dialogGlue = true;
            narration.dialogue = `Yes, that is her real name.`;
        },
        async () => {
            await showImageContainer("james", ["main_Frown"]);
            narration.dialogue = `I put out my hand.`;
        },
        async () => {
            await showImageContainer("james", ["main_Frown"]);
            await showImageContainer("sly", ["fm01_summer_Frown"]);
            await showImageContainer("steph", ["fm02_uniform_Open"]);
            narration.dialogue = {
                character: sly,
                text: `I'm not shakin' your hand until I decide you're an all-right dude.`,
            };
        },
        async () => {
            await showImageContainer("sly", ["fm01_summer_Open"]);
            await showImageContainer("steph", ["fm02_uniform_Open"]);
            narration.dialogGlue = true;
            narration.dialogue = `Sorry, policy.`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-smile00"]);
            narration.dialogue = { character: mc, text: `Fair enough, I'm a pretty scary guy, or so I've been told.` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile01"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
            narration.dialogue = { character: james, text: `The redhead behind her is ${steph_fullname}.` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
            narration.dialogue = {
                character: steph,
                text: `Hey! Everyone calls me ${steph.name}. I'll shake your hand.`,
            };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
            narration.dialogue = `She puts out her hand, and I take it.`;
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
            narration.dialogue = { character: mc, text: `Thanks, good to meet you, ${steph_fullname}.` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-smile00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
            narration.dialogue = {
                character: steph,
                text: `WOW, that is, like, the most perfect handshake I've ever had! Firm, but also gentle.`,
            };
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
            narration.dialogGlue = true;
            narration.dialogue = `${sly.name}, you *gotta* shake his hand!`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
            narration.dialogue = { character: sly, text: `It's just a handshake...` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-upset", "fm02-mouth-upset01"]);
            narration.dialogue = {
                character: steph,
                text: `<span class="inline-block animate-wave">Then just give it to him!</span>`,
            };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-smile01"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-upset", "fm02-mouth-upset00"]);
            narration.dialogue = {
                character: james,
                text: `Don't worry, ${mc.name}, she's just giving you the run-down. She's kinda like a father`,
            };
        },
        async () => {
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-wow01"]);
            narration.dialogGlue = true;
            narration.dialogue = `...`;
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
            narration.dialogGlue = true;
            narration.dialogue = `I mean a mother... to us.`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
            narration.dialogue = `${sly.name} thrusts her hand out to shake mine.`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-wow", "m01-mouth-wow01"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-nervous", "fm02-mouth-smile00"]);
            narration.dialogue = { character: sly, text: `Like a father?!?!` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
            narration.dialogue = `I'm afraid to take her hand when she's mad, but I do.`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-wow01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
            narration.dialogue = { character: sly, text: `Wow, that was a good handshake...` };
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-serious00"]);
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-smile", "fm02-mouth-smile00"]);
            narration.dialogue = { character: james, text: `Well, I mean, you are *kinda* acting like a father.` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-soft", "fm01-mouth-serious00"]);
            narration.dialogGlue = true;
            narration.dialogue = `Like, I can totally see it: I'm the daughter, and you as my father,`;
        },
        async () => {
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-nervous00"]);
            narration.dialogGlue = true;
            narration.dialogue = `you want to make sure I'm going out with the right guy...`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-smile01"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset00"]);
            narration.dialogGlue = true;
            narration.dialogue = `or something...`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-grin00"]);
            narration.dialogue = { character: mc, text: `...` };
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-upset", "fm01-mouth-upset00"]);
            narration.dialogue = { character: sly, text: `...` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-wow01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
            narration.dialogue = { character: steph, text: `...BWAHAHA!!!!!` };
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-wow", "fm01-mouth-serious00"]);
            narration.dialogGlue = true;
            narration.dialogue = `JAMES!!!! WHAAAAT?????? YOU'RE SO AWKWARD!!!!`;
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
            narration.dialogue = { character: mc, text: `O-*kay*, I'm gonna go get settled in-` };
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-smile00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
            narration.dialogue = { character: steph, text: `Wait!` };
        },
        async () => {
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile01"]);
            narration.dialogGlue = true;
            narration.dialogue = `I've got a gift for you!`;
        },
        async () => {
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
            narration.dialogue = { character: mc, text: `...?` };
        },
        async () => {
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-smile01"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-upset00"]);
            narration.dialogue = { character: sly, text: `It's food.` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-grin00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
            narration.dialogue = { character: steph, text: `He doesn't have to know that!!!` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
            narration.dialogue = { character: mc, text: `...thanks... um...` };
        },
        async () => {
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
            narration.dialogue = { character: steph, text: `Oh! You gotta take in your luggage!` };
        },
        async (props) => {
            narration.dialogGlue = true;
            narration.dialogue = `and returns with a HUGE tinfoil-covered platter.`;
            await narration.call(animation01, props);
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-concern", "m01-mouth-smile01"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
            narration.dialogue = { character: james, text: `Looks like you baked way too much again.` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-grin", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-upset", "fm02-mouth-upset01"]);
            narration.dialogue = { character: steph, text: `He doesn't have to know that!!!` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-smile", "m01-mouth-smile00"]);
            await showImageContainer("sly", ["fm01-body", "fm01-eyes-smile", "fm01-mouth-serious00"]);
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-joy", "fm02-mouth-smile00"]);
            narration.dialogue = { character: mc, text: `...thanks... um...` };
        },
        async () => {
            await showImageContainer("steph", ["fm02-body", "fm02-eyes-wow", "fm02-mouth-wow01"]);
            narration.dialogue = { character: steph, text: `Oh! You gotta take in your luggage!` };
        },
        async () => {
            narration.dialogue = `You want continue to the next part?`;
            narration.choices = [
                newChoiceOption("Yes, I want to continue", "bedroom", {}, { type: "jump" }),
                newCloseChoiceOption("No, I want to stop here"),
            ];
        },
    ]
);
export default meeting;