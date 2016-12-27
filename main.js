require.config({

    //baseUrl: "js/scripts",
    baseUrl: "",

    // alias libraries paths
    paths: {
        "angular": "angular",
        "ui-router": "angular-ui-router.min",
        "angularAMD": "angularAMD",

        "c1": "Controller_Default",
        "c2": "Controller_Other",
    },

    shim: {
        "angularAMD": ["angular"],
        "ui-router": ["angular"],
    },

    deps: ['app']
});
