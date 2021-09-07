import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSP = () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient(
                    'https://devfvg.sharepoint.com/sites/JohnAlex',
                    '4dd4a780-f20e-45de-b459-1ae2e8912150',
                    '8Se3NesU8z3fPkwpehUZKdqFR6SqA0CX9hXsbXRudi8='
                );
            },
        },
    });
}
