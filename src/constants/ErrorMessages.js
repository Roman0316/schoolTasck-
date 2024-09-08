const ErrorMessages = {
  auth_user_already_exists: 'user_already_exists',
  auth_invalid_email_or_password: 'auth_invalid_email_or_password',
  auth_invalid_password: 'auth_invalid_password',
  auth_invalid_user_role: 'wrong user role',
  auth_jwt_invalid_token: 'auth_jwt_invalid_token',
  auth_missing_jwt_token: 'auth_missing_jwt_token',

  payment_already_exists: 'payment_already_exists',

  lesson_alredy_exists: 'lesson_on_this_date_already_exists',

  missing_required_field: 'missing_required_field',

  user_not_found: 'user_not_found',

  user_or_post_not_found: 'user_or_post_not_found',

  invalid_value_offset: 'invalid_value_offset',
};

module.exports = ErrorMessages;
