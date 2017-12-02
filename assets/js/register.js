$(document).ready(function () {

    $("#signup").click(function () {

                
		$("#message").html('');
                 var user = new Object();
                 user.name = $('#name').val();
                 user.email = $('#email').val();
                 user.regno = $('#regno').val();
                 user.phone = $('#phone').val();
                 user.password = $('#password').val();

                 $.ajax({

                     url: 'https://ccs.csivit.com/signup',

                     type: 'POST',

                     dataType: 'json',

                     data: user,

                     success: function (data, textStatus, xhr) {

                         console.log(data);
			$('form input').val("");
			$('#message').html(data.message);

                     },

                     error: function (xhr, textStatus, errorThrown) {

                         console.log('Error in Operation');

            }
        });
    });
        $('#form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 3,
                        message: 'Please enter valid name'
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    regexp: {
                        regexp: /^[a-z]+.[a-z]*2017@vitstudent\.ac\.in$/,
                        message: 'Please enter your VIT email id'
                    }
                }
            },
            regno: {
                validators: {
                    regexp: {
                        regexp: /^(1)(7)(.)(.)(.)(\d)(\d)(\d)(\d)$/,
                        message: 'Please enter a valid registration number'
                    },
                    notEmpty: {
                        message: 'Please enter registration number'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a phone number'
                    },
                    regexp: {
                        regexp: /^[7-9][0-9]{9}$/,
                        message: 'Please enter a valid phone number'
                    }
                }
            },
            password: {
                validators: {
                     stringLength: {
                        min: 8,
                        message: 'Password must be at least 8 characters long'
                    },
                    notEmpty: {
                        message: 'Please supply your password'
                    }
                }
            },
            confpassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The passwords do not match.'
                        }
                    },
                    notEmpty: {
                        message: 'This field can not be empty.'
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

        });

});

