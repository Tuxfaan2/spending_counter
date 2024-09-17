
export type UserCreated = { name: string; description: string, id: number }[];
export type BadRequest = { code: "bad_request"; message: string };
export type UserResponse =
| (Omit<Response, "json"> & {
status: 201;
json: () => UserCreated | PromiseLike<UserCreated>;
})
| (Omit<Response, "json"> & {
status: 400;
json: () => BadRequest | PromiseLike<BadRequest>;
  });