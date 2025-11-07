type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: "guest" | "admin" | "super-admin";
  posts: Post[];
};

type Post = {
  id: number;
  title: string;
};

/** How do we ensure that makeUser always returns a user? */
const makeUser = () => {
  return {};
};

export { makeUser };
