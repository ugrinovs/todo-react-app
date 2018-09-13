const mockTokens = {
  randomUser:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhmZGMwZjA4MDc0Zjc2NjRlYWE1OWQiLCJpZCI6IjViOGZkYzBmMDgwNzRmNzY2NGVhYTU5ZCIsImlhdCI6MTUzNjE1NTA5MSwiZXhwIjoxNTM4NzQ3MDkxfQ.O_Yc_a5fUHh6mtKFaW5lOxPffDpIVw-Z9kMSnvsWS1s',
  admin:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhlNTJjMGYwZDBiMjEwMGJhZGNlMzEiLCJpYXQiOjE1MzYxNTIzMzcsImV4cCI6MTUzODc0NDMzN30.wNg67AC_57LPVYkWN7rG-17dGxa02zL_L3lx0ce-bFg'
};

export const mockHeaders = {
  Authorization: `Bearer ${mockTokens.randomUser}`
};
