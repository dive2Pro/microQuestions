const dpv = new DatePickerView(document, 'datePiker');
dpv.addSelectedListener(function () {
    console.log('addSele-------', arguments)
});

new MultiDatePickerView(document,'multidatePiker');
