sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("study.controller.Home", {
        onInit() {
            var oData = {
                recipient: {
                    "name": "UI5"
                }
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            // set i18n model on view
            var i18nModel = new ResourceModel(
                {
                    bundleName: "study.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: ""
                }
            );
            this.getView().setModel(i18nModel, "i18n");


        },
        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // Show the message
            MessageToast.show(sMsg);
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});