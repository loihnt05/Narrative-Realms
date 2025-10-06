import { Box } from "@mui/joy";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Routes from "./AppRoutes";
import useClosePageDetector from "./hooks/useClosePageDetector";
import useKeyboardDetector from "./hooks/useKeyboardDetector";
import useEventListener from "./hooks/useKeyDetector";
import RootProvider from "./providers/RootProvider";
import GameSaveScreen from "./screens/GameSaveScreen";
import SaveLoadAlert from "./screens/modals/SaveLoadAlert";
import OfflineScreen from "./screens/OfflineScreen";
import Settings from "./screens/Settings";

function HomeChild() {
    useKeyboardDetector();
    useClosePageDetector();
    // Prevent the user from going back to the previous page
    useEventListener({
        type: "popstate",
        listener: () => {
            window.history.forward();
        },
    });

    return (
        <>
            <Routes />
            <Settings />
            <GameSaveScreen />
            <SaveLoadAlert />
            <OfflineScreen />
            <Box
                sx={{
                    pointerEvents: "auto",
                }}
            >
                <ReactQueryDevtools initialIsOpen={false} />
            </Box>
        </>
    );
}

export default function Home() {
    return (
        <RootProvider>
            <HomeChild />
        </RootProvider>
    );
}
