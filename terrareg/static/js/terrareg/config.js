
terraregConfigPromiseSingleton = undefined;

async function getConfig() {
    // Create promise if it hasn't already been defined
    if (terraregConfigPromiseSingleton === undefined) {
        terraregConfigPromiseSingleton = new Promise((resolve, reject) => {
            // Perform request to obtain the config
            $.ajax({
                type: "GET",
                url: "/v1/terrareg/config",
                success: function (data) {
                    resolve(data);
                }
            });
        });
    }
    return terraregConfigPromiseSingleton;
}

terraregProviderLogosPromiseSingleton = undefined;
async function getProviderLogos() {
    // Create promise if it hasn't already been defined
    if (terraregProviderLogosPromiseSingleton === undefined) {
        terraregProviderLogosPromiseSingleton = new Promise((resolve, reject) => {
            // Perform request to obtain provider logos
            $.ajax({
                type: "GET",
                url: "/v1/terrareg/provider_logos",
                success: function (data) {
                    resolve(data);
                }
            });
        });
    }
    return terraregProviderLogosPromiseSingleton;
}

terraregIsLoggedInPromiseSingleton = undefined;
async function isLoggedIn() {
    if (terraregIsLoggedInPromiseSingleton === undefined) {
        terraregIsLoggedInPromiseSingleton = new Promise((resolve, reject) => {
            $.ajax({
                url: '/v1/terrareg/auth/admin/is_authenticated',
                statusCode: {
                  200: () => {resolve(true)},
                  401: () => {resolve(false)}
                }
            });
        })
    }

    return terraregIsLoggedInPromiseSingleton;
}