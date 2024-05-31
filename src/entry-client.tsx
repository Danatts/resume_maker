// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

// biome-ignore lint: Solid default
mount(() => <StartClient />, document.getElementById("app")!);
