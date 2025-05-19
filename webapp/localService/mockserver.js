sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "user strict";

    return {
        init: function () {
            //create
            var oMockServer = new MockServer({
                // eslint-disable-next-line fiori-custom/sap-no-hardcoded-url
                rootUri: "https://services.odata.org/V3/Northwind/Northwind.svc/"
            });

            var oUriParameters = new UriParameters(window.location.href);

            // configure mock server with a delay
            MockServer.config(
                {
                    autoRespond: true,
                    autoResponsAfter: oUriParameters.get("serviceDelay") || 500                    
                }
            );

            // simulate 
            var sPath = "../localService";
            oMockServer.simulate(sPath + "metadata.xml", sPath + "/mockdata");

            // start 
            oMockServer.start();
        }
    };
    
} 


);