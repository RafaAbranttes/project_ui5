sap.ui.define([
    "sap/ui/core/UIComponent",
    "study/model/models",
    "./controller/HelloDialog"
], (UIComponent, models,HelloDialog) => {
    "use strict";

    return UIComponent.extend("study.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            
            var getRootController = this.getRootControl();
            
            // set dialog
            this._helloDialog = new HelloDialog(getRootController);
            
            
            // enable routing
            this.getRouter().initialize();
        },
        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog : function () {
            this._helloDialog.open();
        },
        createContent: function () {
            // eslint-disable-next-line fiori-custom/sap-ui5-legacy-factories
            const oRootView = sap.ui.view({
                id: "idMainView",
                viewName: "study.view.App",
                type: sap.ui.core.mvc.ViewType.XML
            });

            return oRootView;
        }
    });
});