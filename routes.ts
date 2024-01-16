import { DefaultColors } from './node_modules/tailwindcss/types/generated/colors.d';
/**
 * Defines an array of public routes.
 */
export const publicRoutes = [
    "/"
]

/**
 * Array of authentication routes.
 * @type {string[]}
 */
export const authRoutes = [
    "auth/login",
    "auth/register",
]


/**
 * The prefix for API authentication routes.
 * used for API auth purposes
 * type {string}
 */
export const apiAuthPrefix = "api/auth";

/**
 * The default login redirect path after logging in.
 */
export const DEFAULT_LOGIN_REDIRECT  = "/settings"