export const AppConstants = Object.freeze({
    REGEX: {
        EMAIL: new RegExp(
            '^([a-zA-Z0-9_\\-\\.]{1,64})@([a-zA-Z0-9_\\-\\.]{1,249})\\.([a-zA-Z]{2,5})$',
            'i'
        ),
        PASSWORD: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'),
        NUMBERS: new RegExp('^\\+?d*$'),
        STRING: new RegExp('^[\x00-\x7F]*$'),
        USERNAME: new RegExp('^[a-zA-Z]*$'),
        NO_SPECIAL_CHAR: new RegExp('^[A-Za-z0-9._-\\s]+$'),
        MOBILE: new RegExp('^[0-9]{10}$'),
        NO_SPECIAL_CHAR_WITH_BRACKETS: new RegExp('^[A-Za-z0-9@.\\:\\/\\_\\-\\)\\(\\[\\]\\{\\}]+$'),
    },
});