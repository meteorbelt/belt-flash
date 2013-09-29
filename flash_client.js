// Flash is a notification system.
// Currently it simply wraps toastr, in the feauter this will be a Meteor
// package.

Flash = toastr;

Flash.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-top-full-width",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

Flash.errorsFromObject = function (message) {
  _.each(message, function (v, k) {
    Flash.error(k + " " + v);
  });
  return;
};

