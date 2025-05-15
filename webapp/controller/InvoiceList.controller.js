sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, JSONModel, Formatter) {
    "use strict";
    return Controller.extend("study.controller.InvoiceList", {
        formatter: Formatter,
        onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(oViewModel, "view");
        }
    });
});