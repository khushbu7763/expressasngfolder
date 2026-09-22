# Express REST API

## Authorization Rules

- Protected routes require a valid JWT Bearer token.
- Regular users can update and delete only their own user data.
- Regular users can update and delete only cats that they own.
- Admin users can update and delete any user's data.
- Admin users can update and delete any cat.
- Unauthorized requests return HTTP 403 Forbidden.
