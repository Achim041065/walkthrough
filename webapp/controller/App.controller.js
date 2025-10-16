sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onClickMeButtonPress: function (oEvent) {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // Show message
        this._neueMethode();
        MessageToast.show(sMsg + this._neueMethode());
      },
      _neueMethode: function () {
        // Neue Methode
        return "\nEigene Methode\n=======Achim Fork=============";
      }
    });
  }
);
