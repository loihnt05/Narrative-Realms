import { canvas, ImageSprite, narration } from "@drincs/pixi-vn";
import { Box, CircularProgress } from "@mui/joy";
import Stack from "@mui/joy/Stack";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import MenuButton from "../components/MenuButton";
import { CANVAS_UI_LAYER_NAME, NARRATION_ROUTE } from "../constans";
import useGameProps from "../hooks/useGameProps";
import { INTERFACE_DATA_USE_QUEY_KEY } from "../hooks/useQueryInterface";
import useQueryLastSave from "../hooks/useQueryLastSave";
import startLabel from "../labels/startLabel";
import useGameSaveScreenStore from "../stores/useGameSaveScreenStore";
import useInterfaceStore from "../stores/useInterfaceStore";
import useSettingsScreenStore from "../stores/useSettingsScreenStore";
import { loadSave } from "../utils/save-utility";

export default function MainMenu() {
    const setOpenSettings = useSettingsScreenStore((state) => state.setOpen);
    const editHideInterface = useInterfaceStore((state) => state.setHidden);
    const editSaveScreen = useGameSaveScreenStore((state) => state.editOpen);
    const queryClient = useQueryClient();
    const { data: lastSave = null, isLoading } = useQueryLastSave();
    const gameProps = useGameProps();
    const { uiTransition: t, navigate, notify } = gameProps;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        editHideInterface(false);
        let bg = new ImageSprite({}, "background_main_menu");
        bg.load();
        let layer = canvas.getLayer(CANVAS_UI_LAYER_NAME);
        if (layer) {
            layer.addChild(bg);
        }

        return () => {
            canvas.getLayer(CANVAS_UI_LAYER_NAME)?.removeChildren();
        };
    });

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={{ xs: 1, sm: 2, lg: 3 }}
            sx={{
                height: "100%",
                width: "100%",
                paddingLeft: { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 },
            }}
            component={motion.div}
            initial='closed'
            animate={"open"}
            exit='closed'
        >
            <MenuButton
                onClick={() => {
                    if (!lastSave) {
                        return;
                    }
                    setLoading(true);
                    loadSave(lastSave, navigate)
                        .then(() => queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] }))
                        .catch((e) => {
                            notify(t("fail_load"), { variant: "error" });
                            console.error(e);
                        })
                        .finally(() => setLoading(false));
                }}
                transitionDelay={0.1}
                loading={isLoading}
                disabled={(!isLoading && !lastSave) || loading}
            >
                {t("continue")}
            </MenuButton>
            <MenuButton
                onClick={async () => {
                    setLoading(true);
                    canvas.removeAll();
                    await navigate(NARRATION_ROUTE);
                    narration
                        .call(startLabel, gameProps)
                        .then(() => queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] }))
                        .finally(() => setLoading(false));
                }}
                transitionDelay={0.2}
                disabled={loading}
            >
                {t("start")}
            </MenuButton>
            <MenuButton onClick={editSaveScreen} transitionDelay={0.3} disabled={loading}>
                {t("load")}
            </MenuButton>
            <MenuButton onClick={() => setOpenSettings(true)} transitionDelay={0.4}>
                {t("settings")}
            </MenuButton>
            {loading && (
                <Box
                    sx={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        padding: 0.5,
                    }}
                    className='motion-preset-pop'
                >
                    <CircularProgress />
                </Box>
            )}
        </Stack>
    );
}
