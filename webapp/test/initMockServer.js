sap.ui.define(
[
    "../localService/mockserver"
], function (Mockserver) {
    "use strict";

    //initialise the mock server
    Mockserver.init();

    //initialise the embedded component o the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});