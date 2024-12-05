const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMUNITY: "/community",
  COLLECTION: "/collection",
  JOBS: "/find-jobs",
  PROFILE: (id: string) => `/profile/${id}`,
  TAG: (id: string) => `/tags/${id}`,
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => `/question/${id}`,
};

export default ROUTES;
